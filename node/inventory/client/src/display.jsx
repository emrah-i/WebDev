import React from "react";

function Display(props) {
    const item = props.item 
    return (
        <div>
            <h2>{item.name}</h2>
            <p>Quantity in Stock: <span id="item-quantity">{item.quantity}</span></p>
            <img src={item.img} alt="Item Image" width="25%" />
        </div>
          )}

export default Display;