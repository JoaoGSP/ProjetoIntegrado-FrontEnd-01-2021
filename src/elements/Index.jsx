
import React from 'react'
import { Card, Container, Image, Row, Button } from 'react-bootstrap'
import { FaPlus } from 'react-icons/fa'
import fundo from '../img/imagem-padrao.jpg'
const Index = () => {

    return (
        <>
            <Card border="success">
                <Card.Header className="bg-white text-success text-center"> Projeto Integrado - FrontEnd (Api Dados Abertos) </Card.Header>
                <Container className='d-flex justify-content-center'>
                    <Image variant="top" style={{ width: '25rem' }} src={fundo} thumbnail />
                </Container>
            </Card>
            <Card border='success'>
                <Container>
                    <Row xs={3}>
                        <Card>
                            <Card.Body>
                                <Card.Header className="text-center">Partidos?</Card.Header>
                                Significado de Partido<br></br>
                                substantivo masculino<br></br>
                                Grupo de pessoas unidas pela mesma opinião, interesses ou ideologia política.
                            </Card.Body>
                            <Card.Footer className="text-center"> <Button href="/partidos" variant="btn btn-outline-success" >
                                <FaPlus /> {' '}
                            </Button></Card.Footer>
                        </Card>
                        <Card>
                            <Card.Body>
                                <Card.Header className="text-center">Legislaturas?</Card.Header>
                                Significado de Legislatura<br></br>
                                substantivo feminino<br></br>
                                Assembleia do poder legislativo da qual fazem parte deputados e senadores; tempo de duração dos mandatos dos membros dessa assembleia.
                            </Card.Body>
                            <Card.Footer className="text-center" ><Button href="/legislaturas" variant="btn btn-outline-success" >
                                <FaPlus /> {' '}
                            </Button></Card.Footer>
                        </Card>
                        <Card>
                            <Card.Body>
                                <Card.Header className="text-center">Deputados?</Card.Header>
                                Significado de Deputado<br></br>
                                substantivo masculino<br></br>
                                O que por eleição se torna membro de uma assembléia deliberante; delegado.
                                Membro eleito pela nação para a Câmara dos Deputados.

                            </Card.Body>
                            <Card.Footer className='text-center'><Button href="/deputados" variant="btn btn-outline-success" >
                                <FaPlus /> {' '}
                            </Button>
                            </Card.Footer>
                        </Card>
                    </Row>
                </Container>
            </Card>
        </>
    )
}

export default Index