import React, { useEffect } from "react";

function form() {

    return (<form className="add-form" action="/add-note" method="post">
                <label>Title:</label>
                <input type='text' name='title' className="form-control" placeholder="Enter Title" maxLength="140" required /><br />
                <label>Note:</label>
                <input type='text' name='note' className="form-control" placeholder="Enter Note" maxLength="140" required /><br />
                <button className="btn add-btn">Submit</button>
            </form>)
}

export default form;