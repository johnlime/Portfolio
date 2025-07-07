import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import 'katex/dist/katex.min.css';
import Latex from 'react-latex-next';
import scatter_baseline from "../../Assets/Projects/lv_fitting/scatter_baseline.gif"
import both from "../../Assets/Projects/lv_fitting/both.png";
import hyperbolic from "../../Assets/Projects/lv_fitting/hyperbolic.png";

// const LATEX_MACROS = { "\\f": "#1f(#2)" };

function LVFitting() {
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
          <p><b> [Mathematical Modeling, Regression, Ecology] </b></p>
          <h1> Fitting the Population Dynamics of Predator-Prey Ecosystem on the Lotka-Volterra Model </h1>
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
            <p>The following work was produced for the Fall 2022 term of CS302 Modeling Complex Systems in the University of Vermont. Further edits were made afterwards to refine the results. 1 other collaborator was involved.</p>
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
            <h2><b> Highlights </b></h2> <p/>
            <ul>
              <h3> Goal </h3>
              <ul>
                <li> Forecasted the population dynamics of species in predator-prey ecosystems, which were simulated using agent-based models, using the LV model </li>
                <li> Proposed a modification to the Lotka-Volterra (LV) model, a mathematical model of population dynamics of predator-prey ecosystems, that exceeded the original algorithm in prediction accuracy </li>
              </ul>
              <h3> Approach </h3>
              <ul>
                <li> Developed a modified LV model that includes a quadratic term accounting for the population dynamics </li>
                <li> Compared the prediction accuracy of the LV model and the modified model </li>
              </ul>
              <h3> Data Fitting and Prediction Process </h3>
              <ul>
                <li> Agent-Based Modeling </li>
                <ul>
                  <li> Modeled a discrete-time discrete-space agent-based spatial model of a predator-prey ecosystem </li>
                  <li> Gathered population data of predator and prey species over time by running the model </li>
                </ul>
                <li> Curb Fitting via Evolutionary Algorithm </li>
                <ul>
                  <li> Utilized CMA-ES to fit the time-series population data produced by the agent-based model to the LV models </li>
                </ul>
                <li> Prediction using the Lotka-Volterra (LV) Models </li>
                <ul>
                  <li> Utilized the LV models to predict the future trajectory of the  population dynamics of predator and prey species </li>
                  <li> Evaluated the performance of the model using mean squared error  </li>
                </ul>
              </ul>
              <h3> Result </h3>
              <p> Found that the additional population capacity significantly increases the prediction accuracy </p>
            </ul>
            <br/>
            <h2> Introduction </h2>
            <p>Human interventions to biological ecosystems for maintaining their stability in the population dynamics of its species, such as the predator-prey interaction, is an ongoing problem in ecological research. Prediction of the future of such population dynamics can help predict the impact of the interventions. </p>

            <p> The Lotka-Volterra (LV) model is commonly used to model the population dynamics of predator-prey species. It is able to automatically draw trajectories of the population of the 2 species over time for stability analysis. Alternatively the logistic map is a model for population dynamics of a single species that is commonly used. However, the LV model does not have the quadratic term seen in the logistic map. It can be hypothesized that the addition of quadratic term can affect the equation’s ability to fit to time-series data for populations. </p>

            <p> Our project aims to compare the prediction performance between the LV model and an altered LV model with an added quadratic term. </p>

            <h2> Methodology </h2>
            <p> The time-series data for the population dynamics of the prey and predator species is generated using a discrete-time discrete-space agent-based model. </p>

            <p> For each timestep, each prey agent is stochastically duplicated. Prey agents are replaced with a predator agent whenever they get within the distance of 10 of a predator agent. Predator agents are set to move toward the nearest prey location, while the prey agents are set to move away from the nearest predator location. </p>

            <figure>
              <img src={scatter_baseline} alt="Example predator-prey ecosystem" style={{width:"100%"}}/>
              <figcaption style={{textAlign: "center"}}> Example predator-prey ecosystem. Blue and red indicate prey and predator. </figcaption>
            </figure>

            <p> The generated population data is fit to the LV model. </p>

            <p> The equations of the LV model is as follows. </p>
            <p> <Latex> {"$\\dot N_1 = r_1N_1 - d_{1} N_1 N_2$"} </Latex> </p>
            <p> <Latex> {"$\\dot N_2 = r_{2} N_1 N_2 - d_2N_2$"} </Latex> </p>
            <p> where <Latex> $N_1, N_2$ </Latex> are the prey and predator’s population, <Latex> $r_1, r_2$ </Latex> are the prey and predator’s growth rate, and <Latex> $d_1, d_2$ </Latex> are the prey and predator’s death rate. </p>

            <p> A quadratic term is added (LV-Hyperbolic). </p>
            <p> <Latex> {"$\\dot N_1 = r_1N_1 - s_1N_1^2 - d_{1} N_1 N_2$"} </Latex> </p>
            <p> <Latex> {"$\\dot N_2 = r_{2} N_1 N_2 + s_2N_2^2 - d_2N_2$"} </Latex> </p>

            <p> where <Latex> $s_1, s_2$ </Latex> are the coefficients for the quadratic term. </p>

            <p> Heun’s method is used to discretize the differential equations. </p>

            <h2> Experiment </h2>
            <p> 200 sets of discrete time-series data for predator and prey species are generated using the agent-based model. The spatial environment for the agent-based model is of size 180x180. The initial population for the predator and prey is 100 each. Each model is run for 30 timesteps. To simplify the model fitting, only the data with non-zero values for each population and those that do not result in overflowing coefficients after fitting are included. </p>

            <p> For each set of the population data, LV and LV-Hyperbolic models are fit to the first 20 timesteps using the evolutionary algorithm CMA-ES. The last 10 timesteps are used as testing data to calculate the mean squared error per timestep. </p>

            <p> The entirety of the aforementioned process is repeated for 100 runs. The average loss per timestep and their 95% confidence intervals are calculated. </p>

            <h2> Results </h2>

            <p> The mean of the training data for LV and LV-Hyperbolic models are 131413 and 201. </p>

            <p> The mean and confidence interval of the test loss are seen below. </p>

            <figure>
              <img src={both} alt="Test loss of both LV model and LV-Hyperbolic model" style={{width:"100%"}}/>
              <figcaption style={{textAlign: "center"}}> Test loss of both LV model and LV-Hyperbolic model </figcaption>
            </figure>

            <figure>
              <img src={hyperbolic} alt="Test loss of the LV-Hyperbolic model" style={{width:"100%"}}/>
              <figcaption style={{textAlign: "center"}}> Test loss of the  LV-Hyperbolic model </figcaption>
            </figure>

            <h2> Evaluation </h2>
            <p> Despite the fitness curves for both model being similar, the added quadratic term was able to improve the fitting performance. This may be due to the quadratic term’s ability to capture higher-dimensional curves, such as the hyperbolic function. </p>

            <p> As expected, the mean and confidence interval of the losses for the test data rose with the number of timesteps. LV-Hyperbolic model showed a more consistently increasing loss curve compared to the LV model. </p>

            <p> Some data that were fit to both models resulted in overflowing coefficients. Further adjustments to the model to prevent such should be explored. </p>
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

export default LVFitting;
