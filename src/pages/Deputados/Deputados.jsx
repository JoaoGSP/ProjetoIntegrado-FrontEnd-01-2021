import React, { useEffect, useState } from 'react'
import { Card, Col, Container, Image, ListGroup, Row } from 'react-bootstrap';
import { FaPlus } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import apiDeputados from '../../services/Deputados/apiDeputados';

const Deputados = () => {

    const [deputados, setDeputados] = useState([])

    useEffect(() => {
        apiDeputados.get('').then(result => {

            setDeputados(result.data.dados)
        })

    }, [])
    console.log(deputados);
    return (
        <>
        <Card>
            <Row xs={1} md={4} className="g-4">
                {deputados.map((deputado, idx) => (
                    <Col>
                        <Card className="border-success">
                            <Container className='d-flex justify-content-center'>
                                <Image variant="top" style={{ width: '10rem' }} src={deputado.urlFoto} thumbnail/>
                            </Container>
                            <Card.Body className='text-center'>
                                <Card.Title>{deputado.nome}</Card.Title>
                                <ListGroup>
                                    <ListGroup.Item>{deputado.siglaPartido}{' '}-{' '}{deputado.siglaUf}</ListGroup.Item>
                                </ListGroup>
                                <div className="text-center" position="relative">
                                    <Link to={"/deputado/" + deputado.id} className=" btn btn-outline-success ">
                                        <FaPlus /> {' '} Ver informações
                                    </Link >
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
            </Card>
        </>
    )
}

export default Deputados
