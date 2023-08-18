import React from "react";

function form() {
    return (
          <form>
              <h1>Enter Product</h1>
              <input placeholder="Scan Barcode" /> or
              <input placeholder="Enter Barcode Number" type="number" />
              <p>Quantity in Stock: <span id="item-quantity"></span></p>
              <input placeholder="Item Increae" type="number" step="1" />
              <input placeholder="Item Decrease" type="number" step="1" />
              <button type='button' className="btn-items">Add</button>
          </form>
          )}

export default form;