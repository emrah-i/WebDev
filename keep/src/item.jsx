import React from 'react';

function items(props){
    var view = []
    props.all_items.forEach((element, index)=>{
        const item = (<div key={index} className="col items-col">
                        <p className='title'>{element.title}</p>
                        <p>{element.note}</p>
                    </div>);
        view.push(item)
    })
    return view
}

export default items;