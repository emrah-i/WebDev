import React from "react";

function EditView(props) {
    const item = props.item

    async function submitEdit() {
        const edit_form = document.querySelector('#edit-form')

        await fetch(`/edit/${item.barcode}`, {method: "PUT", headers: {"Content-Type": "application/json"}, 
            body: JSON.stringify({
                    name: edit_form.name.value,
                    quantity: edit_form.quantity.value,
                    image: edit_form.image.value
                })
            });
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
            <img src={item.img} alt="Search Item" width="20%" />
            <input type="text" placeholder="Enter Source" name="image" defaultValue={item.img} required />
            <button onClick={submitEdit} type="button" className="btn-item">Edit</button>
        </form>
      )
}


export default EditView;