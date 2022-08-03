import React from 'react';
import Button from 'react-bootstrap/Button';
import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import { NavDropdown } from 'react-bootstrap';
import { FormControl } from 'react-bootstrap';
import { Form } from 'react-bootstrap';

function menuTopo(){
    return (
        <>
        <Navbar bg="dark" variant="dark" expand="lg">
            <Container>
                <Navbar.Brand href="#home"> 
                    <img src="/logo512.png" width="30" height="30" className="d-inline-block align-top" alt="React Bootstrap logo" />&nbsp;Eureka React Website
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#link">Link</Nav.Link>
                        <Nav.Link href="#link">Link</Nav.Link>
                        <Nav.Link href="#link">Link</Nav.Link>
                        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Form className="d-flex">
                        <FormControl type="search" placeholder="Buscar no site:" className="mr-2" aria-label="Buscar" />&nbsp;<Button variant="outline-danger">Ir</Button>
                    </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        </>
    );
}

export default menuTopo;