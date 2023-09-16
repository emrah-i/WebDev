import React from "react";
import { Link } from "react-router-dom";

function sideNav(props){

    function handleToggle(){
      props.setSidebar(prevSidebarOpen => !prevSidebarOpen);

      document.querySelector('.sidebar').classList.toggle('small-sidebar');
      document.querySelector('main').classList.toggle('full-length');
    }

    return (<div className="d-flex flex-column flex-shrink-0 text-bg-dark sidebar">
              <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none navbar-brand">
                <span className="fs-4"><i className="fa-solid fa-mountain"></i> PeakPrep</span>
              </a>
              <hr/>
              <ul className="nav nav-pills mb-auto flex-column">
                <li className="nav-item">
                  <Link className="nav-link" to="/home" replace>
                    <i className="fa-solid fa-house"></i><span>Home</span>
                    <p className="text-tip">Home</p>
                  </Link>  
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/subject/biology" replace>
                    <i className="fa-solid fa-dna"></i><span>Biology</span>
                  </Link>  
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/subject/biology" replace>
                    <i className="fa-solid fa-atom"></i><span>Gen-Chem</span>
                  </Link>  
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/subject/biology" replace>
                    <i className="fa-solid fa-flask"></i><span>O-Chem</span>
                  </Link>  
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/subject/biology" replace>
                    <i className="fa-solid fa-arrows-up-down-left-right"></i><span>Physics</span>
                  </Link>  
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/subject/biology" replace>
                    <i className="fa-solid fa-book"></i><span>Reading</span>
                  </Link>  
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/subject/biology" replace>
                    <i className="fa-solid fa-calculator"></i><span>QR</span>
                  </Link>  
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/home" replace>
                    <i className="fa-solid fa-bug"></i><span>Report Bug</span>
                  </Link>  
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/home" replace>
                    <i className="fa-solid fa-circle-dollar-to-slot"></i><span>Donate</span>
                  </Link>  
                </li>
              </ul>
              <button className="sidebar-toggle" onClick={handleToggle}>
                <i className="fa-solid fa-chevron-left"></i>
              </button>
              <hr/>
              <div className="dropdown">
                <a href="#" className="d-flex align-items-center text-white text-decoration-none dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                  <img src="https://github.com/mdo.png" alt="" width="32" height="32" className="rounded-circle"/>
                  <strong>Emrah</strong>
                </a>
                <ul className="dropdown-menu dropdown-menu-dark text-small shadow">
                  <li><a className="dropdown-item" href="#">Orders</a></li>
                  <li><a className="dropdown-item" href="#">Settings</a></li>
                  <li><a className="dropdown-item" href="#">Profile</a></li>
                  <li><hr className="dropdown-divider"/></li>
                  <li><a className="dropdown-item" href="#">Sign out</a></li>
                </ul>
              </div>
            </div>)
}

export default sideNav