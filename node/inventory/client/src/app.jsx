import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Search from './search';
import Send from './send';
import Items from './items';
import Nav from './nav';
import AddForm from './add';

function Main() {
  const [item, setItem] = useState({});
  const [all_items, setAll] = useState([])

  return (<main>
            <div id="item-form">
              <Search setItem={setItem} />
              <Send item={item} setAll={setAll} />
            </div>
            <Items all_items={all_items}  />
          </main>)
}

function Add() {
  return (<main>
            <AddForm />
          </main>)
}

function App() {
  return (
    <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/add" element={<Add />} />
          <Route path="/edit" element={<Main />} />
        </Routes>
    </Router>
  )
}

export default App;