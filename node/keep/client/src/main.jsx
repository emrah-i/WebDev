import React, { useState, useEffect } from 'react';
import Header from './header';
import Items from './items';
import Button from './button';
import Form from './form';


function MainComponent() {
    const [all, setAll] = useState([])
    const [form_grow, setGrow] = useState(false)

    useEffect(()=>{
        async function getAll() {
            const response = await fetch('/get-all');
            const data = await response.json();
            setAll(data)
        }
        getAll()
    }, []) // Empty dependency array to ensure the effect runs once on component mount

    return (
        <div>
            <Header />
            <div className='btn-form'>
                <Button setGrow={setGrow} />
                <Form form_grow={form_grow} />
            </div>
            <div className='container-all'>
                <Items all_items={all}/>
            </div>
        </div>
    );
};

export default MainComponent;

