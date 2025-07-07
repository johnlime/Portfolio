import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/showcase.gif";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 className="heading-name">
                <strong className="main-name"> MIOTO TAKAHASHI </strong>
              </h1>

              <h2 className="profession-name" style={{ paddingLeft: 50, textAlign: "left" }}>
                <strong> AI Engineer / Researcher </strong>
              </h2>
              <h2 className="profession-name" style={{ paddingLeft: 50, textAlign: "left" }}>
                <strong> Simulation Data Scientist </strong>
              </h2>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "450px" }}
              />
            </Col>
          </Row>
        </Container>
      </Container>
      <Home2 />
    </section>
  );
}

export default Home;


// <h2 className="profession-name" style={{ paddingLeft: 50, textAlign: "left" }}>
//   <strong> Mathematical Modeler </strong>
// </h2>

// <h1 style={{ paddingBottom: 15 }} className="heading">
//   Hi There!{" "}
//   <span className="wave" role="img" aria-labelledby="wave">
//     👋🏻
//   </span>
// </h1>
