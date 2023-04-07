import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const AboutUs = () => {
     return (
          <div>
               <Container>
                    <Row>
                         <Col className="mb-5" lg={6}>
                              <div className="p-3" id="mission-vision">
                                   <h2 className="text-center fw-bold mb-5">
                                        University Vision
                                   </h2>
                                   <p className="fw-normal">
                                        By 2025, to be an educational
                                        institution recognized for transforming
                                        the lives of its students and their
                                        families, especially low income
                                        families, for better; and for the number
                                        of students whos lives it has improved.
                                   </p>
                              </div>
                         </Col>
                         <Col className="mb-5" lg={6}>
                              <div className="p-3" id="mission-vision">
                                   <h2 className="text-center fw-bold mb-5">
                                        University Mission
                                   </h2>
                                   <p className="text-center text-justify fw-semi-bold mb-3">
                                        To uplift the lives of low income
                                        families in our community. We will
                                        pursue this mission by:
                                   </p>

                                   <ol>
                                        <li className="mb-5">
                                             <span className="fw-normal">
                                                  Providing these families
                                                  accessible, relevant, and
                                                  appropriate training and
                                                  education that leads to
                                                  employment and improvement in
                                                  their economic well-being.
                                             </span>
                                        </li>
                                        <li className="mb-5">
                                             <span className="fw-normal">
                                                  Producing the competent &
                                                  qualified human resources
                                                  needed by metro dagupan,
                                                  national, and global
                                                  industries.
                                             </span>
                                        </li>
                                        <li className="mb-5">
                                             <span className="fw-normal">
                                                  Facilitating collaboration
                                                  among government, industry,
                                                  and the academe as the means
                                                  to designing programs and
                                                  curricula that respond to the
                                                  needs of a developing economy.
                                             </span>
                                        </li>
                                        <li className="mb-5">
                                             <span className="fw-normal">
                                                  Transforming PHINMA UPang into
                                                  a community that celebrates
                                                  diversity, cross cultural
                                                  appreciation, creativity and
                                                  collaboration and that serves
                                                  as a model for others.
                                             </span>
                                        </li>
                                   </ol>
                              </div>
                         </Col>
                    </Row>
               </Container>
          </div>
     );
};

export default AboutUs;
