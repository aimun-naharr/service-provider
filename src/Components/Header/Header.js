import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { signOut } from 'firebase/auth';
import './Header.css'
const Header = () => {
  const [user, loading, error] = useAuthState(auth);
  const logOut=()=>{
    signOut(auth)
  }
    return (
        <div>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" sticky='top'>
  <Container>
  <Navbar.Brand as={Link} className='page-title' to='/home'>Margeret Fox Fitness</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <Nav.Link as={Link} to="/home">Home</Nav.Link>
      <Nav.Link as={Link} to="home#services">Services</Nav.Link>
      <Nav.Link as={Link} to="/blogs">Blogs</Nav.Link>
      
    </Nav>
    <Nav>
     {
       user?<button className='red-button' onClick={logOut}>Sign out</button>:  <Nav.Link  as={Link} to="/login">Login</Nav.Link>
     }
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