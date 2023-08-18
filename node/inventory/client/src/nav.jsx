import React from "react";

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
                    <a className="nav-link active" aria-current="page" href="/">Home</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#">Add Item</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#">Edit Item</a>
                </li>
                </ul>
            </div>
            </div>
        </nav>
          )}

export default Nav;