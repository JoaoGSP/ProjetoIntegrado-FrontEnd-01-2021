import React from 'react'
import { Card, Col, Container, Nav, Navbar, Offcanvas, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Menu = () => {

    return (

        <Navbar collapseOnSelect className='navbar navbar-dark bg-success' expand={false}>
            <Container fluid>
                <Navbar.Brand className='text-light text-center' href="/"><img alt="Responsive" src="https://www.camara.leg.br/tema/assets/images/logo-brand-camara-desktop.png" /></Navbar.Brand>
                <Navbar.Toggle className='btn btn-success' aria-controls="offcanvasNavbar" />
                <Navbar.Offcanvas
                    id="offcanvasNavbar"
                    aria-labelledby="offcanvasNavbarLabel"
                    placement="top"
                    className="bg-success"
                    style={{ maxHeight: '150px' }}
                >
                    <Offcanvas.Header closeButton>
                        <Offcanvas.Title id="offcanvasNavbarLabel">ApiDadosAbertos</Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body >
                        <Nav className="text-center" activeKey="/home">
                            <Row>
                                <Col>
                                <Card className="bg-success"border="primary">
                                    <Nav.Item>
                                        <Nav.Link eventKey="2" as={Link} to="/legislaturas">
                                            Legislaturas
                                        </Nav.Link>
                                    </Nav.Item>
                                </Card>
                                </Col>
                                <Col>
                                <Card className="bg-success"border="primary">
                                    <Nav.Item>
                                        <Nav.Link eventKey="1" as={Link} to="/deputados">
                                            Deputados
                                        </Nav.Link>
                                    </Nav.Item>
                                    </Card>
                                </Col>
                                <Col>
                                <Card className="bg-success"border="primary">
                                    <Nav.Item>
                                        <Nav.Link eventKey="3" as={Link} to="/partidos">
                                            Partidos
                                        </Nav.Link>
                                    </Nav.Item>
                                    </Card>
                                </Col>
                            </Row>
                        </Nav>
                    </Offcanvas.Body>
                </Navbar.Offcanvas>
            </Container>
        </Navbar>
    )
}

export default Menu