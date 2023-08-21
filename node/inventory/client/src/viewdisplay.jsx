import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import Display from "./display";

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
        <Display item={item} />
        )
}

export default ViewDisplay;