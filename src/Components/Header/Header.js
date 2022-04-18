import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { signOut } from 'firebase/auth';
import './Header.css'
import CustomLink from '../../CustomLink/CustomLink';
const Header = () => {
  const [user, loading, error] = useAuthState(auth);
  const logOut=()=>{
    signOut(auth)
  }
    return (
        <div>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" sticky='top'>
  <Container>
  <Navbar.Brand as={Link} className='page-title' to='/home'><span className='red-color'>Margeret</span> Fox Fitness</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <Nav.Link as={CustomLink} to="/home">Home</Nav.Link>
      
      <Nav.Link as={CustomLink} to="/blogs">Blogs</Nav.Link>
      <Nav.Link as={CustomLink} eventKey={2} to="/about">
        About
      </Nav.Link>
    </Nav>
    <Nav>
     {
       user?<button className='red-button' onClick={logOut}>Sign out</button>:  <Nav.Link  as={CustomLink} to="/login">Login</Nav.Link>
     }
      
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
            
        </div>
    );
};

export default Header;