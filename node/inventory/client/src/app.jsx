import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import Search from './search';
import Send from './send';
import All from './all';
import Nav from './nav';
import AddForm from './add';
import EditView from './editview';
import Barcode from './barcode';
import TableView from './tableview';
import Popup from './popup';
import TableHead from './tablehead';

function Main(props) {
  const { item, setItem, popupText, setPopupText, setSearchAll, allDisplay } = props;
  return (<main>
            <div id="item-form">
              <Search setItem={setItem} setPopupText={setPopupText} />
              <Send item={item} setSearchAll={setSearchAll} setPopupText={setPopupText} allDisplay={allDisplay} />
            </div>
            <Popup popupText={popupText} setPopupText={setPopupText} />
          </main>)
}

function Add() {
  return (<main>
            <AddForm />
          </main>)
}

function Edit(props) {
  const { item, setItem, popupText, setSearchAll, setPopupText, allDisplay } = props;

  return (<main id='edit-page'>
            <Search setItem={setItem} setPopupText={setPopupText} />
            <EditView item={item} setSearchAll={setSearchAll} setPopupText={setPopupText} allDisplay={allDisplay} />
            <Popup popupText={popupText} setPopupText={setPopupText} />
          </main>)
}

function AllDisplay(props) {
  return (<main id="all-div">
            <All props={props} />
          </main>)
}
function App() {
  const [popupText, setPopupText] = useState('test');
  const [ searchAll, setSearchAll ] = useState([]);
  const [ allDisplay, setAllDisplay ] = useState([]);
  const [item, setItem] = useState({});

  return (
    <Router>
        <Nav />
        <Routes>
          <Route exact path="/" element={<Main allDisplay={allDisplay} setSearchAll={setSearchAll} popupText={popupText} setPopupText={setPopupText} item={item} setItem={setItem} />} />
          <Route exact path="/add" element={<Add popupText={popupText} setPopupText={setPopupText} />} />
          <Route exact path="/edit" element={<Edit allDisplay={allDisplay} setSearchAll={setSearchAll} popupText={popupText} setPopupText={setPopupText} setItem={setItem} item={item} />} />
          <Route exact path="/all" element={<AllDisplay allDisplay={allDisplay} setAllDisplay={setAllDisplay} searchAll={searchAll} setSearchAll={setSearchAll} popupText={popupText} setPopupText={setPopupText} />} />
          {/* load items */}
        </Routes>
    </Router>
  )
}

export default App;