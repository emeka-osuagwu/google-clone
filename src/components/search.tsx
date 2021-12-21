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

 
    const CreateUrlFnc = () => {
        const createUrl = async( ) => {
            try {
                await addDoc(urlCollectionRef, {name: searchValue})
                window.open(`https://${searchValue}`);
            } catch (error) {
                console.log(error)
            }

            
        }

        createUrl()
    }
       
        
      
    //console.log(searchValue)

    return (
        <div className="container">
            <img src={logo} alt="google img" />
            <div className="input-form">

                <button   className="btn2" ><FaSearch/></button>
                <input  type="text" onChange={(event) => {setSearchValue(event.target.value)}} className="search-field" placeholder="type a url"/>
                <button  onClick={CreateUrlFnc} className="submit-btn" ><FaMicrophone/></button>
            </div>
        </div>
    )
}

export default Search
