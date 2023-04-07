import React from "react";
import logo from "../Brand/pucu-logo.png";

import { FaBars } from "react-icons/fa";
import { ImArrowRight2 } from "react-icons/im";

import { Navbar, Nav, Button } from "react-bootstrap";

const CNavbar = () => {
     return (
          <div>
               <Navbar className="" expand="lg" collapseOnSelect>
                    <Navbar.Brand className="logo" href="#home">
                         <img
                              src={logo}
                              alt="Logo"
                              className="d-inline-block align-top"
                         />
                    </Navbar.Brand>
                    <Navbar.Toggle
                         aria-controls="basic-navbar-nav"
                         style={{ border: "none", outline: "none" }}>
                         <FaBars color="white" />
                    </Navbar.Toggle>
                    <Navbar.Collapse id="basic-navbar-nav">
                         <Nav className="mx-auto">
                              <Nav.Link className="me-3" href="#home">
                                   Home
                              </Nav.Link>
                              <Nav.Link className="me-3" href="#courses">
                                   Courses Offered
                              </Nav.Link>
                              <Nav.Link href="#about-us">About Us</Nav.Link>
                         </Nav>
                         <Nav>
                              <Button variant="success d-flex justify-content-center">
                                   Get Started &nbsp;
                                   <ImArrowRight2 className="align-self-center " />
                              </Button>
                         </Nav>
                    </Navbar.Collapse>
               </Navbar>
          </div>
     );
};

export default CNavbar;
