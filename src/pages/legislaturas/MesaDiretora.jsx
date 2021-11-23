import React, { useEffect, useState } from 'react'
import { Card, Col, Image, ListGroup, Row, Container } from 'react-bootstrap';
import apiLegislaturas from '../../services/Legislaturas/apiLegislaturas'

const MesaDiretora = ({ match }) => {

    const [mesadiretora, setMesaDiretora] = useState([])

    useEffect(() => {
        apiLegislaturas.get('/' + match.params.id + '/mesa').then(response => {
            
            setMesaDiretora(response.data.dados)
        })
// eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <>
            <Row xs={1} md={4} className="g-4">
                {mesadiretora.map((deputado, idx) => (
                    <Col>
                        <Card className="border-success">
                            <Container className='d-flex justify-content-center'>
                            <Image variant="top" style={{ width: '10rem'}}  src={deputado.urlFoto} thumbnail/>
                            </Container>
                            <Card.Body className='text-center'>
                                <Card.Title >{deputado.nome}</Card.Title>
                                <ListGroup>
                                    <ListGroup.Item className="bg-success">{deputado.siglaPartido}{' '}-{' '}{deputado.siglaUf}</ListGroup.Item>
                                    <ListGroup.Item className="bg-success">{deputado.titulo}</ListGroup.Item>
                                </ListGroup>
                            </Card.Body>
                        </Card>
                    </Col>
                ))} 
            </Row> 
        </>
    )
}

export default MesaDiretora
