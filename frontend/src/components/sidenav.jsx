import React from "react";
import { Link } from "react-router-dom";

function sideNav(){
    return (<div class="d-flex flex-column flex-shrink-0 text-bg-dark sidebar">
              <a href="/" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
                <svg class="bi pe-none me-2" width="40" height="32"></svg>
                <span class="fs-4"><i class="fa-solid fa-mountain"></i> PeakPrep</span>
              </a>
              <hr/>
              <ul class="nav nav-pills flex-column">
                <li class="nav-item">
                  <Link className="nav-link active" to="/home" replace>Home</Link>  
                </li>
                <li class="nav-item">
                  <Link className="nav-link" to="/home" replace>Donate</Link>  
                </li>
              </ul>
              <hr/>
              <ul class="nav nav-pills flex-column">
                <li class="nav-item">
                  <Link className="nav-link" to="/questions" replace>All Questions</Link>  
                </li>
                <li class="nav-item">
                  <Link className="nav-link" to="/home" replace>Tagged Questions</Link>  
                </li>
                <li class="nav-item">
                  <Link className="nav-link" to="/tests" replace>Full Tests</Link>  
                </li>
                <li class="nav-item">
                  <Link className="nav-link" to="/home" replace>Past Results</Link>  
                </li>
                <li class="nav-item">
                  <Link className="nav-link" to="/home" replace>Search</Link>  
                </li>
              </ul>
              <ul class="nav nav-pills flex-column">

              </ul>
              <hr/>
              <div class="dropdown">
                <a href="#" class="d-flex align-items-center ps-3 text-white text-decoration-none dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                  <img src="https://github.com/mdo.png" alt="" width="32" height="32" class="rounded-circle me-2"/>
                  <strong>Emrah</strong>
                </a>
                <ul class="dropdown-menu dropdown-menu-dark text-small shadow">
                  <li><a class="dropdown-item" href="#">Orders</a></li>
                  <li><a class="dropdown-item" href="#">Settings</a></li>
                  <li><a class="dropdown-item" href="#">Profile</a></li>
                  <li><hr class="dropdown-divider"/></li>
                  <li><a class="dropdown-item" href="#">Sign out</a></li>
                </ul>
              </div>
            </div>)
}

export default sideNav