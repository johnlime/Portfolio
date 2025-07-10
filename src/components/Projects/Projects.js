import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import spring_creatures from "../../Assets/Projects/spring_creatures/square.gif";
import lv_fitting from "../../Assets/Projects/lv_fitting/scatter_baseline.gif";
import convergent_evolution from "../../Assets/Projects/convergent_evolution/pca_02.png";
import diayn from "../../Assets/Projects/diayn/diayn_00.gif";
import armor_evolution from "../../Assets/Projects/armor_evolution/preynn_pae.png"
import boid_optimized from "../../Assets/Projects/unity_crowd_ai/gif/boid-optimized.gif";

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
              imgPath={boid_optimized}
              isBlog={true}
              title="Unity Crowd AI"
              description="Drastically boosted the performance of 2 computationally expensive crowd AI in Unity using C# optimization techniques"
              tags="Game Development, Performance Optimization, 3D Simulation"
              articleLink="#/unity-crowd-ai"
            />
          </Col>
          <Col md={5} className="project-card">
            <ProjectCard
              imgPath={convergent_evolution}
              isBlog={true}
              title="Bayesian Inference of Convergent Evolution in Quadrupeds"
              description="Uncovered a divergence in evolution of anatomical proportions between 2 phylogenetically distant taxa, extant quadrupedal animals and (extinct) ceratopsians, using Bayesian inference"
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
              description="Formulated and implemented a novel system capable of procedurally generating structurally complex physics-simulated robots with muscles and limbs"
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
              description="Proposed a modification to a mathematical model of population dynamics of predator-prey ecosystems, that exceeded the original algorithm in prediction accuracy"
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
