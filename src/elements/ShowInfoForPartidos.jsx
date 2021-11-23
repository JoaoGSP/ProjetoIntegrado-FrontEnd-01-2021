import React, { useState, useEffect } from 'react'
import { Card, Col, Row, Button, Modal, ListGroup, Image } from 'react-bootstrap'
import { FaPlus } from 'react-icons/fa'
import apiPartidos from '../services/Partidos/apiPartidos'

const ShowInfoForPartidos = (props) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [partido, setPartido] = useState([])
  const [statusPartido, setStatus] = useState([])
  const [liderPartido, setLider] = useState([])

  useEffect(() => {
      apiPartidos.get('/' + props.id).then(result => {
          setPartido(result.data.dados)
          setStatus(result.data.dados.status)
          setLider(result.data.dados.status.lider)
      })
      // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
      <>
          <Button variant="btn btn-outline-info" onClick={handleShow}>
              <FaPlus /> {' '} Ver informações
          </Button>

          <Modal show={show} onHide={handleClose}>
              <Modal.Header closeButton>
                  <Modal.Title>Informações</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                  <Card border='success'>
                      <Card.Body>
                          <Row>
                              <Col xs={4} >
                                  <Image src={partido.urlLogo} style={{ width: '7rem' }} />
                              </Col>
                              <Col>
                                  <ListGroup>
                                      <ListGroup.Item action variant='dark'>Nome do Partido: {partido.nome}</ListGroup.Item>
                                      <ListGroup.Item action variant='dark'>Sigla: {partido.sigla}</ListGroup.Item>
                                      <ListGroup.Item action variant='dark'>Lider na Câmara: {liderPartido.nome ? liderPartido.nome : 'Não possui lider'}</ListGroup.Item>
                                      <ListGroup.Item action variant='dark'>Deputados empossados: {statusPartido.totalPosse ? statusPartido.totalPosse : 0}</ListGroup.Item>
                                  </ListGroup>

                              </Col>
                          </Row>
                      </Card.Body>
                  </Card>
              </Modal.Body>
          </Modal>
      </>
  );
}

export default ShowInfoForPartidos;