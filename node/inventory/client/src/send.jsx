import React, { useState } from "react";
import Display from './display';

function Send(props) {

    const [error, setError] = useState('');

    function sendClick() {

        const send_form = document.querySelector('#send-form');
        const increase = send_form.increase.value;
        const decrease = send_form.decrease.value;
        const barcode = props.item.barcode;
        const name = props.item.name;
        var change = '';

        setError('');
        document.querySelector('#error').style.display = 'none';

        if (increase > 0) {
            change = {
                barcode: barcode,
                name: name,
                type: 'Increase',
                amount: increase
            }
        }
        else if (decrease > 0 && (props.item.quantity - decrease) > 0) {
            change = {
                barcode: barcode,
                name: name,
                type: 'Decrease',
                amount: decrease
            }
        }
        else {
            document.querySelector('#error').style.display = 'block';
            setError('You cannot remove more items than you have in stock.');
            return
        }

        props.setAll(prevItems => {
            return [...prevItems, change]
        })
    }

    function inputChange(event) {
        const name = event.target.name;
        const send_form = document.querySelector('#send-form')

        if (name === 'increase' && send_form.increase.value !== '') {
            send_form.decrease.disabled = true;
        }
        else if (name === 'decrease' && send_form.decrease.value !== '') {
            // Decrease cant make order negative
            send_form.increase.disabled = true;
        }
        else {
            send_form.increase.disabled = false;
            send_form.decrease.disabled = false;
        };
    }

    return (
            <form id="send-form">
                <h1>Search Result:</h1>
                <Display id="item_display" item={props.item} />
                <label>Add Items:&nbsp;</label>
                <input onChange={inputChange} placeholder="Enter Quantity" type="number" step="1" name="increase" />
                <label>Remove Items:&nbsp;</label>
                <p id="error">{error}</p>
                <input onChange={inputChange} placeholder="Enter Quantity" type="number" step="1" name="decrease" />
                <button onClick={sendClick} type='button' className="btn-items" >Add to List</button>
            </form>
          )}

export default Send;