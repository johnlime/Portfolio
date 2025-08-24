import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import 'katex/dist/katex.min.css';
import Latex from 'react-latex-next';

import boid_unoptimized from "../../Assets/Projects/unity_crowd_ai/gif/boid-unoptimized.gif";
import boid_unoptimized_performance from "../../Assets/Projects/unity_crowd_ai/png/boid-unoptimized.png";
import boid_optimized from "../../Assets/Projects/unity_crowd_ai/gif/boid-optimized.gif";
import boid_optimized_performance from "../../Assets/Projects/unity_crowd_ai/png/boid-optimized.png";
import family_unoptimized from "../../Assets/Projects/unity_crowd_ai/gif/family-unoptimized.gif";
import family_unoptimized_performance from "../../Assets/Projects/unity_crowd_ai/png/family-unoptimized.png";
import family_optimized from "../../Assets/Projects/unity_crowd_ai/gif/family-optimized.gif";
import family_optimized_performance from "../../Assets/Projects/unity_crowd_ai/png/family-optimized.png";
import trike_boid from "../../Assets/Projects/unity_crowd_ai/gif/trike-boid.gif";

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
          <p><b> [Game Development, Performance Optimization, 3D Simulation, JSON, glTF] </b></p>
          <h1> Unity Crowd AI </h1>
        </Row>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={5}
            style={{
              justifyContent: "left",
              textAlign: "left",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <figure>
              <img src={boid_optimized} alt="Demo of optimized 5000 boid NavMeshAgents" style={{width:"100%"}}/>
              <figcaption style={{textAlign:"center"}}> Demonstration of optimized 5000 boid NavMeshAgents </figcaption>
            </figure>
          </Col>
          <Col
            md={5}
            style={{
              justifyContent: "left",
              textAlign: "left",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
          <figure>
            <img src={family_optimized} alt="Demo of optimized 50 groups of 5 NavMeshAgents" style={{width:"100%"}}/>
            <figcaption style={{textAlign:"center"}}> Demonstration of optimized 50 groups of 5 NavMeshAgents </figcaption>
          </figure>
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
            <figure>
              <img src={trike_boid} alt="Demo of a herd of 300 triceratops controlled by boid" style={{width:"100%"}}/>
              <figcaption style={{textAlign:"center"}}> Demonstration of a herd of 300 triceratops controlled by boid </figcaption>
            </figure>
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
            <h2> Goals </h2>
            <ul>
              <li> Proposed a novel method for utilizing Kohonen’s self organizing map (KSOM) for enabling a group of NPC AI NavMeshAgents to automatically organize themselves in user-specified formations </li>
              <li> Drastically boosted the performance of 2 computationally expensive crowd AI in Unity using C# optimization techniques </li>
              <li> Efficiently customized an imported 3D model and animation asset by analyzing a (JSON-formatted) glTF file using Python and a network analysis software NetworkX </li>
            </ul>
            <br/>
            <h2> Highlights </h2>
            <ul>
              <li> Improved the frame rate per second (FPS) of an implementation of boid with 5000 NavMeshAgents from  15 FPS to 100 FPS using Unity coroutines, or main thread time slicing </li>
              <li> Improved the FPS of KSOM with 50 groups consisting of 6 NavMeshAgents per group from 3 FPS to 100 FPS using the Unity parallel job system, or multithreading </li>
              <li> Analyzed the inner tree structure of a (JSON-formatted) glTF file containing multiple 3D models using NetworkX  </li>
              <li> Separated the 3 models and their animations into 3 separate self-contained glTF files using Python </li>
            </ul>
            <br/>
            <h2> glTF Analysis and Separation </h2>
            <p> The details for the analysis and separation of the glTF file is on <a href="Portfolio#/gltf-json-analysis"> this page </a>. </p>
            <br/>
            <h2> Background and Motivation </h2>
            <p/>
            <ul>
              <h3> Boid Algorithm </h3>
              <p> Boid (Reynolds, 1987, 2025) is an algorithm for simulating herding behavior of a group of agents, akin to flocks of birds and schools of fish. In the context of game development, this can be used to have NPCs exhibit complex group behaviors. Prior application in games was in the behavior for Boids or Flyers in the game <i>Half Life</i> (1998) (Alaliyat et al., 2014) among other examples (Reynolds, 2025). Boid has additionally been utilized in research for modeling swarm dynamics in fields including computer science (Husselmann and Hawick, 2011; Hénard et al., 2023), sociology (Macy and Willer, 2002), and urban planning (Amerudin, 2024). </p>
              <p> Challenges arise in optimizing the performance of simulations that utilize boid. The algorithm consists of 3 processes, alignment, cohesion, and separation (Reynolds, 1987, 2025), each requiring each agent to examine the positions or velocities of the surrounding agents. Given that <Latex> {"$n$"} </Latex> is the number of boid agents, the time complexity is <Latex> {"$O(n^n)$"} </Latex>, making it prone to significant performance drops during scaling. </p>
              <h3> AI for Group Formations </h3>
              <p> Developing convincing AI for groups of NPCs, such as military squads that require them to move around in formations, can be useful in genres such as tactical shooters, such as the <i>SWAT</i> series (1995-2005) and <i>Ready or Not</i> (2024), and real-time strategy games, such as the <i>Age of Empires</i> series (1997-2021). However currently there are no streamlined processes to enable such groups to move around the NavMesh while maintaining specific user-defined formations, and it remains to be an ongoing problem in both research and the industry (Kim, 2020; Zhang, 2015).  </p>
              <p> The simplest method of implementing such systems is to have each individual agent communicate its positions to other agents in the group. However, this can result in the time complexity of <Latex>{"$O(n^n)$"}</Latex>, where <Latex>{"$n$"}</Latex> is the number of agent in the group. </p>
            </ul>
            <br/>
            <h2> Methodology </h2>
            <p/>
            <ul>
              <h3> Boid Implementation </h3>
              <p> The same algorithm as such described by Reynolds was utilized. For optimization, for each NavMeshAgent, the process of determining the neighboring NavMeshAgents, retrieving their positions and velocities, and calculating the movement direction based on the boid algorithm, is conducted over multiple frames using main thread time slicing, or coroutines in Unity's terms. Additionally, updating the destinations for the NavMeshAgents based on the aforementioned calculation is done using coroutines. </p>
              <h3> Kohonen's Self Organizing Map Overview </h3>
              <p> This project utilizes the unsupervised learning algorithm Kohonen's self-organizing map (KSOM) (Kohonen, 1982) to decrease the computational load for the group formation behavior implementation. KSOM is able to distribute a network of neurons, each defined by a <Latex>{"$d$"}</Latex>-dimensional weight vector, accross an <Latex>{"$d$"}</Latex>-dimensional observation space. For example, if the network is in a lattice structure and the observation space is a square in an x-y coordinate, the neurons' weights are spread out accross the square while maintaining the lattice structure. </p>
              <p> Initially, the weight vectors for each neuron <Latex>{"$w_i$"}</Latex>, where <Latex>{"$i$"}</Latex> is the index of the neuron, is randomized. A random initial position <Latex>{"$x_t$"}</Latex> is sampled from the observation space, and the neuron <Latex>{"$i^*$"}</Latex> that contains the weights that are closest in Euclidean distance is selected. </p>
              <p> <Latex>{"$i^* = \\arg \\max_i (w_i - x_t)^2$"}</Latex> </p>
              <p> Additionally, the weights for the neurons neighboring <Latex>{"$i^*$"}</Latex> in the neural network are updated as </p>
              <p> <Latex>{"$w_{i^k}(t + 1) = \\alpha \\cdot h(k) \\left( x_t - w_{i^k}(t) \\right) + w_{i^k}(t)$"}</Latex>, </p>
              <p> where <Latex>{"$t \\in \\mathbb{N}$"}</Latex> indicates the number of updates, <Latex>{"$\\alpha \\in \\mathbb{R} \\wedge \\alpha \\in [0, 1]$"}</Latex> indicates the learning rate, and <Latex>{"$i^k$"}</Latex> indicates the index of the <Latex>{"$k$"}</Latex>-th neighboring neuron of <Latex>{"$i^*$"}</Latex>. Note that <Latex>{"$i^k = i^*$"}</Latex> when <Latex>{"$k = 0$"}</Latex>. </p>
              <p> <Latex>{"$h(k)$"}</Latex> is the neighborhood function, which reduces the learning rate of the weights as <Latex>{"$k$"}</Latex> increases. For simplicity, we set <Latex>{"$\\alpha = 1$"}</Latex> and <Latex>{"$h(k) = \\gamma^k$"}</Latex>, where <Latex>{"$\\gamma \\in \\mathbb{R} \\wedge \\gamma \\in [0, 1]$"}</Latex> </p>
              <h3> KSOM in Game Development </h3>
              <p> To my knowledge, KSOM has not been utilized in the context of NPC AI development in games. The neurons can be interpreted as the NavMeshAgents and the weight vectors can be interpreted as the positions of the NavMeshAgents. KSOM would enable the NavMeshAgents to distribute themselves across a user-defined area on the NavMesh in a user-defined formation. </p>
              <p> Each weight update, or the process starting from sampling from the observation space to altering the weight values of both the selected and neighboring neurons, can be grouped up as a job. The performance for the execution of multiple of these jobs can be reduced using multithreading. </p>
              <p> Additionally, similarly to the boid implementation, the destinations for the NavMeshAgents are updated using coroutines. </p>
            </ul>
            <br/>
            <h2> Experiment Settings </h2>
            <p> Both the optimized version, which utilizes coroutines or multithreading, and unoptimized versions of the algorithms were simulated, and their frames per second (FPS) were compared. </p>
            <p> For the boid experiment, 5000 NavMeshAgents with capsule colliders are spawned in a 2D NavMesh. For optimization, the movement directions based on the boid algorithm for 10 NavMeshAgents are calculated per frame, and the destinations for 10 NavMeshAgents are updated per frame. </p>
            <p> For the KSOM group formation behavior experiment, 9 NavMeshAgents were structured to be in a 3x3 lattice. The neighboring agents with the distance of 2 edges from the selected neuron were calculated per update instance. The destinations for all agents were calculated 16 times every frame in the unoptimized version and every 5 frames in the optimized version. Hyperparameters were set as <Latex>{"$\\gamma = 0.8$"}</Latex>. 16 threads were utilized for the KSOM calculations. </p>
            <br/>
            <h2> Results </h2>
            <p/>
            <p> The results are as below. The optimized algorithms performed significantly better than the unoptimized alternatives. Additionally, group formation behaviors were successfully exhibited in the optimized version of the KSOM algorithm, correctly showing the lattice structure as described before. </p>
            <figure>
              <img src={boid_unoptimized} alt="Demo of unoptimized 5000 boid NavMeshAgents" style={{width:"100%"}}/>
              <figcaption style={{textAlign:"center"}}> Demonstration of unoptimized 5000 boid NavMeshAgents </figcaption>
            </figure>
            <figure>
              <img src={boid_unoptimized_performance} alt="Performance of unoptimized 5000 boid NavMeshAgents" style={{width:"100%"}}/>
              <figcaption style={{textAlign:"center"}}> Time series data of the FPS of unoptimized 5000 boid NavMeshAgents. The average is seen to be less than 15 FPS. </figcaption>
            </figure>
            <figure>
              <img src={boid_optimized} alt="Demo of optimized 5000 boid NavMeshAgents" style={{width:"100%"}}/>
              <figcaption style={{textAlign:"center"}}> Demonstration of optimized 5000 boid NavMeshAgents </figcaption>
            </figure>
            <figure>
              <img src={boid_optimized_performance} alt="Performance of optimized 5000 boid NavMeshAgents" style={{width:"100%"}}/>
              <figcaption style={{textAlign:"center"}}> Time series data of the FPS of optimized 5000 boid NavMeshAgents. The average framerate is seen to be  100 FPS. </figcaption>
            </figure>
            <figure>
              <img src={family_unoptimized} alt="Demo of unoptimized 50 groups of 5 NavMeshAgents" style={{width:"100%"}}/>
              <figcaption style={{textAlign:"center"}}> Demonstration of unoptimized 50 groups of 5 NavMeshAgents </figcaption>
            </figure>
            <figure>
              <img src={family_unoptimized_performance} alt="Performance of unoptimized 50 groups of 5 NavMeshAgents" style={{width:"100%"}}/>
              <figcaption style={{textAlign:"center"}}> Time series data of the FPS of unoptimized 50 groups of 5 NavMeshAgents. The average FPS is 3 FPS. </figcaption>
            </figure>
            <figure>
              <img src={family_optimized} alt="Demo of optimized 50 groups of 5 NavMeshAgents" style={{width:"100%"}}/>
              <figcaption style={{textAlign:"center"}}> Demonstration of optimized 50 groups of 5 NavMeshAgents </figcaption>
            </figure>
            <figure>
              <img src={family_optimized_performance} alt="Performance of optimized 50 groups of 5 NavMeshAgents" style={{width:"100%"}}/>
              <figcaption style={{textAlign:"center"}}> Time series data of the FPS of optimized 50 groups of 5 NavMeshAgents in FPS. The average FPS is 100 FPS. </figcaption>
            </figure>
            <br/>
            <h2> Imported Asset </h2>
            <p> Kreepetka_pangea. (2025) Triceratops (Adolt, Sub, Juv). <i> Sketchfab </i>. </p>
            <p> <a href="https://sketchfab.com/3d-models/triceratops-adolt-subjuv-10a9a22e05094cf391da7774cd5275da"> https://sketchfab.com/3d-models/triceratops-adolt-subjuv-10a9a22e05094cf391da7774cd5275da </a> </p>
            <br/>
            <h2> References </h2>
            <ul>
              <p> Alaliyat, Saleh, Harald Yndestad, and Filippo Sanfilippo. (2014) Optimisation Of Boids Swarm Model Based On Genetic Algorithm And Particle Swarm Optimisation Algorithm (Comparative Study). <i>ECMS</i>. </p>
              <p> Amerudin, S. (2024) Boids Algorithm for Simulating Crowd Movement in Urban Planning and Disaster Management. <i>People@UTM</i>. Universiti Teknologi Malaysia. https://people.utm.my/shahabuddin/?p=7474. [Accessed July 9, 2025]</p>
              <p> Hénard, A., Rivière, J., Peillard, E., Kubicki, S., & Coppin, G. (2023). A unifying method-based classification of robot swarm spatial self-organisation behaviours. <i>Adaptive Behavior</i>, 31(6), 577-599. </p>
              <p> Husselmann, A. V., & Hawick, K. A. (2011). Spatial NavMeshAgent-based modelling and simulations-a review. <i>CSTN Computational Science Technical Note</i>, 153. </p>
              <p> Kim, J.-H., Lee, J., & Kim, S.-J. (2020). Navigating Non-Playable Characters Based on User Trajectories with Accumulation Map and Path Similarity. <i>Symmetry</i>, 12(10), 1592. https://doi.org/10.3390/sym12101592 </p>
              <p> Kohonen, T. (1982) Self-organized formation of topologically correct feature maps. <i>Biol. Cybern.</i> 43, 59–69. https://doi.org/10.1007/BF00337288 </p>
              <p> Macy, M. W., & Willer, R. (2002). From factors to actors: Computational sociology and NavMeshAgent-based modeling. <i>Annual review of sociology</i>, 28(1), 143-166. </p>
              <p> Reynolds, C. W. (1987) Flocks, Herds, and Schools: A Distributed Behavioral Model, in <i>Computer Graphics</i>, 21(4) (SIGGRAPH '87 Conference Proceedings) pages 25-34. </p>
              <p> Reynolds, C. W. (2025) Boids: Background and Update. https://www.red3d.com/cwr/boids/. [Accessed July 8, 2025]. </p>
              <p> Zhang, P., Liu, H. & Ding, Yh. (2015) Crowd simulation based on constrained and controlled group formation. <i>Vis Comput</i> <b>31</b>, 5–18. https://doi.org/10.1007/s00371-013-0900-7 </p>
            </ul>
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
