import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import 'katex/dist/katex.min.css';
import Latex from 'react-latex-next';

import boid_unoptimized_performance from "../../Assets/Projects/unity_crowd_ai/png/boid-unoptimized.png";
import boid_optimized_performance from "../../Assets/Projects/unity_crowd_ai/png/boid-optimized.png";
import family_unoptimized_performance from "../../Assets/Projects/unity_crowd_ai/png/family-unoptimized.png";
import family_optimized_performance from "../../Assets/Projects/unity_crowd_ai/png/family-optimized.png";

// const LATEX_MACROS = { "\\f": "#1f(#2)" };

function UnityCrowdAI() {
  // const [macros, setMacros] = useState(LATEX_MACROS);

  return (
    <Container fluid className="about-section"
      style = {{
        lineHeight: 2.2
      }}>
      <Container
        style = {{
          color: "black",
          backgroundColor: "white"
        }}>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <p><b> [Game Development, Performance Optimization, 3D Simulation] </b></p>
          <h1> Unity Crowd AI </h1>
        </Row>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={8}
            style={{
              justifyContent: "left",
              textAlign: "left",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h2> Goals </h2>
            <ul>
              <li> Designed a novel method for a group of NPC AI agents to automatically organize themselves in user-specified formations (GroupFormation) </li>
              <li> Drastically boosted the performance of 2 computationally expensive crowd AI in Unity using C# optimization techniques </li>
            </ul>
            <br/>
            <h2> Highlights </h2>
            <ul>
              <li> Improved the frame rate per second (FPS) of an implementation of boid with 5000 NavMeshAgents from 15 FPS to 100 FPS using Unity coroutines, or main thread time slicing </li>
              <li> Improved the FPS of GroupFormation with 10 groups consisting of 6 NavMeshAgents per group from 3 FPS to 100 FPS using the Unity parallel job system, or multithreading </li>
            </ul>
            <br/>
            <h2> Methodology </h2>
            <p/>
            <ul>
              <h3> GroupFormation </h3>
              <p> ...which will be referred to as GroupFormation in this article. </p>
              <p> random initial positions; lattice formation </p>
            </ul>
            <br/>
            <h2> Results </h2>
            <figure>
              <img src={boid_unoptimized_performance} alt="Performance of unoptimized 5000 boid agents" style={{width:"100%"}}/>
              <figcaption style={{textAlign:"center"}}> Time series data of the FPS of unoptimized 5000 boid agents. The average is seen to be less than 15 FPS. </figcaption>
            </figure>
            <figure>
              <img src={boid_optimized_performance} alt="Performance of optimized 5000 boid agents" style={{width:"100%"}}/>
              <figcaption style={{textAlign:"center"}}> Time series data of the FPS of optimized 5000 boid agents. The average framerate is seen to be  100 FPS. </figcaption>
            </figure>
            <figure>
              <img src={family_unoptimized_performance} alt="Performance of unoptimized 10 groups of 5 NavMeshAgents" style={{width:"100%"}}/>
              <figcaption style={{textAlign:"center"}}> Time series data of the FPS of unoptimized 10 groups of 5 NavMeshAgents. The average FPS is 3 FPS. </figcaption>
            </figure>
            <figure>
              <img src={family_optimized_performance} alt="Performance of optimized 10 groups of 5 NavMeshAgents" style={{width:"100%"}}/>
              <figcaption style={{textAlign:"center"}}> Time series data of the FPS of optimized 10 groups of 5 NavMeshAgents in FPS. The average FPS is 100 FPS. </figcaption>
            </figure>
          </Col>
          <Col
            md={2}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default UnityCrowdAI;
