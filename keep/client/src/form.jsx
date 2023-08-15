import React from "react";
import AddIcon from '@mui/icons-material/Add';
import Grow from '@mui/material/Grow';

function form(props) {

    return (<Grow in={props.form_grow} timeout={1000}><form className="add-form" action="/add-note" method="post">
                <input type='text' name='title' className="form-control" placeholder="Title" maxLength="140" required /><br />
                <input type='text' name='note' className="form-control" placeholder="Enter a Note..." maxLength="140" required /><br />
                <button className="btn add-btn"><AddIcon /></button>
            </form></Grow>)
}

export default form 