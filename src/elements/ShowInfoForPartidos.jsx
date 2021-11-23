import React, { useEffect, useState } from "react";
import { Col, Image, ListGroup, Modal, Row } from "react-bootstrap";
import { AiOutlineInfoCircle } from "react-icons/ai";
import apiPartidos from "../services/Partidos/apiPartidos";
// import { BiTime, BiFootball } from 'react-icons/bi'
// import { BsFillCalendarDateFill } from 'react-icons/bs'
// import { GiSoccerField, GiWhistle } from 'react-icons/gi'

const ShowInfoForPartidos = (props) => {
  const [show, setShow] = useState(false);
  const [partido, setPartido] = useState([])
  let dadosPartido = []

  useEffect(() => {
    apiPartidos.get('/' + props.idPartido).then(result => {
      setPartido(result.data.dados)
      dadosPartido = partido.status
    })
  }, [])

  console.log(dadosPartido);

  return (

    <>
      <AiOutlineInfoCircle className="text-success" onClick={() => setShow(true)} title="Informações" />

      <Modal
        show={show}
        onHide={() => setShow(false)}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-custom-modal-styling-title">
            Infos do partido
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row>
            <Col>
              <Image src={partido.urlLogo} rounded />
            </Col>
            <Col>
              <ListGroup>
                <ListGroup.Item action variant='dark'>{partido.nome}</ListGroup.Item>
                <ListGroup.Item action variant='dark'>{partido.sigla}</ListGroup.Item>
                <ListGroup.Item action variant='dark'></ListGroup.Item>
                <ListGroup.Item action variant='dark'>{partido.totalPosse}</ListGroup.Item>
              </ListGroup>

            </Col>
          </Row>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default ShowInfoForPartidos;