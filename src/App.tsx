import {useState, useEffect} from 'react';
import './App.css';
import Bookmarks from './components/bookmarks';
import Search from './components/search';
import Example from './components/Modal';
/* import {googleContextProvider} from './components/context/ReactContext.' */

function App( ) {
const [url , setUrl] = useState([])

  return (
   /*  <googleContextProvider> */
        <div className="App">
          <Search/>
          <Bookmarks />
          <Example />
        </div>
   /*  </googleContextProvider> */
  );
}

export default App;
