import {useEffect, useState} from 'react'
//firebase syntax 
import { db } from '../firebase-config'
import { FaTwitter} from "react-icons/fa"
import "./assets/bookmark.css"
import {collection, getDocs } from "firebase/firestore"
//-----------------------------------
function Bookmarks(){

    interface IUrl {
        name: string;
        id: string;
       
      }

    const [bookmarks, setBookmarks] = useState<IUrl[]>([])

    // firebase store
    const urlCollectionRef = collection(db, "url")
    //--------------------------------------
    useEffect(() =>{
        const getUrl = async () =>{
            const data = await getDocs(urlCollectionRef)
          //setBookmarks(data.docs.map((doc) => ({...doc.data(), id: doc.id}) ))
        } 

        getUrl()

        console.log(bookmarks)
    }, [])

    return (
        <div>
          {/*   {
                bookmarks && bookmarks.map((bookmark) => {
                    return( */}
                    <div className="Bcontainer">
                        <ul className="bookmark-container"> 
                            {/* <li className="bookmark" key={bookmark.name}><a href="ff">{bookmark.name}</a></li> */}
                         
                           <a  href="" ><li className="bookmark"><FaTwitter style={{color: "white"}}/></li> <p>facebook</p></a>
                           <a  href="" ><li className="bookmark"><FaTwitter style={{color: "white"}}/></li> <p>facebook</p></a>
                           <a  href="" ><li className="bookmark"><FaTwitter style={{color: "white"}}/></li> <p>facebook</p></a>
                           <a  href="" ><li className="bookmark"><FaTwitter style={{color: "white"}}/></li> <p>facebook</p></a>
                           <a  href="" ><li className="bookmark"><FaTwitter style={{color: "white"}}/></li> <p>facebook</p></a>
                           <a  href="" ><li className="bookmark"><FaTwitter style={{color: "white"}}/></li> <p>facebook</p></a>
                           <a  href="" ><li className="bookmark"><FaTwitter style={{color: "white"}}/></li> <p>facebook</p></a>

                               
                           
                           
                            
                           
                            
                        </ul>
                    </div>
                    
            {/*         )
                }) 
            }  */}
        </div>
    )
}

export default Bookmarks
