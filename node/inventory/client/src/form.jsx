import React from "react";

function form() {

    async function searchClick(event) {
        event.target.disabled = true;
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
          <form id="item-form">
              <h1>Enter Product:</h1>
              <input placeholder="Scan Barcode" />
              <p>or</p>
              <input placeholder="Enter Barcode Number" type="number" />
              <p>Quantity in Stock: <span id="item-quantity"></span></p>
              <input onChange={inputChange} placeholder="Item Increase" type="number" step="1" name="increase" />
              <input onChange={inputChange} placeholder="Item Decrease" type="number" step="1" name="decrease" />
              <button onClick={searchClick} type='button' className="btn-items">Search</button>
              <button type='button' className="btn-items" disabled={true}>Add</button>
          </form>
          )}

export default form;