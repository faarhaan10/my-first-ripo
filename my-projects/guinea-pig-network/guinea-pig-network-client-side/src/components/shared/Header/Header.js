import React from "react";
import { Container, Nav, Navbar, Button, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
const Header = () => {
  return (
    <>
      <Navbar
        collapseOnSelect
        expand="lg"
        bg="light"
        variant="light"
        className="p-0"
      >
        <Container>
          <Navbar.Brand as={Link} to="/home">
            <Image src="https://i.ibb.co/rcshhbN/logo.png" width="180px" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse
            id="responsive-navbar-nav"
            className=" justify-content-end align-items-center"
          >
            <Nav className="fw-bold align-items-center">
              <Nav.Link as={Link} to="/home">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/home">
                Donation
              </Nav.Link>
              <Nav.Link as={HashLink} to="/home#events">
                Events
              </Nav.Link>
              <Nav.Link as={Link} to="/home">
                Blog
              </Nav.Link>
              <Nav.Link as={Link} to="/register">
                <Button className="px-4" variant="primary">
                  Register
                </Button>
              </Nav.Link>
              <Nav.Link as={Link} to="/home">
                <Button className="px-4" variant="secondary">
                  Admin
                </Button>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
