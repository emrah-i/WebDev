import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function Main(props) {
    // const { item, setItem, popupText, setPopupText, setSearchAll, allDisplay } = props;
    return (<main>
            </main>)
  }

function App() {
  
    return (
      <Router>
          {/* <Nav /> */}
          <Routes>
            <Route exact path="/" element={<Main/>} />
          </Routes>
      </Router>
    )
  }
  
  export default App;