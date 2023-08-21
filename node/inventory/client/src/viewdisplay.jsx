import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import Display from "./display";
import Barcode from "./barcode";

function ViewDisplay(props) {
    const { barcode } = useParams();
    const { item, setItem } = props;

    useEffect(()=>{
        async function getItem() {
            const response = await fetch(`/view/${barcode}`)
            const data = await response.json()
            setItem(data)
        }
        getItem()
    }, [])

    return (
        <div id='view-div'>
            <Display item={item} />
            <Barcode index={0} barcode={item.barcode} />
        </div>
        )
}

export default ViewDisplay;