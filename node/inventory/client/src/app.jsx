import React from 'react';
import Form from './form';
import Items from './items';
import Nav from './nav';

function App() {

  return (
    <div>
        <Nav />
        <main className='container'>
            <div className='row row-cols-2'>
                <Form className="col" />
                <Items className="col" />
            </div>
        </main>
    </div>
  )
}

export default App;