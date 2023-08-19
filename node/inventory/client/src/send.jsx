import React, { useState } from "react";
import Display from './display';

function Send(props) {

    const [error, setError] = useState('');

    function sendClick() {

        const send_form = document.querySelector('#send-form');
        const increase = send_form.increase.value;
        const decrease = send_form.decrease.value;
        var change = '';

        change = {
            barcode: props.item.barcode,
            name: props.item.name,
            img: props.item.img
        }

        setError('');
        document.querySelector('#error').style.display = 'none';

        if (increase > 0) {
            change.type = 'Increase';
            change.amount = increase;
        }
        else if (decrease > 0 && (props.item.quantity - decrease) > 0) {
            change.type = 'Decrease';
            change.amount = decrease;
        }
        else {
            document.querySelector('#error').style.display = 'block';
            setError('You cannot remove more items than you have in stock.');
            return
        }

        props.setAll(prevItems => {
            return [...prevItems, change]
        })

        document.querySelector('.items-display-parent > button').scrollIntoView({block: "center"})
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
                <input onChange={inputChange} placeholder="Enter Quantity" min="0" type="number" step="1" name="increase" />
                <label>Remove Items:&nbsp;</label>
                <p id="error">{error}</p>
                <input onChange={inputChange} placeholder="Enter Quantity" min="0" type="number" step="1" name="decrease" />
                <button onClick={sendClick} type='button' className="btn-item" >Add to List</button>
            </form>
          )}

export default Send;