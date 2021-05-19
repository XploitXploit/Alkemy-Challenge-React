import {Navbar, Nav} from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { LinkContainer } from 'react-router-bootstrap'

function Header() {
   const user = useSelector(state => state.userLogin)
   const {userInfo} = user

    
    return (
        <header>
            <Navbar bg="primary" variant="dark" expand="lg">
                <Navbar.Brand href="/" className="px-4">SuperHeros</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <LinkContainer to='/'>
                            <Nav.Link > <i className="fas fa-home px-1"></i>Home</Nav.Link>
                        </LinkContainer>

                        {userInfo?(
                        <div></div>):(
                            <LinkContainer to='/login'>
                                <Nav.Link ><i className="fas fa-mask px-1"></i>Login</Nav.Link>
                            </LinkContainer>)}    
                        
                            
                        <LinkContainer to="/buscar">
                        <Nav.Link ><i className="fas fa-search px-1"></i>Buscar</Nav.Link>
                        </LinkContainer>

                    </Nav>
                    
                </Navbar.Collapse>
            </Navbar>
        </header>
    )
}

export default Header
