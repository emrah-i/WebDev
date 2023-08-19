import React from "react";

function List(props) {
    const order = props.order
    return (
        <tr>
            <td><img src={order.img} alt="Order" width="150" /></td>
            <td>{order.barcode}</td>
            <td>{order.name}</td>
            <td>{order.type}</td>
            <td>{order.amount}</td>
            <td><button className="btn-item">Remove</button></td>
        </tr>
          )}

export default List;