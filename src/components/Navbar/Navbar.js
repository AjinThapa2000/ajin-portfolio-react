import React, { Component } from 'react';
import { Link } from "react-router-dom";
import {Container,Nav,Navbar} from 'react-bootstrap';
import './Navbar.css'

class NavbarComp extends Component {
    
    render() {
        return (
            <div>
                <Navbar bg="dark" variant="dark">
                    <Container>
                        <Nav className="navbar-nav">
                            <Nav.Link as={Link} to={'/'}>Home</Nav.Link>
                            <Nav.Link as={Link} to={'/project'}>Projects</Nav.Link>
                            <Nav.Link as={Link} to={'/contact'}>Contact</Nav.Link>
                        </Nav>
                    </Container>
                </Navbar>
            
            </div>
        );
    }
}

export default NavbarComp;