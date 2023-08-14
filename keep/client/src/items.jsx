import React from 'react';

function map_all(item) {

    async function deleteNote(id) {
        const repsonse = await fetch("/delete/" + id, { 
            method: "DELETE"
        })
        window.location.reload()
    }

    return ((<div key={item._id} className="col items-col">
                <p className='title'>{item.title}</p>
                <p>{item.note}</p>
                <p><a className='text-muted' onClick={()=> {deleteNote(item.id)}}>delete</a></p>
            </div>))
}

function items(props){
    return (<div className='all-notes row row-cols-6'>
                {props.all_items.map(map_all)}
            </div>)
}

export default items;