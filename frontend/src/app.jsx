import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useParams, useLocation } from "react-router-dom";
import Nav from './components/nav';
import SideNav from './components/sidenav';
import Chart from 'chart.js/auto';

function Main(props) {

  return (<main className='center-screen'>
            <div className="cs-main">
              <div className="container py-5">
                <h1 className="display-5 fw-bold">Welcome to PeakPrep</h1>
                <p className="col-md-8 fs-4">The Best Location For FREE OAT Prep Content.</p>
                <ul>
                  <li><i class="fa-solid fa-circle-check"></i>&nbsp; Updated for 2023</li>
                  <li><i class="fa-solid fa-circle-check"></i>&nbsp; XXXX+ Questions</li>
                  <li><i class="fa-solid fa-circle-check"></i>&nbsp; Full Guides</li>
                  <li><i class="fa-solid fa-circle-check"></i>&nbsp; Full Notes</li>
                  <li><i class="fa-solid fa-circle-check"></i>&nbsp; Linked Videos</li>
                </ul>
                <button className="btn" type="button">Register</button>
                <img src="/ipad.png" alt='ipad' />
              </div>
            </div>
            <div className='seperator'> sdfsdf</div>

            {/* <p>I simply belive that every road you walk on was paved by someone before you. Therefore, if you don't pay that favor back, you're hurting society.</p> */}

            <div className="container vsl">
              <h3>Find out why we're the best test prep course out there!</h3>
              <h3><i class="fa-solid fa-chevron-down"></i></h3>
              <iframe width="560" height="315" src="https://www.youtube.com/embed/jNQXAC9IVRw?si=NYcpUc_Cwp0wk09g" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>
            <div className='details'>
              <div className='seperator2-top'></div>
              <div className="cs-sec">
                <span>
                  <h2>Proven to Work!</h2>
                  <p>These are the tools that I used to prepare for the OAT. I took the OAT and got a 390AA and 400TS on my <u>first try.</u></p>
                </span>
                <img src="/grades.svg" />
              </div>
              <div className='seperator2-bottom'></div>
            </div>
            <div className='container offerings'>
              <div className='row'>
                <div className='col header-col'>
                  <h1>What we offer</h1>
                  <p>Victory SCREEECH</p>
                </div>
                <img className='offer-img' src='/random.jpeg' />
                <div className='col offer-btns-div'>
                  <button className='offer-btn active'>Chapter Notes</button>
                  <button className='offer-btn'>Linked Videos</button>
                  <button className='offer-btn'>Practice Questions</button>
                  <button className='offer-btn'>Practice Exams</button>
                  <button className='offer-btn'>Flashcards</button>
                  <button className='offer-btn'>Study Guides</button>
                </div>
              </div>
            </div>
            <div className='container pricing'>
              <div className='row'>
                <div className='col header-col'>
                  <h1>Pricing</h1>
                  <p>This is as low as it gets motherfucker. Buy Now.</p>
                </div>
              </div>
              <div className='row row-cols-md-4 row-cols-3'>
                <div className='col price-col'>
                  <h2>Free</h2>
                  <div>
                    <p>FREE</p>
                    <ul>
                      <li>Videos for all subjects</li>
                      <li>Study guides</li>
                      <li className='not-included'>Practice flashcards</li>
                      <li className='not-included'>Practice test questions</li>
                      <li className='not-included'>Practice exams</li>
                      <li className='not-included'>Practice flashcards</li>
                    </ul>
                    <button className="btn" type="button">Register</button>
                  </div>
                </div>
                <div className='col price-col'>
                  <h2>1 Month Plan</h2>
                  <div>
                    <p><info>$70<span>/mo</span></info></p>
                    <ul>
                      <li>Videos for all subjects</li>
                      <li>Study guides</li>
                      <li>Practice flashcards</li>
                      <li>Practice test questions</li>
                      <li>Practice exams</li>
                      <li>Practice flashcards</li>
                    </ul>
                    <button className="btn" type="button">Register</button>
                  </div>
                </div>
                <div className='col price-col'>
                  <h2>3 Month Plan</h2>
                  <div>
                    <p><s><span>$210</span></s><info>$180<span>/3mo</span></info></p>
                    <ul>
                      <li>Videos for All Subjects</li>
                      <li>Study Guides</li>
                      <li>Flashcards</li>
                      <li>Practice Questions</li>
                      <li>Practice Tests</li>
                      <li>Practice flashcards</li>
                    </ul>
                    <button className="btn" type="button">Register</button>
                  </div>
                </div>
              </div>
            </div>
          </main>)
}


{/* <div className="col-md-6">
  <div className="cs-sec">
    <h2>Free Content!</h2>
    <p><u>All content that I recieved for FREE is FREE for the public.</u> The only content behind a paywall are the ones that I personally created.
    This project began in order to create a system that <strong>WON'T</strong> break the bank.</p>
    <img src="/piggy.svg" />
  </div>
</div> */}


function Home(props) {

  useEffect(() => {
    const sidebar = document.querySelector('.small-sidebar');
    const main = document.querySelector('main');

    if (sidebar && main) {
      sidebar.classList.toggle('small-sidebar', props.sidebarOpen);
      main.classList.toggle('full-length', props.sidebarOpen);
    }
  }, [props.sidebarOpen]);

  return (<main className="homepage">
            <h1>Personal</h1>
            <div className='row'>
              <div className='col-12 todo-list'>
                <h2>To-Do List:</h2>
                <ul>
                  <li>Use pomodoro timer</li>
                </ul>
                <form>
                  <input type="text" placeholder='Add Item'/>
                  <button type='button' className='btn'>Add</button>
                </form>
              </div>
            </div>
            <h1>Courses</h1>
            <div className='row'>
              <div className='col-12 flashcards'>
                <h2>Flashcards:</h2>
                <button className='btn bio-fc-btn'>Biology</button>
                <button className='btn genchem-fc-btn'>General Chemistry</button>
                <button className='btn ochem-fc-btn'>Organic Chemistry</button>
                <button className='btn physics-fc-btn'>Physics</button>
                <button className='btn qr-fc-btn'>Quantitative Reasoning</button>
                <button className='btn perceptual-fc-btn'>Perceptual Ability</button>
              </div>
            </div>
            <div className='row row-cols-lg-4 row-cols-md-3 row-cols-2'>
              <div className='col home-col'>
                <i className="fa-solid fa-dna"></i>                  
                <h2>Biology</h2>
                <label>Progress:</label><br/>
                <div className="progress">
                  <div className="progress-bar" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
                <button className='btn'>Go to Module <i className="fa-solid fa-chevron-right"></i></button>
              </div>
              <div className='col home-col'>
                <i className="fa-solid fa-atom"></i>                  
                <h2>General Chemistry</h2>
                <label>Progress:</label><br/>
                <div className="progress">
                  <div className="progress-bar" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
                <button className='btn'>Go to Module <i className="fa-solid fa-chevron-right"></i></button>
              </div>
              <div className='col home-col'>
                <i className="fa-solid fa-flask"></i>                  
                <h2>Organic Chemistry</h2>
                <label>Progress:</label><br/>
                <div className="progress">
                  <div className="progress-bar" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
                <button className='btn'>Go to Module <i className="fa-solid fa-chevron-right"></i></button>
              </div>
              <div className='col home-col'>
                <i className="fa-solid fa-arrows-up-down-left-right"></i>                  
                <h2>Physics</h2>
                <label>Progress:</label><br/>
                <div className="progress">
                  <div className="progress-bar" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
                <button className='btn'>Go to Module <i className="fa-solid fa-chevron-right"></i></button>
              </div>
              <div className='col home-col'>
                <i className="fa-solid fa-book"></i>                  
                <h2>Reading Comprehension</h2>
                <label>Progress:</label><br/>
                <div className="progress">
                  <div className="progress-bar" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
                <button className='btn'>Go to Module <i className="fa-solid fa-chevron-right"></i></button>
              </div>
              <div className='col home-col'>
                <i className="fa-solid fa-calculator"></i>                  
                <h2>Quantitative Reasoning</h2>
                <label>Progress:</label><br/>
                <div className="progress">
                  <div className="progress-bar" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
                <button className='btn'>Go to Module <i className="fa-solid fa-chevron-right"></i></button>
              </div>
              <div className='col home-col'>
                <i className="fa-solid fa-eye"></i>                  
                <h2>Perceptual Ability</h2>
                <label>Progress:</label><br/>
                <div className="progress">
                  <div className="progress-bar" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
                <button className='btn'>Go to Module <i className="fa-solid fa-chevron-right"></i></button>
              </div>
              <div className='col empty-col'>
              </div>
              <div className='col empty-col'>
              </div>
            </div>
          </main>)
}

function Subject(props) {
    const { subject } = useParams();

    useEffect(() => {
      const sidebar = document.querySelector('.small-sidebar');
      const main = document.querySelector('main');
  
      if (sidebar && main) {
        sidebar.classList.toggle('small-sidebar', props.sidebarOpen);
        main.classList.toggle('full-length', props.sidebarOpen);
      }
    }, [props.sidebarOpen]);

    function toggleAccordion(sectionNumber, event) {
      const contentId = "content" + sectionNumber;
      document.getElementById(contentId).classList.toggle('active');
      event.target.querySelector('.accordion-chevron').classList.toggle('active')
    }

    const toggleList = ['fa-circle', 'fa-solid', 'fa-regular', 'fa-circle-check']

    function checkSection(event) {
      event.target.closest('.accordion-btns').classList.toggle('done_section')
      const icon = event.target.querySelector('i')
      toggleList.forEach(element=> {
        icon.classList.toggle(element)
      })
    }

    return (<main className='container-fluid subject'>
              <h1>{subject}</h1>
              <div className="accordion">
                <div className="accordion-item">
                  <div className="accordion-header" onClick={(event)=>{toggleAccordion(1, event)}}>
                    <div>
                    <h2>Chapter 1: Cell Biology</h2>
                    <p>(<span className='chapters-complete'>0</span> / <span className='total-chapters'>2</span> Complete)</p>
                    </div>
                    <i className="fa-solid fa-chevron-down accordion-chevron"></i>
                  </div>
                  <div className="accordion-content" id="content1">
                    <div className='accordion-btns'>
                      <button className='button-title'>Section 1 Reading</button>
                      <button className='button-check' onClick={(event)=>checkSection(event)}><i className="fa-regular fa-circle accordion-check"></i></button>
                    </div>
                    <div className='accordion-btns'>
                      <button className='button-title'>Section 1 Practice Questions</button>
                      <button className='button-check' onClick={(event)=>checkSection(event)}><i className="fa-regular fa-circle accordion-check"></i></button>
                    </div>
                  </div>
                </div>
              </div>
            </main>)
}

function Questions(props) {

    useEffect(() => {
      const sidebar = document.querySelector('.small-sidebar');
      const main = document.querySelector('main');

      if (sidebar && main) {
        sidebar.classList.toggle('small-sidebar', props.sidebarOpen);
        main.classList.toggle('full-length', props.sidebarOpen);
      }
    }, [props.sidebarOpen]);

    function removeAnswer(event) {
      event.target.classList.toggle('cancel')
    }

    function scrollPosition(event) {
        const parent = document.querySelector('.questions-list-parent')
        const questions = event.target
        const isAtBottom = questions.scrollHeight - questions.scrollTop <= questions.clientHeight + 1;
        const isAtTop = questions.scrollTop === 0
      
        if (isAtBottom) {
          parent.classList.add('at-bottom')
        }
        else if (isAtTop) {
          parent.classList.remove('at-bottom')
          parent.classList.remove('not-top')
        }
        else {
          parent.classList.remove('at-bottom')
          parent.classList.add('not-top')
        }
      
    };

    return(<main className='questions'>
            <div className='questions-list-parent'>
                <div className='questions-list-section'>
                  <h5>Biology</h5>
                  <button className='btn back-btn'><i class="fa-solid fa-chevron-left"></i>&nbsp; Back</button>
                </div>
                <div className='questions-list-header'>
                  <h5>Questions complete:</h5>
                  <div className="progress">
                    <div className="progress-bar" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                  </div>
                  <hr/>
                  <h5>Sort:</h5>
                  <form className='questions-sort'>
                    <select name='sort'>
                      <option selected>All Questions</option>
                      <option>Tagged Questions</option>
                      <option>Incomplete Questions</option>
                      <option>Complete Questions</option>
                    </select>
                  </form>
                </div>
                <div className='questions-list' onScroll={(event)=>scrollPosition(event)}>
                    <button className='btn selected'>Question 1</button>
                    <button className='btn'>Question 2</button>
                    <button className='btn'>Question 3</button>
                    <button className='btn'>Question 4</button>
                    <button className='btn'>Question 5</button>
                    <button className='btn'>Question 6</button>
                    <button className='btn'>Question 7</button>
                    <button className='btn'>Question 8</button>
                    <button className='btn'>Question 1</button>
                    <button className='btn'>Question 2</button>
                    <button className='btn'>Question 3</button>
                    <button className='btn'>Question 4</button>
                    <button className='btn'>Question 5</button>
                    <button className='btn'>Question 6</button>
                    <button className='btn'>Question 7</button>
                    <button className='btn'>Question 8</button>
                    <button className='btn'>Question 1</button>
                    <button className='btn'>Question 2</button>
                    <button className='btn'>Question 3</button>
                    <button className='btn'>Question 4</button>
                    <button className='btn'>Question 5</button>
                    <button className='btn'>Question 6</button>
                    <button className='btn'>Question 7</button>
                    <button className='btn'>Question 8</button>
                </div>
            </div>
            <div className='question-area'>
                <h3>Question:</h3>
                <p>What is the mass of the Earth?</p>
                <form>
                  <span>A: &nbsp;<input class="form-check-input" type="radio" name='option' />&nbsp; <label onClick={(event)=>removeAnswer(event)}>1kg</label></span>
                  <span>B: &nbsp;<input class="form-check-input" type="radio" name='option' />&nbsp; <label onClick={(event)=>removeAnswer(event)}>1kg+</label></span>
                  <div className='questions-buttons'>
                    <div className='left-side-btns'>
                      <button type='button' className='btn back-btn'>Back</button>
                    </div>
                    <div className='right-side-btns'>
                      <button type='button' className='btn next-btn'>Next</button>
                      <button type='button' className='btn check-btn'>Check Answer</button>
                      <button type='button' className='btn mark-btn'>Mark</button>
                    </div>
                  </div>
                </form>
            </div>
          </main>)
}

function NavigationHandler(props){
  const location = useLocation();
  const [showNav, setShowNav] = useState(true);

  useEffect(() => {
    setShowNav(location.pathname === '/');
  }, [location]);

  return showNav ? <Nav /> : <SideNav setSidebarOpen={props.setSidebarOpen} />;
};

function App(props) {
    const [ sidebarOpen, setSidebarOpen ] = useState(true)

    return (
      <Router>
          <NavigationHandler setSidebarOpen={setSidebarOpen} />
          <Routes>
            <Route exact path="/" element={<Main/>} />
            <Route exact path="/home" element={<Home sidebarOpen={setSidebarOpen} />} />
            <Route exact path="/subject/:subject" element={<Subject sidebarOpen={sidebarOpen} />} />
            <Route exact path="questions" element={<Questions sidebarOpen={sidebarOpen} />} />
          </Routes>
      </Router>
    )
  }
  
  export default App;