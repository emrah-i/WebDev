import React from "react";

function AddForm() {
    return (<form>
                <h1>Item Information:</h1>
                <label>Name:</label>
                <input type="text" placeholder="Enter Name" />
                <label>Image:</label>
                <input type="text" placeholder="Enter Source" />
                <label>Quantity:</label>
                <input type="text" placeholder="Enter Quantity" />
                <button className="btn-item" type="button">Generate Barcode</button>
                <button className="btn-item" type="submit">Add Item</button>
            </form>)
}

export default AddForm;