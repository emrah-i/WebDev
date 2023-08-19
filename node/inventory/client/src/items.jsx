import React from "react";
import List from './list_item';

function Items(props) {
    return (
        <div className="items-display-parent" >
            <br />
            <h1>All Items:</h1>
            <table className="items-display">
                <thead>
                    <tr>
                        <th>Image</th>
                        <th>Barcode</th>
                        <th>Name</th>
                        <th>Type</th>
                        <th>Amount</th>
                        <th>Remove</th>
                    </tr>
                </thead>
                <tbody>
                {props.all_items.map((order, index) => {
                    return <List key={index} order={order} />
                })}
                </tbody>
            </table>
            <button className='btn-item'>Submit All</button>
        </div>
          )}

export default Items;