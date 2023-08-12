
all_counter = 0
cat_counter = 0
srch_counter = 0

document.addEventListener('DOMContentLoaded', ()=>{
    CKEDITOR.replace('editor');
    CKEDITOR.replace('editor2');

    if (window.localStorage.getItem('dark_mode')) {
      dark_mode(window.localStorage.getItem('dark_mode'))
    }
    else {
      window.localStorage.setItem('dark_mode', 'light')
    }

    document.querySelector('#dark_mode').addEventListener('click', (event)=>{
      event.preventDefault()
      mode = event.target.dataset.color
      dark_mode(mode)
      window.localStorage.setItem('dark_mode', mode)
    })

    document.querySelector('#search_form').addEventListener('submit', (event)=>{
      event.preventDefault()
      query = document.querySelector('#search_form_input').value
      window.location.pathname = `/search/${query}`
    })

    if (document.querySelector('#all-posts-load-button')) {
      document.querySelector('#all-posts-load-button').addEventListener('click', ()=>{
        all_counter += 9
        load_all_posts(all_counter)
      })
    }

    if (document.querySelector('.album-item-click')) {
      document.querySelectorAll('.album-item-click').forEach(element => {
        element.addEventListener('click', (event)=>{
          window.location.pathname = "/post/" + event.target.dataset.id
        })
      })
    }

    if (document.querySelector('#search-load-button')) {
      document.querySelector('#search-load-button').addEventListener('click', (event)=>{
        query = event.target.dataset.query
        srch_counter += 9
        load_search_posts(query, srch_counter)
      })
    }

    if (document.querySelector('#category-load-button')) {
      document.querySelector('#category-load-button').addEventListener('click', (event)=>{
        category = event.target.dataset.category
        cat_counter += 9
        load_cat_posts(category, cat_counter)
      })
    }

    if (document.querySelector('#make_comment')) {
      document.querySelector('#make_comment').addEventListener('click', (event) => {
        event.target.style.display = 'none'
        make_comment = document.querySelector('#ind-post-comments')
        make_comment.className = "d-flex justify-content-center"
        make_comment.style.display = 'block'
      })
    }
    
    if (document.querySelector('#edit_post')) {
      document.querySelector('#edit_post').addEventListener('click', (event)=>{
        postid = event.target.dataset.id
        window.location.pathname = '/update/' + postid
      })
    }

    if (document.querySelector('#update_post_button')) {
      document.querySelector('#update_post_button').addEventListener('click', (event)=>{
        postid = event.target.dataset.id
        update_post(postid)
      })
    }

    if (document.querySelector('#delete_post')) {
      document.querySelector('#delete_post').addEventListener('click', (event)=>{
        if (confirm("Are you sure you want to delete this post?")) {
          postid = event.target.dataset.id
          delete_post(postid)
        }
      })
    }

    if (document.querySelector('#edit_profile_button')) {
      document.querySelector('#edit_profile_button').addEventListener('click', (event) => {
        event.target.style.display = 'none'
        document.querySelector('#change_pw_button').style.display = 'none'
        document.querySelector('#edit_buttons').style.display = 'block'
        
        form = document.querySelector('#edit_profile_form')
        form.querySelector('input[name="f_name"]').disabled = false,
        form.querySelector('input[name="l_name"]').disabled = false,
        form.querySelector('input[name="email"]').disabled = false,
        form.querySelector('input[name="username"]').disabled = false
      })
    }

    if (document.querySelector('#change_pw_button')) {
      document.querySelector('#change_pw_button').addEventListener('click', () => {
        window.location.pathname = '/password'
      })
    }

    if (document.querySelector('#confirm_pw_button')) {
      document.querySelector('#confirm_pw_button').addEventListener('click', (event)=>{
        event.preventDefault()
        update_pw()
      })
    }
  });

  function dark_mode(mode) {

    button = document.querySelector('#dark_mode')
    body = document.querySelector('body').style

    if (mode == 'light') {
      body.backgroundColor = '#1C2833'
      body.color = 'white'

      document.querySelectorAll('.navbar-color').forEach(element => {
        element.style.color = 'white'})
      document.querySelector('#navbar-custom').style.backgroundColor = '#2E4053' 
      document.querySelector('#footer').style.backgroundColor = '#2E4053'

      try {
      document.querySelector('#album').style.backgroundColor = '#1C2833'
      document.querySelector('#album_heading').style.color = 'white'
      }
      catch {}

      button.dataset.color = 'dark'
      button.innerHTML = 'Dark Mode: On'
    }
    
    else {
      body.backgroundColor = 'white'
      body.color = 'black'

      document.querySelectorAll('.navbar-color').forEach(element => {
          element.style.color = 'black'})
      document.querySelector('#navbar-custom').style.backgroundColor = '#F8F9FA' 
      document.querySelector('#footer').style.backgroundColor = '#F8F9FA' 

      try {
        document.querySelector('#album').style.backgroundColor = 'white'
        document.querySelector('#album_heading').style.color = 'black'
      }
      catch {}

      button.dataset.color = 'light'
      button.innerHTML = 'Dark Mode: Off'
    }
  }

  function load_all_posts(all_counter) {
    main_div = document.querySelector('.album_rows')

    fetch('/load?start=' + all_counter)
      .then(response => response.json())
      .then(data => {

        if (data.length === 0) {
          alert('No more blog posts.')
          exit()
        }

        for (i=0;i<data.length;i++) {
          id = data[i]['id']
          title = data[i]['title']
          subtitle = data[i]['subtitle']
          author = data[i]['author']
          date = data[i]['date']
          body = data[i]['body']
          img_src = data[i]['img_src']

          new_element = document.createElement('div')
          new_element.className = "col album-item-click" 
          new_element.dataset.id = id

          new_element.innerHTML = `
          <div class="card all_posts_container" onclick="window.location.pathname = '/post/${id}'">
            <div class="card-img">
              <img loading="lazy" src='${img_src }' width="100%" style="object-fit: fill; min-height: 255px;">
            </div>

            <div class="card-body">
                <p class="card-text"><b>${title}</b></p>
                <small class="text-muted">${date}</small>
            </div>
          </div>
          `

          main_div.append(new_element)
        }
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }

  function load_search_posts(query, srch_counter) {

    main_div = document.querySelector('.album_rows')

    fetch(`/search_load/${query}?start=` + srch_counter)
    .then(response => response.json())
    .then(data => {

      if (data.length === 0) {
        alert('No more blog posts in this query.')
        return
      }

      for (i=0;i<data.length;i++) {
        id = data[i]['id']
        title = data[i]['title']
        subtitle = data[i]['subtitle']
        author = data[i]['author']
        date = data[i]['date']
        body = data[i]['body']
        img_src = data[i]['img_src']

        new_element = document.createElement('div')
        new_element.className = "col album-item-click" 
        new_element.dataset.id = id

        new_element.innerHTML = `
        <div class="card all_posts_container" onclick="window.location.pathname = '/post/${id}'">
            <div class="card-img">
              <img loading="lazy" src='${img_src }' width="100%" style="object-fit: fill; min-height: 255px;">
            </div>

          <div class="card-body">
              <p class="card-text"><b>${title}</b></p>
              <small class="text-muted">${date}</small>
          </div>
        </div>
        `

        main_div.append(new_element)
      }
    })
    .catch(error => {
      console.error('Error:', error);
    });
  }

  function load_cat_posts(category, cat_counter) {

    main_div = document.querySelector('.album_rows')

    fetch(`/category_load/${category}?start=` + cat_counter)
    .then(response => response.json())
    .then(data => {

      if (data.length === 0) {
        alert('No more blog posts in this category.')
        return
      }

      for (i=0;i<data.length;i++) {
        id = data[i]['id']
        title = data[i]['title']
        subtitle = data[i]['subtitle']
        author = data[i]['author']
        date = data[i]['date']
        body = data[i]['body']
        img_src = data[i]['img_src']

        new_element = document.createElement('div')
        new_element.className = "col album-item-click" 
        new_element.dataset.id = id

        new_element.innerHTML = `
        <div class="card all_posts_container" onclick="window.location.pathname = '/post/${id}'">
          <div class="card-img-top overflow-hidden" >
            <img loading="lazy" src='${img_src }' width="100%" style="object-fit: fill; min-height: 255px;">
          </div>

          <div class="card-body">
              <p class="card-text"><b>${title}</b></p>
              <small class="text-muted">${date}</small>
          </div>
        </div>
        `

        main_div.append(new_element)
      }
    })
    .catch(error => {
      console.error('Error:', error);
    });
  }


  async function getCSRF() {
    const response = await fetch("/csrf_token", {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })

    const data = await response.json();
    const csrfToken = data.csrf_token;
    return csrfToken
  }

  async function update_post(postid) {
    csrf = await getCSRF()
    form = document.querySelector('#update_post_form')

    data = {
      'title': form.querySelector('input[name="title"]').value,
      'subtitle': form.querySelector('input[name="subtitle"]').value,
      'author': form.querySelector('input[name="author"]').value,
      'img_src': form.querySelector('input[name="img"]').value,
      'category': form.querySelector('select[name="category"]').value,
      'body': CKEDITOR.instances.editor.getData()
    }

    console.log(data['body'])

    fetch(`/update/${postid}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'X-CSRF-Token': csrf
        },
        body: JSON.stringify(data)
      })
      .then(response => response.json())
      .then(data => {
        window.location.pathname = `/post/${postid}`
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }

  async function delete_post(postid) {
    csrf = await getCSRF()

    fetch(`/delete/${postid}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'X-CSRF-Token': csrf
        }
      })
      .then(response => response.json())
      .then(data => {
        window.location.pathname = '/all'
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }

  async function update_pw() {
    csrf = await getCSRF()
    form = document.querySelector('#change_pw_form')

    data = {
      'password': form.querySelector('input[name="password"]').value,
      'confirm': form.querySelector('input[name="confirm"]').value,
    }

    fetch(`/password`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'X-CSRF-Token': csrf
        },
        body: JSON.stringify(data)
      })
      .then(response => response.json())
      .then(data => {
        if (data.success){
          window.location.pathname = '/'
        }
        else {
          location.reload()
        }
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }