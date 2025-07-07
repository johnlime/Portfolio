import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import spring_creatures from "../../Assets/Projects/spring_creatures/square.gif";
import lv_fitting from "../../Assets/Projects/lv_fitting/scatter_baseline.gif";
import convergent_evolution from "../../Assets/Projects/convergent_evolution/pca_02.png";
import diayn from "../../Assets/Projects/diayn/diayn_00.gif";
import armor_evolution from "../../Assets/Projects/armor_evolution/preynn_pae.png"

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
              imgPath={armor_evolution}
              isBlog={true}
              title="MASTER'S THESIS"
              description="Investigate if armor (defensive weaponry) evolution in predators could lower the average evolutionary time until extinction in different predator-prey ecosystems using agent-based models and statistics"
              tags="Agent-Based Modeling, Computational Biology, Evolution, Statistical Analysis, Simulation"
              articleLink="#/masters-thesis"
            />
          </Col>
          <Col md={5} className="project-card">
            <ProjectCard
              imgPath={convergent_evolution}
              isBlog={true}
              title="Bayesian Inference of Convergent Evolution in Quadrupeds"
              description="Evaluation of convergent evolution in body proportions between ceratopsians and extant quadrupeds using Bayesian inference"
              tags="Bayesian statistics, Principal Component Analysis, Regression, Biology"
              articleLink="#/convergent-evolution"
            />
          </Col>
          <Col md={5} className="project-card">
            <ProjectCard
              imgPath={diayn}
              isBlog={true}
              title="Dirichlet DIAYN"
              description="Implemented the proximal policy optimization (PPO) and hierarchical reinforcement learning algorithm, Diversity Is All You Need (DIAYN) and examined the effect of utilizing Dirichlet distribution in DIAYN"
              tags="Hierarchical Reinforcement Learning, Machine Learning, AI, Control Systems, Robotics"
              ghLink="https://github.com/johnlime/RlkitExtension"
              articleLink="#/diayn"
            />
          </Col>
          <Col md={5} className="project-card">
            <ProjectCard
              imgPath={spring_creatures}
              isBlog={false}
              title="Spring Creatures"
              description="A system to procedurally generate a virtual creature, or an artificial life, in a 2 dimensional physics simulation that can conduct forward locomotion in an aquatic environment"
              tags="AI, Physics Simulation, Optimization, Procedural Generation"
              ghLink="https://github.com/johnlime/spring_creatures_experiment"
              articleLink="#/spring-creatures"
            />
          </Col>
          <Col md={5} className="project-card">
            <ProjectCard
              imgPath={lv_fitting}
              isBlog={true}
              title="Lotka-Volterra Model Population Dynamics Prediction"
              description="Found that adding a quadratic term to the Lotka-Volterra model increases its prediction performance of population dynamics"
              tags="Mathematical Modeling, Regression, Ecology"
              articleLink="#/lv-fitting"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;

// demoLink="https://chatify-49.web.app/"
