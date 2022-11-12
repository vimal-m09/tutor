import React from 'react'
import { Container, Navbar, Offcanvas, Nav, NavDropdown,Dropdown, Form, Button } from 'react-bootstrap';
import logo from '../image/favicon.png'
export function Navi  () {
    const expand =  "xl";
  return (
    <Navbar key={expand}  expand={expand} className="mb-3 navBg">
    <Container fluid>
      <Navbar.Brand href="/"><img src={logo} width="40px" alt='logo'/> Tutor Finder</Navbar.Brand>
      <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
      <Navbar.Offcanvas
        id={`offcanvasNavbar-expand-${expand}`}
        aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
        placement="end"
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
            Offcanvas
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Nav className="justify-content-end flex-grow-1 pe-3">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/tutor">Tutors</Nav.Link>
            {/* <NavDropdown
              title="Dropdown"
              id={`offcanvasNavbarDropdown-expand-${expand}`}
            >
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown> */}
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
          <Nav className="d-flex justify-content-end align-items-center ps-3    me-1">
          <Dropdown>
            <Dropdown.Toggle variant="info" id="dropdown-basic">
              sign in/sign up
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="/teacher/login">Teacher</Dropdown.Item>
              <Dropdown.Divider/>
              <Dropdown.Item href="/student/login">Student</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          </Nav>
        </Offcanvas.Body>
      </Navbar.Offcanvas>
    </Container>
  </Navbar>
  )
}
