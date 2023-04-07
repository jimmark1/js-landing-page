import React from "react";

import { Container, Row, Col } from "react-bootstrap";

const AboutUs = () => {
     return (
          <div>
               <Container>
                    <Row>
                         <Col sm={6}>
                              <h2>Mission</h2>
                              <p>
                                   Lorem ipsum dolor sit amet, consectetur
                                   adipiscing elit. Duis ultrices, ex vel
                                   lacinia rhoncus, neque ipsum tincidunt enim,
                                   at faucibus arcu tortor vel magna.
                              </p>
                         </Col>
                         <Col sm={6}>
                              <h2>Vision</h2>
                              <p>
                                   Lorem ipsum dolor sit amet, consectetur
                                   adipiscing elit. Duis ultrices, ex vel
                                   lacinia rhoncus, neque ipsum tincidunt enim,
                                   at faucibus arcu tortor vel magna.
                              </p>
                         </Col>
                    </Row>
               </Container>
          </div>
     );
};

export default AboutUs;
