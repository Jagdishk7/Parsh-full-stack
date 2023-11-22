import { useState } from 'react';
import React from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import 'bootstrap/dist/css/bootstrap.min.css';


function ModalComp() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
    <div style={{height:'100vh',width:"100vw",display:'flex',alignItems:"center",justifyContent:'center'}}>

      <Button variant="primary" onClick={handleShow}>
        Open modal
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Hello Parsh Technology</Modal.Title>
        </Modal.Header>
        <Modal.Body>You are reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
    </>
  );
}

export default ModalComp;