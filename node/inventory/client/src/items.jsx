import React from "react";
import List from './list_item';

function Items(props) {
    return (
        <div className={props.className} >
            <h1>All Items:</h1>
            <div className="items-display">
                {props.all_items.map((order, index) => {
                    return <List key={index} order={order} />
                })}
            </div>
            <button className='btn-items col'>Submit All</button>
        </div>
          )}

export default Items;