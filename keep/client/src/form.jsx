import React from "react";

function form() {

    return (<form className="add-form" action="/add-note" method="post">
                <input type='text' name='title' className="form-control" placeholder="Title" maxLength="140" required /><br />
                <input type='text' name='note' className="form-control" placeholder="Enter a Note..." maxLength="140" required /><br />
                <button className="btn add-btn">Add</button>
            </form>)
}

export default form;