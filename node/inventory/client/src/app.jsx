import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import Search from './search';
import Send from './send';
import Nav from './nav';
import AddForm from './add';
import EditView from './editview';
import Barcode from './barcode';
import TableView from './tableview';
import Popup from './popup';

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

function All(props) {

  const { searchAll, setSearchAll , allDisplay, setAllDisplay } = props;
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("/all");
        const data = await response.json();
        setAllDisplay(data);
        setSearchAll(data)
      } catch (error) {
        console.error('Error fetching data:', error);
    }}

    fetchData()
  }, []);

  // maybe just try to sort through 
  async function changeAll(keywords) {
    let keywordsArray = keywords.toLowerCase().trim().split(' ')

    const searchItems = allDisplay.filter(item=> {
      return keywordsArray.some(substring => item.name.toLowerCase().includes(substring));
    })
    setSearchAll(searchItems)
  }

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
            <label>Search:</label>&nbsp;
            <input onChange={(event)=>{changeAll(event.target.value)}} type="text" placeholder='Enter Keywords' id="all_search_input"/>
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
              {searchAll.map((item, index) => (
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
            <Popup popupText={props.popupText} setPopupText={props.setPopupText} />
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
          <Route exact path="/all" element={<All allDisplay={allDisplay} setAllDisplay={setAllDisplay} searchAll={searchAll} setSearchAll={setSearchAll} popupText={popupText} setPopupText={setPopupText} />} />
          {/* load items */}
        </Routes>
    </Router>
  )
}

export default App;