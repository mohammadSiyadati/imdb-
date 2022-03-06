import React from 'react'

import { Navbar, Form , Container, Nav, DropdownButton,Dropdown } from 'react-bootstrap'


import './Header.css'

function Header() {
  return (
    <header>
      <Navbar bg="#121212" expand="lg">
        <Container fluid>
          <img className='img' src='images/download.png'
          alt="" width="80px" height="40px"/>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <DropdownButton  title="menu">
            <Dropdown.Item eventKey="/">Action</Dropdown.Item>
            <Dropdown.Item eventKey="/">Another action</Dropdown.Item>
            <Dropdown.Item eventKey="/">Something else here</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
          </DropdownButton>
          <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll>
          </Nav>
          <Form className="d-flex">
            <input className="form-control me-2 "
            type="search" 
            placeholder="Search IMDb" 
            aria-label="Search" />
          </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  )
}

export default Header