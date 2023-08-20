import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Search from './search';
import Send from './send';
import Items from './items';
import Nav from './nav';
import AddForm from './add';
import Display from './display';
import EditView from './editview';
import Barcode from './barcode';

function Main(props) {
  return (<main>
            <div id="item-form">
              <Search setItem={props.setItem} />
              <Send item={props.item} setAll={props.setAll} />
            </div>
            <Items all_items={props.all_items}  />
          </main>)
}

function Add() {
  return (<main>
            <AddForm />
          </main>)
}

function Edit(props) {
  return (<main id='edit-page'>
            <Search setItem={props.setItem} />
            <EditView item={props.item} />
          </main>)
}

function All() {

  const [allDisplay, setAllDisplay] = useState([])

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("/all");
        const data = await response.json();
        setAllDisplay(data);
      } catch (error) {
        console.error('Error fetching data:', error);
    }}

    fetchData()
  }, []);

  return (<main>
            {allDisplay.map((item, index) => (
              <React.Fragment key={item._id}>
                <Display item={item} /> 
                <Barcode barcode={item.barcode} index={index} />
              </React.Fragment>)
              )}
          </main>)
}

function View(props) {
  return (<main>
            
          </main>)
}

function App() {
  const [item, setItem] = useState({});
  const [all_items, setAll] = useState([])

  return (
    <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Main item={item} setItem={setItem} all_items={all_items} setAll={setAll} />} />
          <Route path="/add" element={<Add />} />
          <Route path="/edit" element={<Edit setItem={setItem} item={item} />} />
          <Route path="/all" element={<All />} />
          <Route path="/view/:barcode" element={<View />} />
        </Routes>
    </Router>
  )
}

export default App;