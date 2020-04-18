import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, Button } from "react-bootstrap";
import "./NavigationBar.css";

const NavigationBar = () => {
  return (
    <Navbar bg="light" expand="lg" data-test="component-navBar">
      <Navbar.Brand href="#home">
        <Link to="/" className="OverRideLink">
          Acebook
        </Link>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#home">
            <Link to="/" className="OverRideLink">
              Home
            </Link>
          </Nav.Link>
          <Nav.Link href="#link">
            <Link to="/profile" className="OverRideLink">
              Profile
            </Link>
          </Nav.Link>
        </Nav>
        <Button>hello there</Button>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavigationBar;
