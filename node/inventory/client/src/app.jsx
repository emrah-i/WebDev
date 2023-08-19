import React, { useState } from 'react';
import Search from './search';
import Send from './send';
import Items from './items';
import Nav from './nav';

function App() {

  const [item, setItem] = useState({});
  const [all_items, setAll] = useState([])

  return (
    <div>
        <Nav />
        <main>
              <div id="item-form">
                <Search setItem={setItem} />
                <Send item={item} setAll={setAll} />
              </div>
              <Items all_items={all_items} setAll={setAll}  />
        </main>
    </div>
  )
}

export default App;