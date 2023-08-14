import React, { useState } from 'react';
import Header from './header';
import Items from './items';
import Button from './button';
import Form from './form';

function  MainComponent() {
    const [all, setAll] = useState([
        {
            id: 1,
            title: "Item 1",
            note: "Note for Item 1.",
        },
        {
            id: 2,
            title: "Item 2",
            note: "Note for Item 2.",
        },
        {
            id: 3,
            title: "Item 3",
            note: "Note for Item 3.",
        },
        {
            id: 4,
            title: "Item 4",
            note: "Note for Item 4.",
        },
        {
            id: 5,
            title: "Item 5",
            note: "Note for Item 5.",
        }
        ]);
        
    function addItemToList(newItem) {
        setAll(prevItems => [...prevItems, newItem]);
        };

    return (
        <div>
            <Header />
            <div className='btn-form'>
                <Button />
                <Form addItemToList={addItemToList} />
            </div>
            <div className='container-all'>
                <Items all_items={all} />
            </div>
        </div>
    );
};

export default MainComponent;

