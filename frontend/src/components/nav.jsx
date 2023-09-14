import React from "react";
import { Link } from "react-router-dom";

function Nav() {
    return (
        <nav className="navbar navbar-expand-lg" aria-label="Tenth navbar example">
            <div className="container-fluid">
            <a className="navbar-brand" href="#">Expand at lg</a>
            <button id="toggle-btn" className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample08" aria-controls="navbarsExample08" aria-expanded="false" aria-label="Toggle navigation">
                <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"/></svg>
            </button>
        
            <div className="collapse navbar-collapse" id="navbarsExample06">
                <ul className="navbar-nav ms-auto">
                    <li className="nav-item">
                        <Link className="link-item" to="/" replace>Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="link-item" to="/" replace>Login</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="link-item" to="/" replace>Register</Link>
                    </li>
                </ul>
            </div>
            </div>
        </nav>
          )}

export default Nav;