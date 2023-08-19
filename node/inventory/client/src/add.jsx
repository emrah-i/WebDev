import React from "react";
import JsBarcode from "jsbarcode";

function AddForm() {

    function calculateBarcode() {

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
            console.log(productCode)
        }

        console.log(productCode)

        // To calculate check digit:
        // Add all of the digits in the odd positions (digits in position 1, 3, 5, 7, 9, and 11)
        // Multiply the odd sum by 3.
        // Add all of the digits in even positions (digits in position 2, 4, 6, 8 and 10).
        // Sum the results of steps 3 and 2.
        // Determine what number needs to be added to the result of step 4 in order to create a multiple of 10.

        let genBarcode = [...(manCode + productCode)]
        console.log(genBarcode)
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
        console.log(sum)
        let checkDigit = String(10 - (sum % 10))
        console.log(checkDigit)

        if (checkDigit === '10') {
            calculateBarcode()
            return
        }

        genBarcode = [...genBarcode, checkDigit].join('')

        var canvas = document.getElementById("barcodeCanvas");

        JsBarcode(canvas, genBarcode, {
            format: "UPC"
        });

    }

    return (<form id="add-form">
                <h1>Item Information:</h1>
                <label>Name:</label>
                <input type="text" placeholder="Enter Name" />
                <label>Image:</label>
                <input type="text" placeholder="Enter Source" />
                <label>Quantity:</label>
                <input type="text" placeholder="Enter Quantity" />
                <canvas id="barcodeCanvas" height="10%"></canvas>
                <button onClick={calculateBarcode} className="btn-item" type="button">Generate Barcode</button>
                <button className="btn-item" type="submit">Add Item</button>
            </form>)
}

export default AddForm;