import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import Search from './search';
import Send from './send';
import Nav from './nav';
import AddForm from './add';
import EditView from './editview';
import Barcode from './barcode';
import TableView from './tableview';

function Main(props) {
  return (<main>
            <div id="item-form">
              <Search setItem={props.setItem} />
              <Send item={props.item} setAll={props.setAll} />
            </div>
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

  const [allDisplay, setAllDisplay] = useState([]);
  const navigate = useNavigate();

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

  function handleClick(barcodeValue, path) {
    navigate(path, { replace: true })

    setTimeout(()=>{
      const search_form = document.querySelector('#search-form');
      
      search_form.barcode.value = barcodeValue;
      search_form.search_submit.click()
    }, 250)
  }

  return (<main id="all-div">
            <h1>All Items:</h1>
            <table className="items-display ">
              <thead>
                  <tr>
                      <th>Image</th>
                      <th>Name</th>
                      <th>Quantity</th>
                      <th>Barcode</th>
                      <th>View</th>
                  </tr>
              </thead>
              <tbody>
              {allDisplay.map((item, index) => (
                <tr key={item._id}>
                  <TableView order={item} /> 
                  <td><Barcode barcode={item.barcode} index={index} /></td>
                  <td>
                    <button onClick={()=>{handleClick(item.barcode, '/')}} className="btn-item">Change Quantity</button><br/><p></p>
                    <button onClick={()=>{handleClick(item.barcode, '/edit')}} className="btn-item change-btn">Edit Item</button>
                  </td>
                </tr>)
                )}
              </tbody>
            </table>
          </main>)
}
function App() {
  const [item, setItem] = useState({});

  return (
    <Router>
        <Nav />
        <Routes>
          <Route exact path="/" element={<Main item={item} setItem={setItem} />} />
          <Route exact path="/add" element={<Add />} />
          <Route exact path="/edit" element={<Edit setItem={setItem} item={item} />} />
          <Route exact path="/all" element={<All />} />
        </Routes>
    </Router>
  )
}

export default App;