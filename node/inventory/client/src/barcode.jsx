import React, { useEffect } from "react";
import JsBarcode from 'jsbarcode';

function Barcode(props) {

    useEffect(()=>{
        function canvasBarcode() {
            const canvas = document.querySelector(`#barcodeCanvas${props.index}`)
            JsBarcode(canvas, props.barcode, {
                format: "UPC"
            });
            console.log(props.barcode)
        }
        canvasBarcode()
    }, [props.barcode])

    return(<canvas id={`barcodeCanvas${props.index}`}></canvas>)
}

export default Barcode;