import {useState, useEffect} from 'react';
import './App.css';
import Bookmarks from './components/bookmarks';
import Search from './components/search';

function App( ) {
const [url , setUrl] = useState([])

  return (
    
    <div className="App">
      <Search/>
      <Bookmarks />
    </div>
  );
}

export default App;
