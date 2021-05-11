import React from 'react'
import {Navbar, Nav, Container, Row} from 'react-bootstrap'

function Header() {
    return (
        <header>
            <Navbar bg="primary" variant="dark" expand="lg">
                <Navbar.Brand href="/" className="px-4">SuperHeros</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="/"> <i className="fas fa-home px-1"></i>Home</Nav.Link>
                        <Nav.Link href="/login"><i class="fas fa-mask px-1"></i>Login</Nav.Link>
                        <Nav.Link href="/buscar"><i class="fas fa-search px-1"></i>Buscar</Nav.Link>
                        <Nav.Link href="/equipo"> <i class="fas fa-users px-1"></i>Equipo</Nav.Link>
                    </Nav>
                    
                </Navbar.Collapse>
            </Navbar>
        </header>
    )
}

export default Header
