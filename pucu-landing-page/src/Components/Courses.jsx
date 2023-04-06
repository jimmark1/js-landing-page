import React from "react";
import { data } from "./UPCourses";
import { Card, Container, Row, Col } from "react-bootstrap";

const Courses = () => {
     return (
          <Container>
               <Row>
                    {data.map((data, index) => (
                         <Col xs={12} md={6} lg={4} key={index}>
                              <Card className="Card mb-3">
                                   <Card.Img
                                        variant="top"
                                        src={data.image}
                                        style={{ height: "25rem" }}
                                   />
                                   <Card.Body>
                                        <Card.Title
                                             className="fw-bold"
                                             style={{ letterSpacing: "0.5px" }}>
                                             {data.title}
                                        </Card.Title>
                                   </Card.Body>
                              </Card>
                         </Col>
                    ))}
               </Row>
          </Container>
     );
};

export default Courses;
