import React from "react";

function Search(props) {

    document.addEventListener('keydown', (event)=>{
        const search_form = document.querySelector('#search-form')

        if (event.key === ' ') {
            search_form.barcode.focus()
        }
    })

    async function searchClick(event) {

        event.preventDefault()
        const search_form = document.querySelector('#search-form')
        const send_form = document.querySelector('#send-form')
        const edit_form = document.querySelector('#edit-form')
        
        if (search_form.barcode.value === '') {
            return
        }

        const response = await fetch(`/search/${search_form.barcode.value}`)

        if (response.status === 200) {
            const s_item = await response.json()
            search_form.style.display = 'none';
            props.setItem(s_item[0]);

            if (window.location.pathname === '/') {
                send_form.style.display = 'block';

                setTimeout(()=>{
                    send_form.scrollIntoView({block: 'center'})
                }, 200)
            }
            else {
                edit_form.style.display = 'block';

                setTimeout(()=>{
                    edit_form.scrollIntoView({block: 'center'})
                }, 200)
            }
        }
        else {
            alert('That item does not exist!')
            search_form.reset()
            return
        }
    }

    return (
            <form id="search-form" onSubmit={searchClick}>
                <h1>Enter Product:</h1>
                <label>Scan or Enter Barcode:</label>
                <input name="barcode" type="number" placeholder="Enter Barcode" autoFocus={true} />
                <button type='submit' className="btn-item" name="search_submit">Search</button>
            </form>
          )}

export default Search;