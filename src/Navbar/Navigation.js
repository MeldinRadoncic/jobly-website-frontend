import React, { useContext } from "react";
import UserContext from "../auth/UserContext";
import {Navbar, Container, Nav, NavDropdown} from 'react-bootstrap'
import {FaUser} from "react-icons/fa"

import './Navigation.css'

/** Navigation bar for site. Shows up on every page*/

function Navigation({ logout }) {
  const { currentUser } = useContext(UserContext);
  

  return (

<Navbar bg="dark" fixed="top" variant='dark' expand="lg">
<Container>
  <Navbar.Brand href="/">JOBLY</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="ms-auto">
      {currentUser ?
    <>
    <Nav.Link href="/companies">COMPANIES</Nav.Link>
      <Nav.Link href="/jobs">JOBS</Nav.Link>
      <NavDropdown  title={<FaUser/>} id="basic-nav-dropdown">
        <NavDropdown.Item className='basic-nav-dropdown-item' href="/profile">Edit Account</NavDropdown.Item>
        <NavDropdown.Item className='basic-nav-dropdown-item' onClick={logout} href="/">
          LOGOUT
        </NavDropdown.Item>
        <p className='basic-nav-dropdown-paragraph'>{currentUser.username}</p>

      </NavDropdown>
    </> 
    : 
    <>
          <Nav.Link href="/login">LOGIN</Nav.Link>
          <Nav.Link href="/signup">SIGN UP</Nav.Link>
    </>
    }
      
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
  );
}

export default Navigation;
