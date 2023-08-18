import React from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import Grow from '@mui/material/Grow';


function map_all(item) {

    async function deleteNote(id) {
        await fetch("/delete/" + id, { 
            method: "DELETE"
        })
        window.location.reload()
    }

    return (<Grow in={true} timeout={1000}><div key={item._id} className="col items-col">
                <p className='title'>{item.title}</p>
                <p>{item.note}</p>
                <button className='trash' onClick={deleteNote}><DeleteIcon /></button>
            </div></Grow>)
}

function items(props){
    return (<div className='all-notes row row-cols-6'>
                {props.all_items.map(map_all)}
            </div>)
}

export default items;