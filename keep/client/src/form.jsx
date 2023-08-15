import React from "react";
import AddIcon from '@mui/icons-material/Add';

function form() {

    return (<form className="add-form" action="/add-note" method="post">
                <input type='text' name='title' className="form-control" placeholder="Title" maxLength="140" required /><br />
                <input type='text' name='note' className="form-control" placeholder="Enter a Note..." maxLength="140" required /><br />
                <button className="btn add-btn"><AddIcon /></button>
            </form>)
}

export default form;