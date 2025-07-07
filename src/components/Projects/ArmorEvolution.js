import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import 'katex/dist/katex.min.css';
import Latex from 'react-latex-next';
import Button from "react-bootstrap/Button";

import square from "../../Assets/Projects/armor_evolution/3x3.png"
import evolve from "../../Assets/Projects/armor_evolution/evolve.png"
import dynamics from "../../Assets/Projects/armor_evolution/dynamics.png"
import pdf from "../../Assets/Projects/armor_evolution/thesis_master_of_science_mioto_takahashi.pdf"

import { AiOutlineDownload } from "react-icons/ai";
import { EmbedPDF } from "@simplepdf/react-embed-pdf";
// import { Document, Page, pdfjs } from "react-pdf";
// import "react-pdf/dist/esm/Page/AnnotationLayer.css";
// pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

// const LATEX_MACROS = { "\\f": "#1f(#2)" };

function ArmorEvolution() {
  // const [macros, setMacros] = useState(LATEX_MACROS);

  return (
    <section>
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
            <p><b> [Agent-Based Modeling, Computational Biology, Evolution, Statistical Analysis, Simulation] </b></p>
            <h1> Effect Of Predator Armor Evolution On Predator-Prey Ecosystems </h1>
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
              <p>The following work was produced as the thesis for obtaining a Master of Science in Complex Systems and Data Science at University of Vermont on Spring 2025.</p>
              <p>The full paper is published on &nbsp;
                <a href="https://www.proquest.com/openview/ef33d739ac7138b54a9cac67132d0ab8/1?cbl=18750&diss=y&pq-origsite=gscholar" target="_blank">ProQuest</a>
              .</p>
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
                <li> Refined the prior understanding of population dynamics in predator-prey ecosystems by conducting computational biological research </li>
                <li> Discovered that evolution of defensive weaponry in predators generally reduces their time until extinction, by developing agent-based models of predator-prey ecosystems and evaluating them using Kolmogorov-Smirnov test and Mann-Whitney-Wilcoxon U-test </li>
                <li> Strengthened the findings by validating the results with prior field studies on defensive weaponry and population dynamics in biology </li>
              </ul>
              <br/>
              <h2> Motivation </h2>
              <ul>
                <li> Understanding the population dynamics of predator and prey species is important for human intervention in conservation efforts. </li>
                <li> Evolutionary adaptations of defensive and offensive weaponry in predators and prey, such as toxins and claws, heavily impact predator-prey population dynamics. </li>
                <li> While studies on the evolution of the predator-prey offense and defense arms-race have been conducted in prior research, the effect of such arms-race on the ecosystem is an ongoing problem. </li>
                <li> In particular, re-introduction of apex predators, a method of human intervention for conservation necessitates a thorough understanding of the effect of adaptation in defensive weaponry in predators on the population dynamics of the species in the ecosystem. </li>
              </ul>
              <br/>
              <h2> Research Question </h2>
              <p><b> In theory, could armor (defensive weaponry) evolution in predators lower the average evolutionary time until extinction (TUE) in different predator-prey ecosystems? </b></p>
              <br/>
              <h2> Methodology / Process </h2>
              <br/>
              <figure>
                <img src={square} alt="Predator-prey interaction" style={{width:"30%"}}/>
                <figcaption style={{textAlign: "left"}}>Red cells indicate predator positions. Blue cells indicate prey positions. Arrows indicate interaction.</figcaption>
              </figure>
              <ul>
                <li> Constructed discrete-space discrete-time agent-based models to simulate predator-prey ecosystems </li>
                <ul>
                  <li> Agents move based on 4 actions: forward movement, right turn, left turn, and no movement </li>
                  <ul>
                    <li> Predators are controlled using neural networks while prey are controlled by random number generators </li>
                  </ul>
                  <li> Prey are assumed to be potentially lethal to predators during predator-prey interactions. </li>
                  <ul>
                    <li> Predators contain a floating point value representing the degree of armor. </li>
                    <li> The armor value indicates the survival rate of predators.</li>
                  </ul>
                  <li> Reproduction of the species follow the Lotka-Volterra model </li>
                  <ul>
                    <li> For every successful predation attempt, or for every prey death, the predators are set to reproduce. </li>
                    <li> Prey are set to reproduce stochastically every timestep. </li>
                  </ul>
                  <li> Utilized evolutionary algorithm to simulate evolution of the individual agents </li>
                  <ul>
                    <li> For every predator reproduction, the neural network weights and the armor value of the child are mutated </li>
                  </ul>
                </ul>
              </ul>
              <figure>
                <img src={evolve} alt="Predator mutation" style={{width:"100%"}}/>
                <figcaption style={{textAlign: "left"}}>Diagram of predator agent successfully predating on the prey agent and reproducing. Black boxes indicate the presence of armor. The child is seen to have evolved armor.</figcaption>
              </figure>
              <ul>
                <li> Conducted experiments with modifications to the aforementioned agent-based model (Vanilla) in parallel </li>
                <ul>
                  <li> Prey agents are controlled using neural networks (PreyNN) </li>
                  <li> Prey agents contain armor values that can be evolved (PreyAE) </li>
                  <li> Armor is directional and is dependent on the direction of the predator-prey interactions (Directional) </li>
                  <li> Predator can attack each other (PvP) </li>
                </ul>
                <li> Compared the predator TUE between ecosystems with predator armor evolution (AE) and those without predator armor evolution (NAE) </li>
                <ul>
                  <li> Evaluated the normalcy of the sample distributions using the Shapiro-Wilk test and the Kolmogorov-Smirnov test </li>
                  <li> Compared the predator TUE between ecosystems with predator AE and NAE based on the normalcy of the distributions </li>
                  <ul>
                    <li> T-test is used if predator AE and NAE distributions are both normal </li>
                    <li> Otherwise the Kolmogorov-Smirnov test and the Mann-Whitney-Wilcoxon-U-test are used </li>
                  </ul>
                </ul>
              </ul>
              <br/>
              <h2> Results </h2>
              <br/>
              <figure>
                <img src={dynamics} alt="Predator-prey population dynamics" style={{width:"100%"}}/>
                <figcaption style={{textAlign: "left"}}>Population dynamics of the ecosystems with the highest predator AE for each experiment.</figcaption>
              </figure>
              <ul>
                <li> Predator AE is found to lower the predator TUE for every scenario except when prey have AE. Additionally, having predators attack each other lengthen their TUE. </li>
                <ul>
                  <li> Align with how apex predators self-regulate their reproduction to prevent prey over-exploitation (Wallach et al., 2015). </li>
                </ul>
                <li> Predator AE is found to lengthen the predator TUE when prey have AE. </li>
                <ul>
                  <li> Aligns with observations made in garter snakes-newts ecosystems (Hanifin et al., 2008) and lizards-black widow ecosystems (Thill et al., 2022), and ciliate-bacteria ecosystems (Cairns et al., 2020) </li>
                </ul>
              </ul>
              <br/>
              <h2> References </h2>
              <ul>
                <li> Cairns, J., Moerman, F., Fronhofer, E. A., Altermatt, F., & Hiltunen, T. (2020). Evolution in interacting species alters predator life-history traits, behaviour and morphology in experimental microbial communities. Proceedings of the Royal Society B, 287(1928), 20200652. </li>
                <li> Hanifin, Charles T., Edmund D. Brodie, and Edmund D. Brodie. 2008. “Phenotypic Mismatches Reveal Escape from Arms-Race Coevolution.” PLoS Biology 6 (3): 0471–82. https://doi.org/10.1371/journal.pbio.0060060 </li>
                <li> Thill, V. L., Moniz, H. A., Teglas, M. B., Wasley, M. J., & Feldman, C. R. (2022). “Preying dangerously: black widow spider venom resistance in sympatric lizards." Royal Society Open Science, 9(10), 221012. </li>
                <li> Wallach, Arian D., Ido Izhaki, Judith D. Toms, William J. Ripple, and Uri Shanas. 2015. “What Is an Apex Predator?” Oikos 124 (11): 1453–61. https://doi.org/10.1111/oik.01977. </li>
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
          <Row className="resume">
            <Col md={10} style={{justifyContent: "left"}}>
              <Button
                variant="primary"
                href={pdf}
                target="_blank"
                style={{ maxWidth: "250px" }}
              >
                <AiOutlineDownload />
                &nbsp;Download Paper
              </Button>
              <EmbedPDF
                companyIdentifier="react-viewer"
                mode="inline"
                style={{
                  position: "relative",
                  width: "100%",
                  height: 800
                }}
                documentURL={pdf}
              />
            </Col>
          </Row>
        </Container>
      </Container>
    </section>
  );
}

export default ArmorEvolution;
