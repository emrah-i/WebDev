import React from "react";

function form(props) {

    function submit(event){
        event.preventDefault()
        const title = event.target.title.value
        const note = event.target.note.value
        const item = {title: title, 
                    note: note}
        console.log(item)
        props.addItemToList(item)
    }

    return (<form className="add-form" onSubmit={submit}>
                <label>Title:</label>
                <input type='text' name='title' className="form-control" placeholder="Enter Title" maxLength="140" required /><br />
                <label>Note:</label>
                <input type='text' name='note' className="form-control" placeholder="Enter Note" maxLength="140" required /><br />
                <button className="btn add-btn">Submit</button>
            </form>)
}

export default form;