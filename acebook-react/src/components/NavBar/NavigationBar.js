import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";
import "./NavigationBar.css";
import NavigationBarIcons from "./NavigationBarIcons/NavigationBarIcons";

const NavigationBar = () => {
  return (
    <Fragment>
      <div style={{ marginTop: "70px" }}></div>
      <Navbar
        style={{
          minHeight: "65px",
          backgroundColor: "#242526",
        }}
        expand="lg"
        data-test="component-navBar"
        className="fixed-top"
      >
        <Navbar.Brand>
          <Link to="/" className="OverRideLink NavBarBrand">
            ACEBOOK
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Link
              to="/profile"
              className="OverRideLink"
              style={{ margin: "10px" }}
            >
              Profile
            </Link>
            <Link
              to="/about"
              className="OverRideLink"
              style={{ margin: "10px" }}
            >
              About
            </Link>
          </Nav>
          <div className="User" style={{ marginRight: "8px" }}>
            Hello Nimzy
          </div>
          <NavigationBarIcons />
        </Navbar.Collapse>
      </Navbar>
    </Fragment>
  );
};

export default NavigationBar;
