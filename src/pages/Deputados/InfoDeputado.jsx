import React, { useEffect, useState } from 'react'
import { mask } from 'remask'
import { Card, Row, Col, Image, ListGroup, Container, Button, Modal, Alert } from 'react-bootstrap'
import { FaPlus } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import apiDeputados from '../../services/Deputados/apiDeputados'
import { AiFillFacebook, AiFillInstagram, AiOutlineMail } from 'react-icons/ai'
import { BsFillTelephoneFill } from 'react-icons/bs'
import InfoInstagram from '../../elements/InfoInstagram.jsx'
import InfoFacebook from '../../elements/InfoFacebook.jsx'

const InfoDeputado = ({ match }) => {
    const [infodeputado, setInfoDeputado] = useState([])
    const [redesocial, setRedeSocial] = useState([])
    const [status, setStatus] = useState([])
    const [gabinete, setGabinete] = useState([])

    const pattern = '999.999.999-99' 


    useEffect(() => {

        apiDeputados('' + match.params.id).then(result => {
            setInfoDeputado(result.data.dados)
            setRedeSocial(result.data.dados.redeSocial)
            setStatus(result.data.dados.ultimoStatus)
            setGabinete(result.data.dados.ultimoStatus.gabinete)
        })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <>
            <Card fluid>
                <Card.Body>
                    <Row>
                        <Col xs={3} className='text-center'>
                            <Image src={status.urlFoto} thumbnail />
                            <ListGroup as="ul">
                                <ListGroup.Item as="li" active>Contatos</ListGroup.Item>
                                {redesocial[0]?<Button href={redesocial[0]}><AiFillFacebook/></Button>:<InfoFacebook />}
                                {redesocial[1]?<Button className="btn btn-color-#DD2A7B" href={redesocial[1]}><AiFillInstagram/></Button>:<InfoInstagram />}
                                <ListGroup.Item as="li"><AiOutlineMail/> {' '} {status.email}{gabinete.telefone}</ListGroup.Item>
                                <ListGroup.Item as="li"><BsFillTelephoneFill/>{' '} {gabinete.telefone}</ListGroup.Item>
                            </ListGroup>
                        </Col>
                        <Col>
                            <ListGroup as="ul">
                                <ListGroup.Item as='li' active className="text-center">Informações Pessoais</ListGroup.Item>
                                <ListGroup.Item as='li' action variant='dark'>Nome Civil: {infodeputado.nomeCivil}</ListGroup.Item>
                                <ListGroup.Item as='li' action variant='dark'>Data de Nascimento: {infodeputado.dataNascimento}</ListGroup.Item>
                                <ListGroup.Item as='li' action variant='dark'>Escolaridade: {infodeputado.escolaridade}</ListGroup.Item>
                                <ListGroup.Item as='li' action variant='dark'>Sexo: {infodeputado.sexo}</ListGroup.Item>
                                <ListGroup.Item as='li' action variant='dark'>Local de Nascimento: {infodeputado.municipioNascimento + ' - '
                                    + infodeputado.ufNascimento}</ListGroup.Item>
                                <ListGroup.Item as='li' action variant='dark'>Cpf: {infodeputado.cpf}</ListGroup.Item>
                            </ListGroup>
                            <ListGroup as='ul'>
                                <ListGroup.Item as='li' active className="text-center">Informações Políticas</ListGroup.Item>
                                <ListGroup.Item as='li' action variant='dark'>Nome Eleitoral: {status.nomeEleitoral} </ListGroup.Item>
                                <ListGroup.Item as='li' action variant='dark'>Condição Eleitoral: {status.condicaoEleitoral} </ListGroup.Item>
                                <ListGroup.Item as='li' action variant='dark'>Situação: {status.situacao} </ListGroup.Item>
                                <ListGroup.Item as='li' action variant='dark'>Data: {status.data} </ListGroup.Item>
                                <ListGroup.Item as='li' action variant='dark'>Partido: {status.siglaPartido + ' - ' + status.siglaUf} </ListGroup.Item>
                                <ListGroup.Item as='li' action variant='dark'>Gabinete: {'Prédio: ' + gabinete.predio} <br />
                                    {'Andar: ' + gabinete.andar}<br />{'Sala: ' + gabinete.sala} </ListGroup.Item>
                            </ListGroup>
                            <Container className='d-flex justify-content-center'>
                                <Link to={"/deputado/" + infodeputado.id + "/gastos"} className=" btn btn-outline-info " title={status.nomeEleitoral}>
                                    <FaPlus /> {' '} Ver gastos
                                </Link >
                            </Container>
                        </Col>
                    </Row>
                </Card.Body>
            </Card>
        </>
    )
}

export default InfoDeputado
