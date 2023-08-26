import React from "react";
import BarcodeOptions from "./components/barcode_options";
import JsBarcode from "jsbarcode";

function AddForm() {

    async function calculateBarcode(event) {

        // Number system identifier
        // 0, 1 , 6, 7 and 8 are for regular UPC codes.
        // 2 is for random weight items, e.g. meat, marked in-store.
        // 3 is for National Drug Code and National Health Related Items.
        // 4 is for in-store marking of non-food items.
        // 5 and 9 are for coupon use.

        // Next 5 numbers are a manufacturer's code
        // These are given by GS1 but I generated a random one for personal use

        const manCode = '025463'

        // Next 5 is a product code
        // I simply generated a random string of 5 numbers

        let productCode = String(Math.floor(Math.random() * 100_000))

        if (productCode.length < 5) {
            productCode = productCode.padStart(5, '0')
        }

        // To calculate check digit:
        // Add all of the digits in the odd positions (digits in position 1, 3, 5, 7, 9, and 11)
        // Multiply the odd sum by 3.
        // Add all of the digits in even positions (digits in position 2, 4, 6, 8 and 10).
        // Sum the results of steps 3 and 2.
        // Determine what number needs to be added to the result of step 4 in order to create a multiple of 10.

        let genBarcode = [...(manCode + productCode)]
        let oddSum = 0
        let evenSum = 0

        for (let i = 0; i < genBarcode.length; i ++) {

            if (i % 2 === 0) {
                oddSum += parseInt(genBarcode[i])
            }
            else {
                evenSum += parseInt(genBarcode[i])
            }
        }

        oddSum = oddSum * 3
        const sum = oddSum + evenSum
        let checkDigit = String(10 - (sum % 10))

        if (checkDigit === '10') {
            calculateBarcode()
            return
        }

        genBarcode = [...genBarcode, checkDigit].join('')

        const response = await fetch('/allcodes') 
        const all_codes = await response.json()

        if (all_codes.find(item => item === genBarcode) != null) {
            calculateBarcode()
            return
        }

        var canvas = document.getElementById("barcodeCanvas");
        document.querySelectorAll(".extra-btn").forEach(element=>{element.style.display = 'block';})
        canvas.style.display = 'block';
        
        JsBarcode(canvas, genBarcode, {
            format: "UPC"
        });

        const add_form = document.querySelector("#add-form")

        document.querySelector('.gen-btn').style.display = 'none';
        add_form.barcode.value = genBarcode;
        add_form.add_btn.style.display = "block";
    }

    function downloadBarcode() {
        var canvas = document.getElementById("barcodeCanvas");
        var dataURL = canvas.toDataURL("image/jpg");
        var downloadLink = document.createElement("a");
        downloadLink.href = dataURL;
        downloadLink.download = "barcode.jpeg";
        downloadLink.click();
    };

    function copyBarcode() {
        const add_form = document.querySelector("#add-form")
        navigator.clipboard.writeText(add_form.barcode.value);
        add_form.copy.innerHTML = 'Copied ✓';

        setTimeout(()=>{
            add_form.copy.innerHTML = 'Copy Barcode';
        }, 1000)
    }

    return (<form id="add-form" action="/add" method="post">
                <h1>Item Information:</h1>
                <input type="hidden" name="barcode" />
                <label>Name:</label>
                <input type="text" placeholder="Enter Name" name="name" required />
                <label>Image:</label>
                <input type="text" placeholder="Enter Source" name="image" required />
                <label>Quantity:</label>
                <input type="text" placeholder="Enter Quantity" name="quantity" required />
                <canvas id="barcodeCanvas"></canvas>
                <button onClick={calculateBarcode} className="btn-item gen-btn" type="button">Generate Barcode</button>
                <button className="btn-item" type="submit" id="add_btn" name="add_btn">Add Item</button>
                <BarcodeOptions downloadBarcode={downloadBarcode} copyBarcode={copyBarcode} />
            </form>)
}

export default AddForm;