import React from "react";

function List(props) {
    const order = props.order
    return (
        <div className="row row-cols-4 order-div">
            <p>{order.barcode}</p>
            <p>{order.name}</p>
            <p>{order.type}</p>
            <p>{order.amount}</p>
        </div>
          )}

export default List;