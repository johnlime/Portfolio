import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import spring_creatures from "../../Assets/Projects/spring_creatures/square.gif";
import lv_fitting from "../../Assets/Projects/lv_fitting/scatter_baseline.gif";
import convergent_evolution from "../../Assets/Projects/convergent_evolution/pca_02.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Container>
        <Row style={{ justifyContent: "center"}}>
          <h1 className="project-heading">
            <strong class="highlight"> Significant Works </strong>
          </h1>
        </Row>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={5} className="project-card">
            <ProjectCard
              imgPath={spring_creatures}
              isBlog={false}
              title="Spring Creatures"
              description="A system to procedurally generate a virtual creature, or an artificial life, in a 2 dimensional physics simulation that can conduct forward locomotion in an aquatic environment"
              tags="AI, Physics Simulation, Optimization, Procedural Generation"
              ghLink="https://github.com/johnlime/spring_creatures_experiment"
              articleLink="projects/spring-creatures"
            />
          </Col>
          <Col md={5} className="project-card">
            <ProjectCard
              imgPath={convergent_evolution}
              isBlog={true}
              title="Bayesian Inference of Convergent Evolution in Quadrupeds"
              description="Evaluation of convergent evolution in body proportions between ceratopsians and extant quadrupeds using Bayesian inference"
              tags="Bayesian statistics, Principal Component Analysis, Regression, Biology"
              articleLink="projects/convergent-evolution"
            />
          </Col>
          <Col md={5} className="project-card">
            <ProjectCard
              imgPath={lv_fitting}
              isBlog={true}
              title="Lotka-Volterra Model Population Dynamics Prediction"
              description="Found that adding a quadratic term to the Lotka-Volterra model increases its prediction performance of population dynamics"
              tags="Mathematical Modeling, Regression, Ecology"
              articleLink="projects/lv-fitting"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;

// demoLink="https://chatify-49.web.app/"
