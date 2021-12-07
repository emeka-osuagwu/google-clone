import {useState} from 'react'
import { db } from '../firebase-config'
import {collection, addDoc } from "firebase/firestore"
import "./search.css"

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
        <div>
            <img src="./uploads/goog.gif" alt="google img" />
            <form className="input-form">
                <input placeholder="search" type="text" onChange={(event) => {setSearchValue(event.target.value)}} className="search-field"/>
                <input type="submit" onClick={createUrl} className="submit-btn"/>
            </form>
        </div>
    )
}

export default Search
