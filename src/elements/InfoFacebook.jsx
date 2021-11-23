import React, { useState } from 'react'
import { Alert, Button, Modal } from 'react-bootstrap';
import { RiEmotionSadLine } from 'react-icons/ri'
import { AiFillFacebook } from 'react-icons/ai'

const InfoInstagram = () => {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>

      <Button variant="btn btn-outline-dark" onClick={handleShow}><AiFillFacebook /></Button>


      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>404 bad request!</Modal.Title>
        </Modal.Header>
        <Modal.Body className="text-center"><Alert variant="success">Ops! Ainda não temos essa informação <RiEmotionSadLine /> </Alert></Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Fechar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default InfoInstagram;
