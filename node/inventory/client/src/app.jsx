import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Search from './search';
import Send from './send';
import All from './all';
import Nav from './components/nav';
import AddForm from './add';
import EditView from './editview';
import Popup from './components/popup';

function Main(props) {
  const { item, setItem, popupText, setPopupText, setSearchAll, allDisplay } = props;
  return (<main className='col'>
            <div id="item-form">
              <Search setItem={setItem} setPopupText={setPopupText} />
              <Send item={item} setSearchAll={setSearchAll} setPopupText={setPopupText} allDisplay={allDisplay} />
            </div>
            <Popup popupText={popupText} setPopupText={setPopupText} />
          </main>)
}

function Add() {
  return (<main className='col'>
            <AddForm />
          </main>)
}

function Edit(props) {
  const { item, setItem, popupText, setSearchAll, setPopupText, allDisplay } = props;

  return (<main className='col' id='edit-page'>
            <Search setItem={setItem} setPopupText={setPopupText} />
            <EditView item={item} setSearchAll={setSearchAll} setPopupText={setPopupText} allDisplay={allDisplay} />
            <Popup popupText={popupText} setPopupText={setPopupText} />
          </main>)
}

function AllDisplay(props) {
  return (<main className='all-display col' id="all-div">
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
        </Routes>
    </Router>
  )
}

export default App;