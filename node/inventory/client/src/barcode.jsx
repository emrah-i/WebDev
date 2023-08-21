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

    function copyBarcode() {
        const tip = document.querySelector(`#barcodeCanvas${props.index} + .tip`)
        navigator.clipboard.writeText(props.barcode);
        tip.innerHTML = 'Copied ✓';

        setTimeout(()=>{
            tip.innerHTML = 'Click to copy';
        }, 1000)
    }

    return(
        <React.Fragment>
            <div onClick={copyBarcode} className="listBarcodeItem">
                <canvas id={`barcodeCanvas${props.index}`}></canvas>
                <p className="tip">Click to copy</p>
            </div>
        </React.Fragment>)
}

export default Barcode;