import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import 'katex/dist/katex.min.css';
import Latex from 'react-latex-next';

import graph from "../../Assets/Projects/spring_creatures/graph.jpg";
import demo from "../../Assets/Projects/spring_creatures/demo.gif";
import square from "../../Assets/Projects/spring_creatures/square.gif";

// const LATEX_MACROS = { "\\f": "#1f(#2)" };

function SpringCreatures() {
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
          <p><b> [AI, Physics Simulation, Optimization, Procedural Generation] </b></p>
          <h1> Spring Creatures </h1>
        </Row>
        <Row
          style={{
            justifyContent: "center",
            textAlign: "left",
            padding: "10px",
            lineHeight: 1.5
          }}
        >
          <Col md={10} style={{justifyContent: "left"}}>
            <p>The following work was produced for the Fall 2022 term of CS352 Evolutionary Computation in the University of Vermont.</p>
             <p>Collaborator:</p>
              <p>marszzibros: https://github.com/marszzibros (Integration of NEAT-Py in the project.)</p>
            <p>Github:</p>
              <p>https://github.com/johnlime/spring_creatures_experiment</p>
          </Col>
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
            <h2> Overview </h2>
            <ul>
              <li> Formulated and implemented a novel system capable of procedurally generating structurally complex physics-simulated robots with muscles and limbs </li>
              <li> Demonstrated the effectiveness of the system by constructing a robot that can conduct forward locomotion in a physics simulation using NEAT, a neural network evolutionary algorithm </li>
            </ul>
            <br/>
            <h2> Highlights </h2>
            <ul>
              <li> Soft Body Emulation </li>
              <ul>
                <li> Succeeded in emulating elastic materials in a rigid body physics simulator using a combination of revolute joints and prismatic joints </li>
                <li> Allowed oscillatory moments of limbs </li>
              </ul>
              <li> Neural Network Evolutionary Algorithm </li>
              <ul>
                <li> Developed morphology of a simulated robot, that can successfully effectively move along the x-axis, by utilizing the NEAT algorithm </li>
              </ul>
              <li> PyBox2D </li>
              <ul>
                <li> Python wrapping of a C++ library used to simulate physics </li>
              </ul>
              <li> PyGame </li>
              <ul>
                <li> Python game engine used for rendering simulation </li>
              </ul>
            </ul>

            <br/>
            <h2> Methodology </h2>
            <p>PyBox2D is used for the physics simulations. Gravity is removed for less complexity. Linear damping can be used to simulate a crude approximation of fluid dynamics. </p>

            <p>The virtual creatures are depicted using rigid bodies, revolute joints, and springs. Each spring is composed of a distance joint and a prismatic joint to enable control over material while having damping properties and a resting position, resulting in a soft-body-like material. Each spring is set to oscillate in a sine wave.</p>

            <p> The morphology of each virtual creature is procedurally generated, starting from a square of width 5 as the initial base of the creature. A ruleset, defined by a neural network consisting of 2 input neurons and 5 output neurons, dictates how a new limb grows from the perimeter of each body of the morphology. 10 equally separated points from each edge of the body are defined, and their locations are inputted into the neural network ruleset, allowing limb growth from the perimeter of the bodies. This process is recursively executed per newly generated body limb to form a full morphology for the virtual creature. </p>

            <p> The 2 input neurons are 2 floating-point values indicating the location of the stem of the new potential limb. The 5 output neurons set the specifications for the new limb. </p>
            <ul>
              <li> Binary value of whether or not to generate a new limb stemming from the body </li>
              <li> Floating-point angle of the joint </li>
              <li> Floating-point distance from the stem of the joint to the new body to be generated </li>
              <li> 2-dimensional floating-point of width and height of the new body </li>
            </ul>

            <figure>
              <img src={graph} alt="Diagram of procedural generation for creature morphology" style={{width:"100%"}}/>
              <figcaption style={{textAlign:"center"}}> Diagram of procedural generation for creature morphology </figcaption>
            </figure>

            <p> If a generated spring-prismatic joint collides with another body or joint, it merges with them. This mechanism should make complex structures, such as muscle-like mechanism over 2 bodies and a revolute joint. </p>

            <p> The followiing is a demonstration of a procedurally generated creature. </p>

            <figure>
              <img src={demo} alt="Demonstration of a procedurally generated creature" style={{width:"100%"}}/>
              <figcaption style={{textAlign:"center"}}> Demonstration of a procedurally generated creature </figcaption>
            </figure>

            <p> NEAT algorithm was used to search for the configuration of the neural network that would enable the generated morphology to conduct locomotion alongside the x-axis the best. </p>

            <p> The locomotion task is defined as a summation of rewards <Latex> $r_t$ </Latex> generated every timestep <Latex> $t$ </Latex>. <Latex> $x_t$ </Latex> and <Latex> $y_t$ </Latex> indicate the location of the initial base body of the creature.
            <br/>
            <br/>
            <Latex>{"$r_t = sign(x_t - x_{t-1}) (x_t - x_{t-1})^2 - (y_t - y_{t-1})^2$"}
            </Latex>
            <br/>
            <br/>
            <Latex> {"$sign(): \\mathbb{R} \\rightarrow \\{1, -1\\}$"} </Latex> outputs 1 if the value is positive and -1 if the value is negative. </p>

            <h2> Experiment </h2>
            <p> 400 generations of NEAT were conducted, with the size of the population set as 250 and the mutation rate set to 0.8. The NEAT network adopted a feed-forward network, and its genomes were connected partially with a probability of 0.5. The probability that mutation adds a connection between existing nodes was 0.2, and the probability that it deletes a connection was 0.2. The activation function was tanh. Moreover, we set the chance that the mutation will change the bias of a node as 0.7, and this bias can range from -30 to 30. The maximum value of the weight in NEAT was 30, and the minimum was -30. The probability that mutations changes the weight of the network was 0.8. The elitism of 2 individuals is implemented. </p>

            <h2> Result </h2>
            <p> The NEAT algorithm was successfully able to generate that successfully propels itself forward along the x-axis. </p>

            <figure>
              <img src={square} alt="Resulting forward-locomoting creature" style={{width:"100%"}}/>
              <figcaption style={{textAlign:"center"}}> Resulting forward-locomoting creature </figcaption>
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

export default SpringCreatures;
