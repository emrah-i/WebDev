import React from "react";
import Grow from "@mui/material/Grow";


function button(props) {

    function click(event) {
        event.target.style.display = 'none';
        document.querySelector('.add-form').style.display = 'flex';
        props.setGrow(true);
    }

    return (<Grow in={true} timeout={1000}><button className="btn add-btn" onClick={click}>Add Note</button></Grow>)
}

export default button;