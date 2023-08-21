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
        <React.Fragment>
            <Display item={item} />
            <Barcode index={0} barcode={item.barcode} />
        </React.Fragment>
        )
}

export default ViewDisplay;