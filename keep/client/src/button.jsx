import React from "react";

function button() {

    function click(event) {
        event.target.style.display = 'none';
        document.querySelector('.add-form').style.display = 'flex';
    }

    return (<button className="btn add-btn" onClick={click}>Add Note</button>)
}

export default button;