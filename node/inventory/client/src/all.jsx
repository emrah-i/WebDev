import { useNavigate } from "react-router-dom";
import React, { useEffect } from "react";
import TableHead from "./components/tablehead";
import TableView from './components/tableview';
import Barcode from "./components/barcode";
import Popup from "./components/popup";

function All(props) {
    const { searchAll, setSearchAll , allDisplay, setAllDisplay } = props.props;
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
    }, [setAllDisplay, setSearchAll]);
  
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

    return (<React.Fragment>
                <h1>All Items:</h1>
                <div>
                  <label>Search:</label>&nbsp;
                  <input onChange={(event)=>{changeAll(event.target.value)}} type="text" placeholder='Enter Keywords' id="all_search_input"/>
                </div>
                <table className="items-display">
                  <TableHead />
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
            </React.Fragment>)
    
}

export default All;