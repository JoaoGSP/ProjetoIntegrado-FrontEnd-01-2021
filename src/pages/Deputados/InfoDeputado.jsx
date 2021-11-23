import React, { useEffect, useState } from 'react'
// eslint-disable-next-line
import { mask } from 'remask'
import { Card, Row, Col, Image, ListGroup, Container, Button  } from 'react-bootstrap'
import { FaPlus } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import apiDeputados from '../../services/Deputados/apiDeputados'
import { AiFillFacebook, AiFillInstagram, AiOutlineMail } from 'react-icons/ai'
import { BsFillTelephoneFill } from 'react-icons/bs'
import InfoInstagram from '../../elements/InfoInstagram.jsx'
import InfoFacebook from '../../elements/InfoFacebook.jsx'

// eslint-disable-next-line
const pattern = '999.999.999-99'

function validURL(str) {
    var pattern = new RegExp('^(https?:\\/\\/)?'+ // protocol
      '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+ // domain name
      '((\\d{1,3}\\.){3}\\d{1,3}))'+ // OR ip (v4) address
      '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // port and path
      '(\\?[;&a-z\\d%_.~+=-]*)?'+ // query string
      '(\\#[-a-z\\d_]*)?$','i'); // fragment locator
    return !!pattern.test(str);
  }

const InfoDeputado = ({ match }) => {
    const [infodeputado, setInfoDeputado] = useState([])
    const [redesocial, setRedeSocial] = useState([])
    const [status, setStatus] = useState([])
    const [gabinete, setGabinete] = useState([])

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
            <Card border="success" fluid>
                <Card.Body>
                    <Row>
                        <Col xs={4} className='text-center'>
                            <Image src={status.urlFoto} thumbnail />
                            <ListGroup as="ul">
                                <ListGroup.Item as="li" active>Contatos</ListGroup.Item>
                                {validURL(redesocial[0])?<Button variant="btn btn-outline-dark" href={redesocial[0]}><AiFillFacebook/></Button>:<InfoFacebook />}
                                {validURL(redesocial[1])?<Button variant="btn btn-outline-dark" href={redesocial[1]}><AiFillInstagram/></Button>:<InfoInstagram />}
                                <Button variant="btn btn-outline-dark"><AiOutlineMail/> {' '} {status.email}</Button>
                                <Button variant="btn btn-outline-dark"><BsFillTelephoneFill/>{' '} {gabinete.telefone}</Button>
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
                                <ListGroup.Item as='li' action variant='dark' className="text-center">Gabinete: {'Prédio: ' + gabinete.predio} <br />
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
