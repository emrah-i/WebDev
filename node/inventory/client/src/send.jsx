import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Display from './display';
import { popupShow } from "./popup";

function Send(props) {
    const { item, setPopupText } = props;
    const [error, setError] = useState('');
    const navigate = useNavigate()

    async function sendClick() {

        const send_form = document.querySelector('#send-form');
        const search_form = document.querySelector('#search-form');
        const increase = send_form.increase.value;
        const decrease = send_form.decrease.value;
        var change = {
            original: send_form.original.value
        }

        setError('');
        document.querySelector('#error').style.display = 'none';

        if (increase === '' && decrease === ''){
            return
        }
        else if (increase !== '' && decrease !== ''){
            send_form.decrease.value = ''
        }
        else if (increase > 0) {
            change.type = 'increase';
            change.amount = increase;
        }
        else if (decrease > 0 && (item.quantity - decrease) > 0) {
            change.type = 'decrease';
            change.amount = decrease;
        }
        else {
            document.querySelector('#error').style.display = 'block';
            setError('You cannot remove more items than you have in stock.');
            return
        }

        send_form.reset()
        send_form.increase.disabled = false;
        send_form.decrease.disabled = false;
        send_form.style.display = 'none';
        search_form.style.display = 'block';
        search_form.reset()

        const response = await fetch(`/edit/${item.barcode}`, {method: "PATCH", headers: {"Content-Type": "application/json"}, body: JSON.stringify(change)})

        if (response.status === 200) {
            navigate('/', { replace: true })
            popupShow(props, "Item successfuly updated!")
        }
        if (response.status === 404) {
            navigate('/', { replace: true })
            popupShow(props, "Error!", 'error')
        }
    }

    function inputChange(event) {
        const name = event.target.name;
        const send_form = document.querySelector('#send-form')

        if (name === 'increase' && send_form.increase.value) {
            send_form.decrease.disabled = true;
        }
        else if (name === 'decrease' && send_form.decrease.value) {
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
                <Display id="item_display" item={item} />
                <input type="hidden" defaultValue={item.quantity} name="original" />
                <label>Add Items:&nbsp;</label>
                <input onChange={inputChange} placeholder="Enter Quantity" min="0" type="number" step="1" name="increase" />
                <label>Remove Items:&nbsp;</label>
                <p id="error">{error}</p>
                <input onChange={inputChange} placeholder="Enter Quantity" min="0" type="number" step="1" name="decrease" />
                <button onClick={sendClick} type='button' className="btn-item" >Submit</button>
            </form>
          )}

export default Send;