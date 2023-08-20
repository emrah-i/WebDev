import React from "react";

function List(props) {
    const order = props.order
    return (
        <React.Fragment>
            <td><img src={order.image} alt="Order" width="150" /></td>
            <td>{order.name}</td>
            <td>{order.quantity}</td>
        </React.Fragment>
          )}

export default List;