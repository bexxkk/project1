import React from "react";
import { Container, Row, Col } from "reactstrap";
import heroImg from "../../assests/images/hero-img1.png";
import "./hero-section.css";

const HeroSection = () => {
  return (
    <section>
      <Container>
        <Row>
          <Col lg="6" md="6">
            <div className="hero__content">
              <h2 className="mb-4 hero__title">
                Education is not a future <br /> life but a present one. <br /> So don't waste it!
              </h2>
              <p className="mb-5">
              The mission of Phoenix is to enable everyone <br /> to be a relevant and in-demand specialist <br /> right now. Regardless of age and geography.
              </p>
            </div>
            
          </Col>

          <Col lg="6" md="6">
            <img src={heroImg} alt="" className="w-100 hero__img" />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default HeroSection;
