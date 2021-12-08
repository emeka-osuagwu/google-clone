import {useEffect, useState} from 'react'
import { Button, Modal } from 'react-bootstrap';
//firebase syntax 
import { db } from '../firebase-config'
import {FaPen} from "react-icons/fa"
import "./assets/upload.css"
import "./assets/uploadsection.css"
import {FaImage} from "react-icons/fa"

function Example() {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
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
                    <input className="input-file" id="my-file" type="file"/>
                    <label  className="input-file-trigger">Upload Image..</label>
                </div>
                <p className="file-return"></p>
                </form>
                    <input className="input-url" placeholder="enter image url" type="text" />
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
