import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { popupShow } from "./components/popup";

function EditView(props) {
    const [showModal, setShowModal] = useState(false);
    const { item, setSearchAll, allDisplay } = props
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
            popupShow(props, "Item successfully edited!")

            setTimeout(()=>{
                const inputElement = document.querySelector('#all_search_input')
                inputElement.value = item.name;
                let keywordsArray = item.name.toLowerCase().trim().split(' ')
                const searchItems = allDisplay.filter(item=> {
                return keywordsArray.some(substring => item.name.toLowerCase().includes(substring));
                })
                setSearchAll(searchItems)
            }, 250)
            }
        if (response.status === 404) {
            navigate('/all', { replace: true })
            popupShow(props, "Error!", 'error')
            }
        }

    async function submitDelete() {
        setShowModal(false);
        const response = await fetch(`/delete/${props.item.barcode}`)
        
        if (response.status === 200) {
            navigate('/edit', { replace: true })
            popupShow(props, "Item successfully deleted!")
        }
        if (response.status === 404) {
            navigate('/edit', { replace: true })
            popupShow(props, "Error!", 'error')
        }
    }

    const handleShowModal = () => {
        setShowModal(true);
      };
    
      const handleCloseModal = () => {
        setShowModal(false);
      };

    return (
        <form id="edit-form">
            <h1>Item Information:</h1>
            <label>Name:</label>
            <input type="text" placeholder="Enter Name" name="name" defaultValue={item.name} required />
            <label>Quantity:</label>
            <input type="text" placeholder="Enter Quantity" name="quantity" defaultValue={item.quantity} required />
            <label>Image:</label>
            <img src={item.image} alt="Search Item" width="20%" />
            <input type="text" placeholder="Enter Source" name="image" defaultValue={item.image} required />
            <div className="edit-btns">
                <button onClick={submitEdit} type="button" className="btn-item">Submit Edit</button>
                <button onClick={handleShowModal} type="button" className="btn-item delete-btn">Delete</button>
                <button onClick={()=>window.location.reload()} type='button' className="btn-item cancel-btn" >Cancel</button>
            </div>

            {showModal && (
            <div className="modal">
                <div className="modal-content">
                    <p>Are you sure you want to delete this item?</p>
                    <div>
                        <button type="button" className="btn-item" onClick={handleCloseModal}>Cancel</button>
                        <button type="button" className="btn-item delete-btn" onClick={submitDelete}>Delete</button>
                    </div>
                </div>
            </div>
            )}
        </form>
      )
}


export default EditView;