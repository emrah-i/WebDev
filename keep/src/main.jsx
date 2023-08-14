import React, { useState } from 'react';
import Header from './header';
import Items from './item';
import Button from './button';
import Form from './form';

const MainComponent = () => {
    const [all, setAll] = useState([
        {
            title: "Item 1",
            note: "Note for Item 1.",
        },
        {
            title: "Item 2",
            note: "Note for Item 2.",
        },
        {
            title: "Item 3",
            note: "Note for Item 3.",
        },
        {
            title: "Item 4",
            note: "Note for Item 4.",
        },
        {
            title: "Item 5",
            note: "Note for Item 5.",
        }
        ]);
        
        const addItemToList = newItem => {
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
                <div className='all-notes row row-cols-6'>
                    <Items all_items={all} />
                </div>
            </div>
        </div>
    );
};

export default MainComponent;
