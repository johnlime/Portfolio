import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import 'katex/dist/katex.min.css';
import Latex from 'react-latex-next';

import trike_boid from "../../Assets/Projects/unity_crowd_ai/gif/trike-boid.gif";
import triceratops_original from "../../Assets/Projects/unity_crowd_ai/png/triceratops-original.png"
import gltf_node_example from "../../Assets/Projects/unity_crowd_ai/png/gltf_node_example.png"
import dag_nodes from "../../Assets/Projects/unity_crowd_ai/png/dag_nodes.png"
import dag_nodes_branch from "../../Assets/Projects/unity_crowd_ai/png/dag_nodes_branch.png"
import triceratops_sub from "../../Assets/Projects/unity_crowd_ai/png/triceratops-sub.png"

// const LATEX_MACROS = { "\\f": "#1f(#2)" };

function GLTFAnalysis() {
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
          <h1> <a href="Portfolio#/unity-crowd-ai"> Unity Crowd AI </a> - glTF Analysis and Separation </h1>
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
              <figcaption style={{textAlign:"center"}}> Demonstration of a herd of 300 triceratops controlled by boid. The model used for each character was extracted from a glTF file containing 2 other models. </figcaption>
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
            <h2> Highlights </h2>
            <ul>
              <li> Efficiently customized an imported 3D model and animation asset by analyzing a (JSON-formatted) glTF file using Python and a network analysis software NetworkX </li>
              <ul>
                <li> Analyzed the inner tree structure of a (JSON-formatted) glTF file containing multiple 3D models using NetworkX  </li>
                <li> Separated the 3 models and their animations into 3 separate self-contained glTF files using Python </li>
              </ul>
            </ul>
            <br/>
            <h2> Background and Motivation </h2>
            <p> <a href="https://www.khronos.org/gltf/"> glTF </a> is a file format for storing 3D assets as a JSON file. Since its release in 2015, it has been increasingly utilized by 3D artists as an alternative to other file formats, such as FBX and OBJ, because of its ability to store a variety of data, such as models, textures, materials, and animations, in 1 file, making it easier to import and export from one software to another. </p>
            <p> While glTF files are capable of storing multiple 3D meshes into 1 file, there are instances where separating them into individual files can be useful. For example, one may only want to use one of the models that is included in the provided asset file. In this project, I analyzed a glTF file containing 3 models and used such analysis to separate them into 3 individual files. </p>
            <br/>
            <h2> Methodology </h2>
            <p> I utilized a <a href="https://sketchfab.com/3d-models/triceratops-adolt-subjuv-10a9a22e05094cf391da7774cd5275da"> 3D triceratops asset provided by Kreepetka_pangea from Sketchfab </a> containing 3 separate models. </p>
            <figure>
              <img src={triceratops_original} alt="3D triceratops asset by Kreepetka_pangea" style={{width:"100%"}}/>
              <figcaption style={{textAlign: "center"}}> 3D triceratops asset by Kreepetka_pangea. Contains 3 different models depicting different sizes of triceratops </figcaption>
            </figure>
            <br/>
            <p> glTF files separate assets into a hierarchy of compartments, or more specifically JSON arrays, each of whose elements, or JSON objects, referencing each other as seen in the <a href="https://registry.khronos.org/glTF/specs/2.0/glTF-2.0.html#concepts"> official documentation </a>. For example, the highest of the hierarchy that contains multiple objects, the "node" array can contain indices of other objects that are assigned as their children, as seen in the image below. </p>
            <br/>
            <figure>
              <img src={gltf_node_example} alt="An example of a node in the 3D triceratops asset" style={{width:"100%"}}/>
              <figcaption style={{textAlign: "center"}}> An example of a node in the 3D triceratops asset. This particular node references 3 other different nodes </figcaption>
            </figure>
            <br/>
            <p> With each "node" being in parent-child relationships, a collection of such "nodes" can be interpreted as a directed network, or more specifically a directed acyclic graph (DAG). To better understand the structure of the data, I utilized Python's <a href="https://networkx.org/"> NetworkX </a> library to visualize the DAG as below. </p>
            <figure>
              <img src={dag_nodes} alt="A NetworkX visualization of the DAG of glTF nodes" style={{width:"100%"}}/>
              <figcaption style={{textAlign: "center"}}> The DAG of glTF nodes for the triceratops asset as visualized using NetworkX and the Kamada Kawai algorithm. The numbers provided per node indicate the index of the node in the glTF "node" array. The directed edges indicate the parent-child relationship of the nodes. </figcaption>
            </figure>
            <br/>
            <p> Looking at the visualization, it is clear that the 3 triceratops models are separated starting from the '2' node. Using this insight, the indices of nodes representing each model can be determined, and a separate DAG per model can be constructed. </p>
            <figure>
              <img src={dag_nodes_branch} alt="An example of a DAG of a subset of glTF nodes representing 1 model" style={{width:"100%"}}/>
              <figcaption style={{textAlign: "center"}}> An example of a DAG of a subset of glTF nodes representing 1 model visualized using the Kamada Kawai algorithm. The numbers provided per node indicate the index of the node in the glTF "node" array. The directed edges indicate the parent-child relationship of the nodes. </figcaption>
            </figure>
            <br/>
            <p> With the indices of "node" objects determined for each model, the JSON objects in the other hierarchy that reference the "nodes" can be determined. </p>
            <br/>
            <h2> Result </h2>
            <p> An example of the 3 separated models of the triceratops asset is as below. The other 2 models are not shown here, since it was apparent that they were merely resized versions of the same model. </p>
            <figure>
              <img src={triceratops_sub} alt="A separated 3D triceratops asset by Kreepetka_pangea" style={{width:"100%"}}/>
              <figcaption style={{textAlign: "center"}}> A triceratops model separated from the original asset using JSON manipulation </figcaption>
            </figure>
            <br/>
            The separated triceratops model was utilized to create a demonstration of a triceratops herd using the boid algorithm.
            <figure>
              <img src={trike_boid} alt="Demo of a herd of 300 triceratops controlled by boid" style={{width:"100%"}}/>
              <figcaption style={{textAlign:"center"}}> Demonstration of a herd of 300 triceratops controlled by boid. The model used for each character was extracted from a glTF file containing 2 other models. </figcaption>
            </figure>
            <br/>
            <h2> Imported Asset </h2>
            <p> Kreepetka_pangea. (2025) Triceratops (Adolt, Sub, Juv). <i> Sketchfab </i>. </p> <a href="https://sketchfab.com/3d-models/triceratops-adolt-subjuv-10a9a22e05094cf391da7774cd5275da"> https://sketchfab.com/3d-models/triceratops-adolt-subjuv-10a9a22e05094cf391da7774cd5275da </a>
            <br/>
            <br/>
            <h2> References </h2>
            <ul>
              <p> glTF: The 3D Asset Delivery Format. The Khronos® 3D Formats Working Group. [Accessed August 24, 2025]. https://www.khronos.org/gltf/ </p>
              <p> "3. Concepts", glTF™ 2.0 Specification (2021). The Khronos® 3D Formats Working Group. [Accessed August 24, 2025]. https://registry.khronos.org/glTF/specs/2.0/glTF-2.0.html#concepts </p>
              <p> Kamada, T., & Kawai, S. (1989). An algorithm for drawing general undirected graphs. Information processing letters, 31(1), 7-15. </p>
              <p> NetworkX: Network Analysis in Python. [Accessed August 24, 2025]. https://www.networkx.org/ </p>
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

export default GLTFAnalysis;
