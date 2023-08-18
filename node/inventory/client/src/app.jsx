import React from 'react';
import Form from './form';

function app() {
  return (
    <main className='row'>
        <Form />
        <button className='btn-items'>Submit All</button>
        <div>
            <h1>All Items:</h1>
        </div>
    </main>
  )
}

export default app;