import {useEffect, useState} from 'react'
//firebase syntax 
import { db } from '../firebase-config'
import { FaTwitter} from "react-icons/fa"
import "./assets/bookmark.css"
import {collection, getDocs } from "firebase/firestore";

function Bookmarks(){ 

    function truncate(source: string, size: number) {
        return source.length > size ? source.slice(0, size - 1) + "…" : source;
      }

    const BookmarkLenght: number = 3; 

    interface IUrl {
        name: string;  
        id: string; 
        
      }

    const [bookmarks, setBookmarks] = useState<IUrl[]>([])

    // firebase store
    const urlCollectionRef = collection(db, "url")
    //--------------------------------------
    useEffect(() => {
        const getUrl = async () =>{
            const data = await getDocs(urlCollectionRef)
            setBookmarks(data.docs.map((doc) => ({name:doc.data().name , id: doc.id}) ))
            
        } 

        getUrl()

    }, [])

    return (
        bookmarks.length < 0 ? <h2>loading bookmarks</h2>
        :
        <ul className="bookmark-container"> 
            {
                 bookmarks.map((bookmark) => {
                    for (let i= 0; i < BookmarkLenght; i++){
                    return( 
                            
                                <a className="bookmark-link" href={`https://${bookmark.name}`} >
                                    <li className="bookmark"><FaTwitter style={{color: "white"}}/></li>
                                    <p>{ truncate(`${bookmark.name}`, 12)}</p>  
                                </a>    
                                                  
                      ) 
                    }
                }) 
            }  
        </ul>
    )
}

export default Bookmarks
