import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import spring_creatures from "../../Assets/Projects/spring_creatures.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          <strong class="highlight"> Significant Works </strong>
        </h1>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={5} className="project-card">
            <ProjectCard
              imgPath={spring_creatures}
              isBlog={false}
              title="Spring Creatures"
              description="A system to procedurally generate a virtual creature, or an artificial life, in a 2 dimensional physics simulation that can conduct forward locomotion in an aquatic environment"
              tags="AI, Physics Simulation, Optimization, Procedural Generation"
              ghLink="https://github.com/johnlime/spring_creatures_experiment"
              articleLink=""
            />
          </Col>
          <Col md={5} className="project-card">
            <ProjectCard
              imgPath={spring_creatures}
              isBlog={true}
              title="Bayesian Inference of Convergent Evolution in Quadrupeds"
              description="Evaluation of convergent evolution in body proportions between ceratopsians and extant quadrupeds using Bayesian inference"
              tags="Bayesian statistics, Principal Component Analysis, Regression, Biology"
              articleLink="fdsaf"
            />
          </Col>
          <Col md={5} className="project-card">
            <ProjectCard
              imgPath={spring_creatures}
              isBlog={true}
              title="Lotka-Volterra Model Population Dynamics Prediction"
              description=""
              tags="Mathematical Modeling, Regression, Ecology"
              articleLink="fdsaf"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;

// demoLink="https://chatify-49.web.app/"
