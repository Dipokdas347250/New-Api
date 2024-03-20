import React from 'react'
import { Container,Navbar,Nav } from 'react-bootstrap'

import "./menu.css"

const Menu = () => {
  return (
   <section>
    
    <Navbar expand="lg" className="menu_bg">
      <Container>
        <Navbar.Brand className='phone'>Phone Shop</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">About </Nav.Link>
            <Nav.Link href="#link">Service</Nav.Link>
            <Nav.Link href="#link">Blog</Nav.Link>
            
          </Nav>
          
        </Navbar.Collapse>
      </Container>
    </Navbar>
   
   </section>
  )
}

export default Menu
