from flask import redirect, render_template, request, jsonify, flash
from functools import wraps
from flask_wtf.csrf import CSRFProtect, generate_csrf
from models import app, db, login_manager, Posts, Users, Comments
from sqlalchemy import or_
from datetime import datetime
from werkzeug.security import generate_password_hash, check_password_hash
from flask_login import login_user, login_required, logout_user, current_user
import smtplib
import os

app.config['SECRET_KEY'] = 'ilovecats'
csrf = CSRFProtect(app)

with app.app_context():
    db.create_all()

@app.template_filter('current_year')
def current_year_filter(value):
    return datetime.now().year

app.jinja_env.filters['current_year'] = current_year_filter

@login_manager.user_loader
def load_user(id):
    user  = db.session.query(Users).filter(Users.id == id).first()
    return user

def admin_only(f):
    @wraps(f)
    def decorated_function(*args, **kwargs):
        if current_user.id != 1:
            return redirect('/')
        return f(*args, **kwargs)
    return decorated_function

@app.route('/csrf_token', methods=['GET'])
def get_csrf_token():
    csrf_token = generate_csrf()
    return jsonify({"csrf_token": csrf_token})

@app.route('/')
def index():
    categories = ["Personal", "Travel", "Health", "Food", "Lifestyle", "Fitness", "Technology", "Business", "Book Review"]
    posts = db.session.query(Posts).all()

    show = []

    for _ in range(4):
        min = posts[0]
        for post in posts:
            if datetime.strptime(post.date, "%B %d, %Y %I:%M %p") < datetime.strptime(min.date, "%B %d, %Y %I:%M %p"):
                min = post
        min_post = db.session.query(Posts).filter(Posts.id == min.id).first()
        posts.remove(min_post)
        show.append(min)
    return render_template('index.html', posts=show, categories=categories)

@app.route('/login', methods=['POST', 'GET'])
def login():
    
    if request.method == 'POST':

        username = request.form.get('username')
        password = request.form.get('password')
        user = db.session.query(Users).filter(Users.username == username).first()

        if user is None:
            flash('Username and password do not match.')
            return redirect('/login')

        elif not check_password_hash(user.password, password):
            flash('Username and password do not match.')
            return redirect('/login')
        
        login_user(user)
        return redirect('/')
    else:
        return render_template('login.html')

@app.route('/register', methods=['POST', 'GET'])
def register():

    no_passwords = ["password", "password1", "password123", "qwertyuiop", "12345678", "123456789", "1234567890", "77777777", "princess", "qwerty123", "1q2w3e4r", "iloveyou"]
    password_symbols = [
    '!', '"', '#', '$', '%', '&', "'", '(', ')', '*', '+', ',', '-', '.', '/',
    ':', ';', '<', '=', '>', '?', '@', '[', '\\', ']', '^', '_', '`', '{', '|', '}',
    '~'
    ]

    if request.method == 'POST':

        f_name = request.form.get('f_name')
        l_name = request.form.get('l_name')
        email = request.form.get('email')
        username = request.form.get('username')
        password = request.form.get('password')
        confirm = request.form.get('confirm')

        email_a = db.session.query(Users).filter(Users.email == email).first()
        username_a = db.session.query(Users).filter(Users.username == username).first()

        if email_a != None:
            flash('This email is already associated with an account.')
            return redirect('/register')

        if username_a != None:
            flash('That username is taken.')
            return redirect('/register')
        
        if password in no_passwords:
            flash('Your passwords must not be from the list.')
            return redirect('/register')
        
        for i in password:
            if password[i].isupper():
                break
            elif password[i] == password[-1]:
                flash('Your passwords must contain an uppercase letter.')
                return redirect('/register')

        for i in password:
            if password[i] in password_symbols:
                break
            elif password[i] == password[-1]:
                flash('Your passwords must contain a symbol.')
                return redirect('/register')

        if confirm != password:
            flash('Your passwords must match.')
            return redirect('/register')

        new_user = Users()
        new_user.f_name = f_name
        new_user.l_name = l_name
        new_user.email = email
        new_user.username = username
        new_user.password = generate_password_hash(password)
        db.session.add(new_user)
        db.session.commit()
        login_user(new_user)
        return redirect('/')
    else:
        return render_template('register.html')
    
@app.route('/logout')
def logout():
    logout_user()
    return redirect('/')

@app.route('/all')
def all():
    all = db.session.query(Posts).all()

    posts = all[0:9]
    
    button = '''
    <div class="d-flex justify-content-center my-4">
        <button class="btn btn-primary btn-lg" id="all-posts-load-button">Load More</button>
    </div>'''
    return render_template('all.html', posts=posts, heading='All', button=button)

@app.route('/load')
def load():

    start = int(request.args.get('start')) or 0
    end = start + 8

    all_posts = db.session.query(Posts).all()
    posts = []

    for i in range(start, end + 1):
        if len(all_posts) > i:
            all_posts[i] = all_posts[i].__dict__
            del all_posts[i]['_sa_instance_state']
            posts.append(all_posts[i])
        else:
            break

    return jsonify(posts)

@app.route('/new', methods=['POST', 'GET'])
@login_required
@admin_only
def new():
    if request.method == 'POST':
        new_post = Posts()
        new_post.title = request.form.get('title')
        new_post.subtitle = request.form.get('subtitle')
        new_post.author = request.form.get('author')
        new_post.body = request.form.get('body')
        new_post.img_src = request.form.get('img')
        new_post.category = request.form.get('category')
        new_post.date = datetime.now().strftime("%B %d, %Y %I:%M %p")
        db.session.add(new_post)
        db.session.commit()
        return redirect(f'/post/{new_post.id}')
    else:
        categories = ["Personal", "Travel", "Health", "Food", "Lifestyle", "Fitness", "Technology", "Business", "Book Review"]
        return render_template('new.html', categories=categories)

@app.route('/post/<int:postid>')
def post(postid):
    post = db.session.query(Posts).filter(Posts.id == postid).first()
    comments = []
    for comment in post.comments:
        comments.append(comment)
    return render_template('post.html', post=post, comments=comments)

@app.route('/category/<category>')
def category(category):
    posts = db.session.query(Posts).filter(Posts.category == category).limit(9).all()

    button = f'''
    <div class="d-flex justify-content-center my-4">
        <button class="btn btn-primary btn-lg" id="category-load-button" data-category="{category}">Load More</button>
    </div>'''
    return render_template('all.html', posts=posts, heading=category, button=button)

@app.route('/category_load/<category>')
def category_load(category):

    start = int(request.args.get('start')) or 0
    end = start + 8

    all_posts = db.session.query(Posts).filter(Posts.category == category).all()
    posts = []

    for i in range(start, end + 1):
        if len(all_posts) > i:
            all_posts[i] = all_posts[i].__dict__
            del all_posts[i]['_sa_instance_state']
            posts.append(all_posts[i])
        else:
            break

    return jsonify(posts)

@app.route('/search/<query>')
def search(query):

    posts = db.session.query(Posts).filter(
        or_(Posts.title.ilike(f'%{query}%'),
            Posts.subtitle.ilike(f'%{query}%'),
            Posts.author.ilike(f'%{query}%'),
            Posts.body.ilike(f'%{query}%'),
            Posts.date.ilike(f'%{query}%'),
            Posts.category.ilike(f'%{query}%'),
        )
    ).distinct(Posts.id).limit(9).all()

    button = f'''
    <div class="d-flex justify-content-center my-4">
        <button class="btn btn-primary btn-lg" id="search-load-button" data-query="{query}">Load More</button>
    </div>'''
    return render_template('all.html', posts=posts, heading=query, button=button)

@app.route('/search_load/<query>')
def search_load(query):

    start = int(request.args.get('start')) or 0
    end = start + 8

    all_posts = db.session.query(Posts).filter(
        or_(Posts.title.ilike(f'%{query}%'),
            Posts.subtitle.ilike(f'%{query}%'),
            Posts.author.ilike(f'%{query}%'),
            Posts.body.ilike(f'%{query}%'),
            Posts.date.ilike(f'%{query}%'),
            Posts.category.ilike(f'%{query}%'),
        )
    ).distinct(Posts.id).all()
    posts = []

    for i in range(start, end + 1):
        if len(all_posts) > i:
            all_posts[i] = all_posts[i].__dict__
            del all_posts[i]['_sa_instance_state']
            posts.append(all_posts[i])
        else:
            break

    return jsonify(posts)

@app.route('/comment/<int:postid>', methods=['POST'])
@login_required
def comment(postid):

    username = request.form.get('username')
    body = request.form.get('body')
    new_comment = Comments()
    new_comment.comment = body
    new_comment.author = username
    new_comment.post = postid
    new_comment.date = datetime.now().strftime("%B %d, %Y %I:%M %p")
    db.session.add(new_comment)
    db.session.commit()
    return redirect(f'/post/{postid}')

@app.route('/update/<int:postid>', methods=['PUT', 'GET'])
@login_required
@admin_only
def update(postid):
    post = db.session.query(Posts).filter(Posts.id == postid).first()

    if request.method == 'PUT':
        data = request.get_json()
        post.title = data['title']
        post.subtitle = data['subtitle']
        post.author = data['author']
        post.body = data['body']
        post.img_src = data['img_src']
        post.category = data['category']
        post.date = datetime.now().strftime("%B %d, %Y %I:%M %p")
        db.session.commit()
        return jsonify({"success": "Post was successfully updated"}), 200
    else:
        categories = ["Personal", "Travel", "Health", "Food", "Lifestyle", "Fitness", "Technology", "Business", "Book Review"]
        categories.pop(categories.index(post.category))
        return render_template('update.html', post=post, categories=categories)

@app.route('/delete/<int:postid>', methods=['DELETE'])
@login_required
@admin_only
def delete(postid):

    post = db.session.query(Posts).filter(Posts.id == postid).first()

    if not post:
        return jsonify({"error": "Post not found"}), 404

    db.session.delete(post)
    db.session.commit()

    return jsonify({"success": "Post was successfully deleted"}), 200

@app.route('/about', methods=['GET'])
def about():
    return render_template('about.html')

@app.route('/contact', methods=['POST', 'GET'])
def contact():

    my_email = os.environ.get('SMTP_EMAIL')
    password = os.environ.get('SMTP_PASSWORD')

    if request.method == 'POST':
        name = request.form.get('name')
        email = request.form.get('email')
        body = request.form.get('body')
        connection = smtplib.SMTP("smtp.gmail.com")
        connection.starttls()
        connection.login(my_email, password)
        connection.sendmail(from_addr=my_email, to_addrs=my_email, 
                            msg=f'Subject: Blog Contact!\n\nA user wanted to contact you saying the following: \n{body}\n Their name is {name} and they can be reached at {email}.')
        connection.close()
        flash('Email was successfully sent.')
        return redirect('/contact')
    else:
        return render_template('contact.html')


@app.route('/profile', methods=['POST', 'GET'])
@login_required
def edit_profile():
    
    user = db.session.query(Users).filter(Users.id == current_user.id).first()

    if request.method == 'POST':
        f_name = request.form.get('f_name')
        l_name = request.form.get('l_name')
        email = request.form.get('email')
        username = request.form.get('username')

        email_a = db.session.query(Users).filter(Users.email == email).first()
        username_a = db.session.query(Users).filter(Users.username == username).first()

        if email_a != None and email_a != current_user:
            flash('<p style="color:red">This email is already associated with an account.</p>')
            return redirect('/profile')

        if username_a != None and username_a != current_user:
            flash('<p style="color:red">That username is taken.</p>')
            return redirect('/profile')
        
        if user.f_name == f_name and user.l_name == l_name and user.email == email and user.username == username:
            return redirect('/profile')

        user.f_name = f_name
        user.l_name = l_name
        user.email = email
        user.username = username
        db.session.commit()
        flash('<p style="color:green">Your information was successfully updated.</p>')
        return redirect('/profile')
    else:
        return render_template('profile.html', user=user)

@app.route('/password', methods=['GET', 'PUT'])
@login_required
def password():

    user = db.session.query(Users).filter(Users.id == current_user.id).first()

    no_passwords = ["password", "password1", "password123", "qwertyuiop", "12345678", "123456789", "1234567890", "77777777", "princess", "qwerty123", "1q2w3e4r", "iloveyou"]
    password_symbols = [
    '!', '"', '#', '$', '%', '&', "'", '(', ')', '*', '+', ',', '-', '.', '/',
    ':', ';', '<', '=', '>', '?', '@', '[', '\\', ']', '^', '_', '`', '{', '|', '}',
    '~'
    ]

    if request.method == 'PUT':
        data = request.get_json()
        password = data['password']
        confirm = data['confirm']

        if password in no_passwords:
            flash('<p style="color:red">Your passwords must not be from the list.</p>')
            return jsonify({"error": "Your passwords must not be from the list."})
        
        for i in range(len(password)):
            if password[i].isupper():
                break
            elif password[i] == password[-1]:
                flash('<p style="color:red">Your passwords must contain an uppercase letter.</p>')
                return jsonify({"error": "Your passwords must contain an uppercase letter."})

        for i in range(len(password)):
            if password[i] in password_symbols:
                break
            elif password[i] == password[-1]:
                flash('<p style="color:red">Your passwords must contain a symbol.</p>')
                return jsonify({"error": "Your passwords must contain a symbol."})

        if confirm != password:
            flash('<p style="color:red">Your passwords must match.</p>')
            return jsonify({"error": "Your passwords must match."})

        user.password = password
        db.session.commit()
        flash('<p style="color:green">Your information was successfully updated.</p>')
        return jsonify({"success": "Post was successfully deleted"}), 200
    else:
        return render_template('password.html', user=user)
