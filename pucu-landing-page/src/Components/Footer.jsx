import React from "react";

import { Container, Row, Col } from "react-bootstrap";

import { ImFacebook, ImTwitter } from "react-icons/im";
import { BsInstagram } from "react-icons/bs";

import logo from "../Brand/pucu-logo.png";

const Footer = () => {
     const navigateFB = () => {
          window.location.href = "https://www.facebook.com/PUCUSSC";
     };
     const navigateTW = () => {
          window.location.href = "https://twitter.com/phinmaupang/";
     };
     const navigateIG = () => {
          window.location.href = "https://www.instagram.com/phinmaupang/";
     };

     return (
          <Container>
               <Row className="align-items-center" id="footer-logo-container">
                    <Col md={6}>
                         <div className="p-3">
                              <img src={logo} alt="logo" id="footer-logo" />
                         </div>
                    </Col>
                    <Col md={6}>
                         <Row>
                              <Col md={12}>
                                   <p className="text-center">
                                        <strong>Contact us</strong>
                                        <br />
                                        <br />
                                        <span style={{ fontWeight: "400" }}>
                                             +63 996-388-0840 / + 63
                                             938-3449-751
                                        </span>
                                        <br />
                                        <span style={{ fontWeight: "400" }}>
                                             McArthur Highway, Urdaneta, 2428,
                                             Pangasinan
                                        </span>
                                        <br />
                                        <br />

                                        <span
                                             className="me-5"
                                             onClick={navigateFB}
                                             id="sc-icons">
                                             <ImFacebook />
                                        </span>
                                        <span
                                             className="me-5"
                                             onClick={navigateTW}
                                             id="sc-icons">
                                             <ImTwitter />
                                        </span>
                                        <span
                                             className="me-5"
                                             onClick={navigateIG}
                                             id="sc-icons">
                                             <BsInstagram />
                                        </span>
                                   </p>
                              </Col>
                         </Row>
                    </Col>
               </Row>
          </Container>
     );
};

export default Footer;
