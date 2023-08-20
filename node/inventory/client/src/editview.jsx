import React from "react";

function EditView(props) {
    const item = props.item

    function submitEdit() {
        
    }

    return (
        <form id="edit-form">
            <h1>Item Information:</h1>
            <input type="hidden" name="barcode" />
            <label>Name:</label>
            <input type="text" placeholder="Enter Name" name="name" value={item.name} required />
            <label>Quantity:</label>
            <input type="text" placeholder="Enter Quantity" name="quantity" value={item.quantity} required />
            <label>Image:</label>
            <img src={item.img} alt="Search Item" width="20%" />
            <input type="text" placeholder="Enter Source" name="image" value={item.img} required />
            <button onClick={submitEdit} type="button" className="btn-item">Edit</button>
        </form>
      )
}


export default EditView;