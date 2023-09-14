import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from './components/nav';
import SideNav from './components/sidenav'

function Main(props) {
    return (<main className='center-screen'>
              <Nav />
              <div className="cs-main">
                <div className="container-fluid py-5">
                  <h1 className="display-5 fw-bold">Welcome to PeakPrep</h1>
                  <p className="col-md-8 fs-4">The Best Location For FREE DAT/OAT Prep Content.</p>
                  <button className="btn btn-primary btn-lg" type="button">Register</button>
                </div>
              </div>

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
    return (<main className="container-fluid d-flex homepage">
              <SideNav/>
              <div>
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
                    <i class="fa-solid fa-dna"></i>                  
                    <h2>Biology</h2>
                    <label>Progress:</label><br/>
                    <div class="progress">
                      <div class="progress-bar" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                    <button className='btn'>Go to Module <i class="fa-solid fa-chevron-right"></i></button>
                  </div>
                  <div className='col home-col'>
                    <i class="fa-solid fa-atom"></i>                  
                    <h2>General Chemistry</h2>
                    <label>Progress:</label><br/>
                    <div class="progress">
                      <div class="progress-bar" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                    <button className='btn'>Go to Module <i class="fa-solid fa-chevron-right"></i></button>
                  </div>
                  <div className='col home-col'>
                    <i class="fa-solid fa-flask"></i>                  
                    <h2>Organic Chemistry</h2>
                    <label>Progress:</label><br/>
                    <div class="progress">
                      <div class="progress-bar" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                    <button className='btn'>Go to Module <i class="fa-solid fa-chevron-right"></i></button>
                  </div>
                  <div className='col home-col'>
                    <i class="fa-solid fa-arrows-up-down-left-right"></i>                  
                    <h2>Physics</h2>
                    <label>Progress:</label><br/>
                    <div class="progress">
                      <div class="progress-bar" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                    <button className='btn'>Go to Module <i class="fa-solid fa-chevron-right"></i></button>
                  </div>
                  <div className='col home-col'>
                    <i class="fa-solid fa-book"></i>                  
                    <h2>Reading Comprehension</h2>
                    <label>Progress:</label><br/>
                    <div class="progress">
                      <div class="progress-bar" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                    <button className='btn'>Go to Module <i class="fa-solid fa-chevron-right"></i></button>
                  </div>
                  <div className='col home-col'>
                    <i class="fa-solid fa-calculator"></i>                  
                    <h2>Quantitative Reasoning</h2>
                    <label>Progress:</label><br/>
                    <div class="progress">
                      <div class="progress-bar" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                    <button className='btn'>Go to Module <i class="fa-solid fa-chevron-right"></i></button>
                  </div>
                  <div className='col home-col'>
                    <i class="fa-solid fa-eye"></i>                  
                    <h2>Perceptual Ability</h2>
                    <label>Progress:</label><br/>
                    <div class="progress">
                      <div class="progress-bar" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                    <button className='btn'>Go to Module <i class="fa-solid fa-chevron-right"></i></button>
                  </div>
                  <div className='col empty-col'>
                  </div>
                  <div className='col empty-col'>
                  </div>
                </div>
              </div>
            </main>)
}

function App() {
  
    return (
      <Router>
          <Routes>
            <Route exact path="/" element={<Main/>} />
            <Route exact path="/home" element={<Home/>} />
          </Routes>
      </Router>
    )
  }
  
  export default App;