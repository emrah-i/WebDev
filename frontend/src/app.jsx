import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useParams } from "react-router-dom";
import Nav from './components/nav';
import SideNav from './components/sidenav'

function Main(props) {

  return (<main className='center-screen'>
            <div className="cs-main">
              <div className="container-fluid py-5">
                <h1 className="display-5 fw-bold">Welcome to PeakPrep</h1>
                <p className="col-md-8 fs-4">The Best Location For FREE DAT/OAT Prep Content.</p>
                <button className="btn btn-primary btn-lg" type="button">Register</button>
              </div>
            </div>
            <p>I simply belive that every road you walk on was paved by someone before you. Therefore, if you don't pay that favor back, you're hurting society.</p>

            <div className="row align-items-md-stretch">
              <div className="col-md-6">
                <div className="cs-sec">
                  <h2>Proven to Work:</h2>
                  <p>These are my personal tools that I used to get a 390AA and 400TS on the OAT</p>
                  <button className="btn btn-outline-light" type="button">Example button</button>
                </div>
              </div>
              <div className="col-md-6">
                <div className="cs-sec">
                  <h2>All Content is Free!</h2>
                  <p>All content that I recieved for FREE is FREE for the public. The only content behind a paywall are the ones that I personally created.</p>
                  <button className="btn btn-outline-secondary" type="button">Example button</button>
                </div>
              </div>
            </div>
          </main>)
}

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

    function changeCheck(event) {
      const hover_element = event.target
      const icon = hover_element.querySelector('i')
      toggleList.forEach(element=> {
        icon.classList.toggle(element)
      })
    }

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
                    <h2>Chapter 1: Cell Biology</h2>
                    <i className="fa-solid fa-chevron-down accordion-chevron"></i>
                  </div>
                  <div className="accordion-content" id="content1">
                    <div className='accordion-btns'>
                      <button className='button-title'>Content for section 1</button>
                      <button className='button-check' onClick={(event)=>checkSection(event)} onMouseOut={(event)=>changeCheck(event)} onMouseOver={(event)=>changeCheck(event)}><i className="fa-regular fa-circle accordion-check"></i></button>
                    </div>
                    <div className='accordion-btns'>
                      <button className='button-title'>Content for section 2</button>
                      <button className='button-check' onClick={(event)=>checkSection(event)} onMouseOut={(event)=>changeCheck(event)} onMouseOver={(event)=>changeCheck(event)}><i className="fa-regular fa-circle accordion-check"></i></button>
                    </div>
                  </div>
                </div>
              </div>
            </main>)
}

function App() {
    const [ sidebarOpen, setSidebar ] = useState(true)
  
    return (
      <Router>
          {window.location.pathname == '/' ? (<Nav/>) : <SideNav setSidebar={setSidebar} />}
          <Routes>
            <Route exact path="/" element={<Main/>} />
            <Route exact path="/home" element={<Home sidebarOpen={sidebarOpen} />} />
            <Route exact path="/subject/:subject" element={<Subject sidebarOpen={sidebarOpen} />} />
            <Route exact path="/home" element={<Home sidebarOpen={sidebarOpen} />} />
          </Routes>
      </Router>
    )
  }
  
  export default App;