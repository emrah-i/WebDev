import React from "react";
import { Link } from "react-router-dom";

function Nav() {
    return (
        <nav className="navbar navbar-expand-lg" aria-label="Tenth navbar example">
            <div className="container-fluid">
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample08" aria-controls="navbarsExample08" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
        
            <div className="collapse navbar-collapse justify-content-md-center" id="navbarsExample08">
                <ul className="navbar-nav">
                <li className="nav-item">
                    <Link className="link-item" to="/">Home</Link>
                </li>
                <li className="nav-item">
                    <Link className="link-item" to="/add">Add Item</Link>
                </li>
                <li className="nav-item">
                    <Link className="link-item" to="/edit">Edit Item</Link>
                </li>
                <li className="nav-item">
                    <Link className="link-item" to="/view">View Item</Link>
                </li>
                </ul>
            </div>
            </div>
        </nav>
          )}

export default Nav;