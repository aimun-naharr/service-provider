import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" sticky='top'>
  <Container>
  <Navbar.Brand as={Link} className='page-title' to='/home'>Margeret Fox Fitness</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <Nav.Link as={Link} to="home#services">Services</Nav.Link>
      <Nav.Link as={Link} to="/blogs">Blogs</Nav.Link>
      
    </Nav>
    <Nav>
      <Nav.Link as={Link} to="/login">Log in</Nav.Link>
      <Nav.Link as={Link} eventKey={2} to="/about">
        About
      </Nav.Link>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
            
        </div>
    );
};

export default Header;