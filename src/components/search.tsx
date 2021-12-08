import {useState} from 'react'
import { db } from '../firebase-config'
import {collection, addDoc } from "firebase/firestore"
import "./assets/search.css"
import {FaMicrophone, FaSearch} from "react-icons/fa"
import logo from "../uploads/goog.gif"

function Search() {
    interface searchInput {
        name: string;
      }

        // firebase store
    const urlCollectionRef = collection(db, "url")
    //--------------------------------------

    const [searchValue, setSearchValue] = useState("")

 
        const createUrl = async( ) => {
            try {
                await addDoc(urlCollectionRef, {name: searchValue})
                window.open(`https://${searchValue}`);
            } catch (error) {
                console.log(error)
            }
        }
        
  
    //console.log(searchValue)

    return (
        <div className="container">
            <img src={logo} alt="google img" />
            <form className="input-form">

            <button   className="btn2" ><FaSearch/></button>
                <input  type="text" onChange={(event) => {setSearchValue(event.target.value)}} className="search-field" placeholder="type a url"/>
                <button type="submit" onClick={createUrl} className="submit-btn" ><FaMicrophone/></button>
            </form>
        </div>
    )
}

export default Search
