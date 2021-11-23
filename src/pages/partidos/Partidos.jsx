import React, { useEffect, useState } from 'react'
import { Card, Col, Row, Table, Button, Modal, ListGroup, Image } from 'react-bootstrap'
import { FaPlus } from 'react-icons/fa'
import apiPartidos from '../../services/Partidos/apiPartidos'
// eslint-disable-next-line no-unused-vars

function Example(props) {
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

    console.log(partido);
    console.log(statusPartido);
    console.log(liderPartido); //Como fazer q a página carregue as informações apenas com o click?

    return (
        <>
            <Button variant="primary" onClick={handleShow}>
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
                                    <Image src={partido.urlLogo} thumbnail />
                                </Col>
                                <Col>
                                    <ListGroup>
                                        <ListGroup.Item action variant='dark'>Nome do Partido: {partido.nome}</ListGroup.Item>
                                        <ListGroup.Item action variant='dark'>Sigla: {partido.sigla}</ListGroup.Item>
                                        <ListGroup.Item action variant='dark'>Lider: {liderPartido.nome ? liderPartido.nome : 'Não possui lider'}</ListGroup.Item>
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
const Partidos = () => {
    const [partidos, setPartidos] = useState([])


    useEffect(() => {
        apiPartidos.get('?ordem=ASC&ordenarPor=sigla&itens=50').then(result => {
            setPartidos(result.data.dados)

        })
    }, [])



    // const dadosPartido  = () =>  {
    //       apiPartidos.get('/' + match.params.id).then(result => {
    //         setPartido(result.data.dados)
    //         setStatus(result.data.dados.status)
    //         setLider(result.data.dados.status.lider)
    // }

    return (
        <>
            <Row xs={1} md={4} className="g-4">
                <Table className="text-center" striped bordered hover variant="dark">
                    <thead>
                        <tr>
                            <th>Id do Partido</th>
                            <th>Nome</th>
                            <th>Sigla</th>
                            <th>Ver informações</th>
                        </tr>
                    </thead>
                    {partidos.map((partido, idx) => (
                        <tbody>
                            <tr>
                                <td>{partido.id}</td>
                                <td>{partido.nome}</td>
                                <td>{partido.sigla}</td>
                                <td>
                                    <div className="text-center" position="relative">
                                        <Example id={partido.id} />
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    ))}
                </Table>
            </Row>
        </>
    )
}

export default Partidos
