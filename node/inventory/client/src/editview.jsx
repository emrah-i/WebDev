import React from "react";
import { useNavigate } from 'react-router-dom';

function EditView(props) {
    const item = props.item
    const navigate = useNavigate()

    async function submitEdit() {
        const edit_form = document.querySelector('#edit-form')

        const response = await fetch(`/edit/${item.barcode}`, {method: "PATCH", headers: {"Content-Type": "application/json"}, 
            body: JSON.stringify({
                    name: edit_form.name.value,
                    quantity: edit_form.quantity.value,
                    image: edit_form.image.value
                })
            });

        if (response.status === 200) {
            navigate('/all', { replace: true })
        }
    }

    return (
        <form id="edit-form">
            <h1>Item Information:</h1>
            <input type="hidden" name="barcode" defaultValue={item.barcode} />
            <label>Name:</label>
            <input type="text" placeholder="Enter Name" name="name" defaultValue={item.name} required />
            <label>Quantity:</label>
            <input type="text" placeholder="Enter Quantity" name="quantity" defaultValue={item.quantity} required />
            <label>Image:</label>
            <img src={item.image} alt="Search Item" width="20%" />
            <input type="text" placeholder="Enter Source" name="image" defaultValue={item.image} required />
            <button onClick={submitEdit} type="button" className="btn-item">Edit</button>
        </form>
      )
}


export default EditView;