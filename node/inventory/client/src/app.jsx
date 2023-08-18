import React from 'react';
import Form from './form';
import Items from './items';

function app() {
  return (
    <main className='container'>
        <div className='row row-cols-2'>
            <Form className="col" />
            <Items className="col" />
        </div>
    </main>
  )
}

export default app;