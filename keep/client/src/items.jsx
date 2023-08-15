import React from 'react';
import DeleteIcon from '@mui/icons-material/Delete';

function map_all(item) {

    async function deleteNote(id) {
        await fetch("/delete/" + id, { 
            method: "DELETE"
        })
        window.location.reload()
    }

    return ((<div key={item._id} className="col items-col">
                <p className='title'>{item.title}</p>
                <p>{item.note}</p>
                <button className='trash' onClick={deleteNote}><DeleteIcon /></button>
            </div>))
}

function items(props){
    return (<div className='all-notes row row-cols-6'>
                {props.all_items.map(map_all)}
            </div>)
}

export default items;