import React, { useEffect } from "react";

function ViewDisplay(props) {
    const { item, setItem, barcode } = props;

    useEffect(()=>{
        async function getItem() {
            const response = await fetch(`/view/${barcode}`)
            const data = await response.json()
            setItem(data)
        }
        getItem()
    }, [])

    return (
        <div>
            <h2>{item.name}</h2>
            <p>Quantity in Stock: <span id="item-quantity">{item.quantity}</span></p>
            <img src={item.image} alt="Search Item" width="20%" />
        </div>
        )
}

export default ViewDisplay;