import {useState, useEffect} from 'react';
import './App.css';
import Bookmarks from './components/bookmarks';
import Search from './components/search';
import Example from './components/Modal';

function App( ) {
const [url , setUrl] = useState([])

  return (
    
    <div className="App">
      <Search/>
      <Bookmarks />
     {/*  <UploadImage/> */}
      <Example />
     {/*  <UploadSection/> */}

      
    </div>
  );
}

export default App;
