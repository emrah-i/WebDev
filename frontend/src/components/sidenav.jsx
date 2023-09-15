import React from "react";
import { Link } from "react-router-dom";

function sideNav(){

    function handleToggle(){
      document.querySelector('.sidebar').classList.toggle('small-sidebar')
      document.querySelector('main').classList.toggle('full-length')
    }

    return (<div className="d-flex flex-column flex-shrink-0 text-bg-dark sidebar">
              <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none navbar-brand">
                <span className="fs-4"><i className="fa-solid fa-mountain"></i> PeakPrep</span>
              </a>
              <hr/>
              <ul className="nav nav-pills mb-auto flex-column">
                <li className="nav-item">
                  <Link className="nav-link active" to="/home" replace>
                    <i class="fa-solid fa-house"></i>Home
                  </Link>  
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/home" replace>
                    <i class="fa-solid fa-magnifying-glass"></i>Search
                  </Link>  
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/home" replace>
                    <i class="fa-solid fa-circle-dollar-to-slot"></i>Donate
                  </Link>  
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/home" replace>
                    <i class="fa-solid fa-bug"></i>Report Bug
                  </Link>  
                </li>
              </ul>
              <button className="sidebar-toggle" onClick={handleToggle}>
                <i class="fa-solid fa-chevron-left"></i>
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