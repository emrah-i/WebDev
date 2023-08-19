import React from "react";

function List(props) {
    const order = props.order
    return (
        <div className="row row-cols-6 order-div">
            <img src={order.img} alt="Order" width="10px" />
            <p>{order.barcode}</p>
            <p>{order.name}</p>
            <p>{order.type}</p>
            <p>{order.amount}</p>
            <button className="btn-item">Remove</button>
        </div>
          )}

export default List;