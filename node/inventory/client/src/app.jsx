import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate, useParams } from "react-router-dom";
import Search from './search';
import Send from './send';
import Nav from './nav';
import AddForm from './add';
import EditView from './editview';
import Barcode from './barcode';
import TableView from './tableview';
import ViewDisplay from './viewdisplay';

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

  // function downloadBarcode(index) {
  //   var canvas = document.getElementById(`barcodeCanvas${index}`);
  //   var dataURL = canvas.toDataURL("image/jpg");
  //   var downloadLink = document.createElement("a");
  //   downloadLink.href = dataURL;
  //   downloadLink.download = "barcode.jpeg";
  //   downloadLink.click();
  // };

  // function copyBarcode(barcode) {
  //   const copy_btn = document.querySelector('#copy-btn')
  //     navigator.clipboard.writeText(barcode);
  //     copy_btn.innerHTML = 'Copied ✓';

  //     setTimeout(()=>{
  //       copy_btn.innerHTML = 'Copy Barcode';
  //     }, 1000)
  // }

  return (<main id="all-div">
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
                  <td><button onClick={()=>{navigate(`/view/${item.barcode}`, { replace: true })}} className="btn-item">View Item</button></td>
                </tr>)
                )}
              </tbody>
            </table>
          </main>)
}

function View(props) {
  const barcode = useParams();

  return (<main>
            <ViewDisplay barcode={barcode.barcode} setItem={props.setItem} item={props.item} />
          </main>)
}

function App() {
  const [item, setItem] = useState({});

  return (
    <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Main item={item} setItem={setItem} />} />
          <Route path="/add" element={<Add />} />
          <Route path="/edit" element={<Edit setItem={setItem} item={item} />} />
          <Route path="/all" element={<All />} />
          <Route path="/view/:barcode" element={<View setItem={setItem} item={item} />} />
        </Routes>
    </Router>
  )
}

export default App;