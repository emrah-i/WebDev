import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from './components/nav';

function Main(props) {
    // const { item, setItem, popupText, setPopupText, setSearchAll, allDisplay } = props;
    return (<main className='container center-screen'>
              <p>Welcome to</p>
            </main>)
  }

function App() {
  
    return (
      <Router>
          <Nav />
          <Routes>
            <Route exact path="/" element={<Main/>} />
          </Routes>
      </Router>
    )
  }
  
  export default App;