import React, { useState } from "react";
import Display from './display';

function Form() {

    const [item, setItem] = useState({})

    async function searchClick(event) {

        const search_form = document.querySelector('#search-form')
        const send_form = document.querySelector('#send-form')

        if (search_form.barcode.value === '') {
            return
        }

        event.target.disabled = true;
        const response = await fetch(`/search/${search_form.barcode.value}`)
        const s_item = await response.json()

        if (s_item != null) {
            search_form.style.display = 'none';
            setItem(s_item[0]);
            send_form.style.display = 'block';
        }
        else {
            return
        }
    }

    function sendClick(event) {
        const form = event.target
    }

    function inputChange(event) {
        const name = event.target.name;
        const form = document.querySelector('#item-form');

        if (name === 'increase' && form.increase.value != '') {
            form.decrease.disabled = true;
        }
        else if (name === 'decrease' && form.decrease.value != '') {
            form.increase.disabled = true;
        }
        else {
            form.increase.disabled = false;
            form.decrease.disabled = false;
        };
    }

    return (
          <div id="item-form">
                <form id="search-form">
                    <h1>Enter Product:</h1>
                    <label>Scan or Enter Barcode:</label>
                    <input name="barcode" placeholder="Enter Barcode" />
                    <button onClick={searchClick} type='button' className="btn-items">Search</button>
                </form>
                <form id="send-form">
                    <h1>Search Result:</h1>
                    <Display id="item_display" item={item} />
                    <label>Add Items:&nbsp;</label>
                    <input onChange={inputChange} placeholder="Enter Quantity" type="number" step="1" name="increase" />
                    <label>Remove Items:&nbsp;</label>
                    <input onChange={inputChange} placeholder="Enter Quantity" type="number" step="1" name="decrease" />
                    <button onClick={sendClick} type='button' className="btn-items" disabled={true}>Add to List</button>
                </form>
          </div>
          )}

export default Form;