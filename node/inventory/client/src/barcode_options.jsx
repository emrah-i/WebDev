import React from "react"

function BarcodeOptions(props) {
    return(<React.Fragment>
            <button onClick={props.downloadBarcode} className="btn-item extra-btn" type="button">Download JPG</button>
            <button onClick={props.copyBarcode} className="btn-item extra-btn" type="button" name="copy" id="copy-btn">Copy Barcode</button>
           </React.Fragment>)
}

export default BarcodeOptions;