import React from "react";

import banner from "../Brand/banner.jpg";
import Courses from "../Components/Courses";

import { Container } from "react-bootstrap";

const MainContent = () => {
     return (
          <div>
               <section className="mb-5" id="home">
                    <div className="d-flex justify-content-center mt-5 ">
                         <img
                              src={banner}
                              alt="PHINMA Education"
                              id="pen-banner"
                         />
                    </div>
                    <Container>
                         <p>
                              As an innovative Philippine business institution,
                              PHINMA believes that access to quality education
                              is the solution to many of our country’s problems.
                              While the enrollment rate in the Philippines has
                              always been high, PHINMA discovered that most
                              students do not finish tertiary education.
                              Students were willing to learn but did not have
                              the resources to stay in school. That is why in
                              2004, PHINMA Education was established. PHINMA
                              Education is making education accessible in key
                              growth areas all over the country. It has
                              transformed existing educational institutions to
                              provide better academic, operational, and
                              community support for all of its students. Through
                              its efforts more students are able to earn college
                              degrees and become globally competitive
                              professionals. The PHINMA Education Network is now
                              composed of six secondary and tertiary educational
                              institutions spread throughout the country.
                         </p>
                    </Container>
               </section>
               <section id="courses">
                    <div className="d-flex justify-content-center">
                         <h1 className="courses-label mb-5 fw-bolder">
                              COURSES
                         </h1>
                    </div>
                    <Courses />
               </section>
          </div>
     );
};

export default MainContent;