import React from 'react';

function map_all(item) {
    return ((<div key={item.id} className="col items-col">
                <p className='title'>{item.title}</p>
                <p>{item.note}</p>
            </div>))
}

function items(props){
    return (<div className='all-notes row row-cols-6'>
                {props.all_items.map(map_all)}
            </div>)
}

export default items;