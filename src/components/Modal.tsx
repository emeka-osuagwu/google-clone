import {useEffect, useState, useContext} from 'react'
import { Button, Modal } from 'react-bootstrap';
import storage from '../firebase';

/* import { db } from '../firebase-config'
import {collection, addDoc } from "firebase/firestore" */

/* import firebase from 'firebase/compat/app';
import 'firebase/storage'
 */
//firebase syntax 

import {FaPen} from "react-icons/fa"
import "./assets/upload.css"
import "./assets/uploadsection.css"
import {FaImage} from "react-icons/fa"
/* import { googleContext } from './context/ReactContext.'; */


function Example() {

  interface ImageFiles {
    name: string;
  }

 /*  const urlCollectionRef = collection(db, "backgroundurl") */
  //--------------------------------------

  const allInputs = {imgUrl: ''}
    const [imageAsFile, setImageAsFile] = useState<ImageFiles>()
    const [imageAsUrl, setImageAsUrl] = useState(allInputs)

    /* const [imageAsUrlUpload, setImageAsUrlUpload] = useState("") */
    /* const {setImageAsUrlUpload} = useContext(googleContext) */


console.log(imageAsFile)



 const handleImageAsFile = (e: any) => {
      const image = e.target.files[0]
     //setImageAsFile(image) 
     setImageAsFile(imageFile => (image))
  }

    const [show, setShow] = useState(false);

///======================================================
    const handleClose = async () =>  {



      // saving background url

     /*  if(imageAsUrlUpload !== "") {
      const createUrl = async( ) => {
        try {
            await addDoc(urlCollectionRef, {name: imageAsUrlUpload})
        } catch (error) {
            console.log(error)
        }

        
    }

    createUrl()

  } */

     //handles image upload to firebase
     /*
      if(!imageAsFile ) {
        console.error(`not an image, the image file is a ${typeof(imageAsFile)}`)
        alert("Please select a valid file")
      } 
  
    const uploadTask = await storage.ref(`/images/${imageAsFile?.name}`).put(imageAsFile) 
    
    //initiates the firebase side uploading 
    uploadTask.on('state_change', (snapShot:any) => {
      //takes a snap shot of the process as it is happening
      console.log(snapShot)
    } , (err) => {
      //catches the errors
      console.log(err)
    } , () => {
    // gets the functions from storage refences the image storage in firebase by the children
    // gets the download url then sets the image from firebase as the value for the imgUrl key:

        storage.ref('images').child(imageAsFile.name).getDownloadURL()
        .then(fireBaseUrl => {
          setImageAsUrl(prevObject => ({...prevObject, imgUrl: fireBaseUrl}))
        })

    }) */
      

      setShow(false);
    }

    const handleShow = () =>  setShow(true);
  
    return (
      <>
        
        <div className="btn-container" onClick={handleShow}>
            <form className="container">
                <Button className="image-upload" ><FaPen style={{color: "rgb(52, 72, 255)"}}/> &nbsp; customise background</Button>
            </form>
        </div>
        
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Customize background</Modal.Title>
          </Modal.Header>
          <Modal.Body>

          <div className="upload-container">
            
            <div className="uploadArea">

                <div className ="option" >
                <form action="#">
                <div className="input-file-container">  
                    <input className="input-file" id="my-file" type="file" onChange={handleImageAsFile}/>
                    <label  className="input-file-trigger">Upload Image..</label>
                </div>
                <p className="file-return"></p>
                </form>
                    <input className="input-url" placeholder="enter image url" /* onChange={(event) => setImageAsUrlUpload(event.target.value)} */ type="text" />
                </div>
            </div>

            
        </div>

          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Cancel
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Done
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }

  export default Example
