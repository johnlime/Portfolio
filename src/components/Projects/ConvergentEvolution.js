import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import 'katex/dist/katex.min.css';
import Latex from 'react-latex-next';

import pdf from "../../Assets/Projects/convergent_evolution/article.pdf";
import { AiOutlineDownload } from "react-icons/ai";
import { EmbedPDF } from "@simplepdf/react-embed-pdf";
// import { Document, Page, pdfjs } from "react-pdf";
// import "react-pdf/dist/esm/Page/AnnotationLayer.css";
// pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

// const LATEX_MACROS = { "\\f": "#1f(#2)" };

function ConvergentEvolution() {
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
          <p><b> [Bayesian statistics, Principal Component Analysis, Regression, Biology] </b></p>
          <h1> Bayesian Inference of Convergent Evolution between Ceratopsians and Extant Quadrupeds </h1>
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
            <p>The following work was produced for the Spring 2024 term of CSYS6990A Data Science 2 in the University of Vermont. The PDF of the full paper is attached.</p>
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
            <p> The detection and inference of the cause of convergence in anatomical features between phylogenetically distant taxa or clades is a topic of research in biology. </p>

            <p> Preliminary research have proposed hypotheses in the role of head-body proportions and head ornaments in ceratopsians and extant quadrupedal animals; however, whether there are signs of convergent evolution between the two clades is an open problem. </p>
            <p> The project’s objectives are to </p>
            <ul>
              <li> Evaluate whether there is convergent evolution in body proportions between the two groups using Bayesian inference </li>
              <li> Hypothesize the use of head ornaments in ceratopsians </li>
            </ul>
            <br/>
            <h2> Highlights </h2>
            <ul>
              <li> Data Imputation </li>
              <ul>
                <li> Utilized ensemble linear and quadratic regression models with 10-fold cross validation to impute data regarding skull length and femur circumference </li>
              </ul>
              <li> Feature Extraction and Dimensionality Reduction </li>
              <ul>
                <li> Utilized principal component analysis to summarize the 4 measurements to 3 dimensions </li>
              </ul>
              <li> Bayesian Inference </li>
              <ul>
                <li> Utilized Gibbs sampling to estimate the probability distribution of skull length, femur length, femur circumference, and humerus length across species of ceratopsians and extant quadrupedal mammals </li>
              </ul>
              <li> Statistical Significance and Confidence Interval </li>
              <ul>
                <li> 2 different metrics were used to evaluate the difference between the body proportions of the 2 clades to reduce the chance of p-hacking </li>
              </ul>
            </ul>
            <br/>

            <h2> Results </h2>

            <ul>
              <li> The log p-values for the null hypothesis, in which the mean of the distribution for the measurements for ceratopsians is in the distribution for the those of extant quadrupeds, is shown to have 95% statistical significance. </li>
              <li> The 95% confidence intervals of each distribution are shown to not overlap, indicating that the 2 datasets are in different distributions. </li>
            </ul>

            <h2> Discussion </h2>
            <p> The similarities in mean of head-body ratio between the ceratopsians and extant quadrupedal animals may indicate that the body size of a quadrupedal animal from both clades is affected by both its diet and the degree of thermoregulation its head is able to conduct. </p>

            <p> A significant difference in phenotypic variation between the 2 clades, as indicated by the lack of overlap in the confidence intervals, may be caused by the difference in the environments between the mesozoic and cenozoic era. </p>

            <h2> Datasets </h2>
            <ul>
              <li> Basal skull length, femur length, and humerus length for 55 ceratopsian taxa and 118 taxa of extinct dinosaurs, extant reptiles, and extant mammals  <br/> Collin S. Vanburen, Nicol ́as E. Campione, and David C. Evans. Head size, weaponry, and cervical adaptation: Testing craniocervical evolutionary hypotheses in Ceratopsia. Evolution, 69(7):1728–1744, 2015. </li>
              <li> Skull length, head-body length, or total body length, and body mass for 404 extant mammalian taxa <br/> Russell K. Engelman. Author Correction: Occipital condyle width (OCW) is a highly accurate predictor of body mass in therian mammals (BMC Biology, (2022), 20, 1, (37), 10.1186/s12915-021-01224-9). BMC Biology, 20(1):1–44, 2022. </li>
              <li> Femur length, femur circumference, humerus length, humerus circumference, and body mass for 241 extant reptilian and mammalian quadrupedal taxa <br/> Nicol ́as E. Campione and David C. Evans. A universal scaling relationship between body mass and proximal limb bone dimensions in quadrupedal terrestrial tetrapods. BMC Biology, 10, 2012. </li>
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
  );
}

export default ConvergentEvolution;