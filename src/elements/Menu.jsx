import React from 'react'
import { Container, Nav, Navbar, Offcanvas } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Menu = () => {

    return (

        <Navbar collapseOnSelect className='navbar navbar-dark bg-dark' expand={false}>
            <Container fluid>
                <Navbar.Brand className='text-light text-center' href="/">ApiDadosAbertos</Navbar.Brand>
                <Navbar.Toggle className='btn btn-outline-dark' aria-controls="offcanvasNavbar" />
                <Navbar.Offcanvas
                    id="offcanvasNavbar"
                    aria-labelledby="offcanvasNavbarLabel"
                    placement="top"
                >
                    <Offcanvas.Header closeButton>
                        <Offcanvas.Title id="offcanvasNavbarLabel">ApiDadosAbertos</Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body >
                        <Nav className="navbar bg-light">
                            <Nav.Item>
                                <Nav.Link eventKey="2" as={Link} to="/legislaturas">
                                    Legislaturas
                                </Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="1" as={Link} to="/deputados">
                                    Deputados
                                </Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="3" as={Link} to="/partidos">
                                    Partidos
                                </Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Offcanvas.Body>
                </Navbar.Offcanvas>
            </Container>
        </Navbar>
    )
}

export default Menu