import React from "react";
import TableView from './tableview';

function List(props) {
    const order = props.order
    return (
        <React.Fragment>
            <TableView order={order} />
            <td>{order.type}</td>
            <td>{order.amount}</td>
            <td><button className="btn-item">Remove</button></td>
        </React.Fragment>
          )}

export default List;