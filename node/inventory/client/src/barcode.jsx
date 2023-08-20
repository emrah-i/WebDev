import React, { useEffect } from "react";
import JsBarcode from 'jsbarcode';

function Barcode(props) {

    useEffect(()=>{
        function canvasBarcode() {
            const canvas = document.querySelector(`#barcodeCanvas${props.index}`)
            JsBarcode(canvas, props.barcode, {
                format: "UPC"
            });
        }
        canvasBarcode()
    }, [props.barcode, props.index])

    return(<canvas id={`barcodeCanvas${props.index}`}></canvas>)
}

export default Barcode;