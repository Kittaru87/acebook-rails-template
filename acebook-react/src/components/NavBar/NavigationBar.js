import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, Button } from "react-bootstrap";
import "./NavigationBar.css";
import NavigationBarIcons from "./NavigationBarIcons/NavigationBarIcons";

const NavigationBar = () => {
  return (
    <Navbar
      style={{ minHeight: "65px" }}
      bg="light"
      expand="lg"
      data-test="component-navBar"
    >
      <Navbar.Brand href="#home">
        <Link to="/" className="OverRideLink NavBarBrand">
          ACEBOOK
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
        <div className="User" style={{ marginRight: "8px" }}>
          Hello Nimzy
        </div>
        <NavigationBarIcons />
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavigationBar;
