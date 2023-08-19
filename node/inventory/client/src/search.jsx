import React from "react";

function Search(props) {

    async function searchClick(event) {

        const search_form = document.querySelector('#search-form')
        const send_form = document.querySelector('#send-form')
        
        if (search_form.barcode.value === '') {
            return
        }

        event.target.disabled = true;
        const response = await fetch(`/search/${search_form.barcode.value}`)

        if (response.status === 200) {
            const s_item = await response.json()
            event.target.disabled = false;
            search_form.style.display = 'none';
            props.setItem(s_item[0]);
            send_form.style.display = 'block';

            setTimeout(()=>{
                send_form.scrollIntoView({block: 'center'})
            }, 200)
            
        }
        else {
            event.target.disabled = false;
            alert('That item does not exist!')
            return
        }
    }

    return (
            <form id="search-form">
                <h1>Enter Product:</h1>
                <label>Scan or Enter Barcode:</label>
                <input name="barcode" type="number" placeholder="Enter Barcode" />
                <button onClick={searchClick} type='button' className="btn-item">Search</button>
            </form>
          )}

export default Search;