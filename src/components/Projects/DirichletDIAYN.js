import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import 'katex/dist/katex.min.css';
import Latex from 'react-latex-next';
import Button from "react-bootstrap/Button";

import ppo from "../../Assets/Projects/diayn/ppo.gif";
import diayn from "../../Assets/Projects/diayn/diayn_01.gif";
import hrl_skill from "../../Assets/Projects/diayn/hrl_skill.png";
import d_diayn_concept from "../../Assets/Projects/diayn/d_diayn.png";
import d_diayn from "../../Assets/Projects/diayn/diayn_02.gif";
import result_policy_loss from "../../Assets/Projects/diayn/result_policy_loss.png";
import result_reward from "../../Assets/Projects/diayn/result_reward.png";
import hrl from "../../Assets/Projects/diayn/hrl.gif";
import result_return from "../../Assets/Projects/diayn/result_return.png";
import proposal_pdf from "../../Assets/Projects/diayn/poster.pdf";
import pdf from "../../Assets/Projects/diayn/resume.pdf";
import { AiOutlineDownload } from "react-icons/ai";
import { EmbedPDF } from "@simplepdf/react-embed-pdf";
// import { Document, Page, pdfjs } from "react-pdf";
// import "react-pdf/dist/esm/Page/AnnotationLayer.css";
// pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

// const LATEX_MACROS = { "\\f": "#1f(#2)" };

function DirichletDIAYN() {
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
            <p><b> [Hierarchical Reinforcement Learning, Machine Learning, AI, Control Systems, Robotics] </b></p>
            <h1> Dirichlet DIAYN </h1>
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
              <p>The following work was produced as a research project in the Jin Nakazawa Lab in conjunction with the Masashi Aono Lab at Keio University (2018 - 2019).</p>
              <p> Github: </p>
              <a href="https://github.com/johnlime/RlkitExtension"> https://github.com/johnlime/RlkitExtension </a>
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
              <h2><b>  Highlights </b></h2>
              <p/>
              <ul>
                <h3> Goal </h3>
                <p> Introduced novel insight into distribution sampling in reinforcement learning by evaluating whether sampling from a Dirichlet distribution during the training process would improve the controller's ability to learn to execute diverse tasks compared to the categorical distribution </p>
                <h3> Process </h3>
                <ul>
                  <li> Implemented state of the art deep reinforcement learning algorithms using PyTorch</li>
                  <ul>
                    <li> <a href="https://arxiv.org/abs/1802.06070"> Diversity Is All You Need (DIAYN) </a> , a hierarchical reinforcement learning algorithm </li>
                    <ul>
                      <li> Utilizes the categorical distribution </li>
                    </ul>
                    <li> <a href="https://arxiv.org/abs/1707.06347"> Proximal Policy Optimization (PPO) </a>, a policy gradient algorithm </li>
                    <li> A modified DIAYN that utilizes Dirichlet distribution </li>
                  </ul>
                  <li> Compared the change in performance of conducting forward locomotion on rugged terrain between DIAYN and the modified DIAYN algorithm </li>
                </ul>
                <h3> Task Environment </h3>
                <ul>
                  <li> Physics simulation of bipedal robot </li>
                  <ul>
                    <li> OpenAI Gym "BipedalWalker-v1 Hardcore" envrionment</li>
                  </ul>
                </ul>
              </ul>
              <br/>
              <h2> Introduction </h2>
              <p> The application of robotic control with reinforcement learning on bumpy landscapes is a challenging task because of the necessity of generation of detailed movements. Although preliminary work, DIAYN, a hierarchical reinforcement learning algorithm, performs well on some environments, the complexity of generated tasks and its compatible environments can be limited. </p>
              <p> We propose a solution to generate more diverse tasks and enable an easier application to arbitrary environments. Each model is evaluated based on their performance on locomotion on bumpy landscapes. </p>
              <br/>
              <h2> Methodology </h2>
              <h2> (Algorithm Implementation) </h2>
              <p/>
              <ul>
                <h3> Diversity Is All You Need (DIAYN) </h3>
                <p> DIAYN is an algorithm for acquiring diverse skills without manually defining a reward function. In the context of hierarchical reinforcement learning, composed of the high-level manager policy and the low-level worker policy, DIAYN is used for training the worker policy. The manager policy outputs one-hot "skill vectors" to be fed to the worker policy. The worker policy executes a task associated with the fed skill vector. </p>
                <p> Consequentially, to have the worker policy be able to conduct tasks given one-hot skill vectors, the training process of DIAYN consists of sampling one-hot vectors from the categorical distirbution.  </p>
                <figure>
                  <img src={hrl_skill} alt="A skill vector associated with an individual task is sampled in the training process." style={{width:"100%"}}/>
                  <figcaption style={{textAlign: "center"}}> A skill vector associated with an individual task is sampled in the training process. </figcaption>
                </figure>
                <p> The following are notable skills acquired using DIAYN on OpenAI's simulated bipedal robot. </p>
                <figure>
                  <img src={diayn} alt="BipedalWalker skills acquired using DIAYN" style={{width:"100%"}}/>
                  <figcaption style={{textAlign: "center"}}> BipedalWalker skills acquired using DIAYN </figcaption>
                </figure>
                <br/>
                <h3> Proximal Policy Optimization (PPO) </h3>
                <p> PPO was used for the manager policy in the aforementioned hierarchical reinforcement learning controller. </p>
                <p> The implementation of PPO was validated by having it trained on forward locomotion with OpenAI's simulated bipedal robot. The resulting policy is as the following. </p>
                <figure>
                  <img src={ppo} alt="BipedalWalker controlled by policy trained using PPO" style={{width:"100%"}}/>
                  <figcaption style={{textAlign: "center"}}> BipedalWalker controlled by policy trained using PPO </figcaption>
                </figure>
                <br/>
                <h3> Dirichlet DIAYN (Modified DIAYN Algorithm) </h3>
                <p> The worker policy is trained to accept continuous skill vectors to execute tasks. To accomplish this, a modified DIAYN algorithm, where, during training, the skill vector is sampled from a Dirichlet distribution. Using the property of Dirichlet distribution, in which its shape can be significantly altered by changing the value of its hyperparameters, the shape of the skill distribution is gradually altered from those akin to the categorical distribution to the continuous uniform distribution.  </p>
                <figure>
                  <img src={d_diayn_concept} alt="During the training process, Dirichlet distribution's hyperparameter is altered over time." style={{width:"100%"}}/>
                  <figcaption style={{textAlign: "center"}}> During the training process, Dirichlet distribution's hyperparameter is altered over time. </figcaption>
                </figure>
                <p> The following are notable skills acquired using Dirichelt DIAYN on the simulated bipedal robot. </p>
                <figure>
                  <img src={d_diayn} alt="BipedalWalker skills acquired using Dirichlet DIAYN" style={{width:"100%"}}/>
                  <figcaption style={{textAlign: "center"}}> BipedalWalker skills acquired using Dirichlet DIAYN </figcaption>
                </figure>
              </ul>
              <h2> Results </h2>
              <p> The policy loss curves for both algorithms are as the following. Both learning curves are seen to converge; however, DIAYN is able to find a more optimal solution. </p>
              <figure>
                <img src={result_policy_loss} alt="Policy loss curves" style={{width:"100%"}}/>
                <figcaption style={{textAlign: "center"}}> Policy loss curves </figcaption>
              </figure>
              <p> The learning curves for the reward are as the following. DIAYN is seen to have a more stable learning process. Dirichlet DIAYN exhhibited NaN values due to the reawrds being minimal. </p>
              <figure>
                <img src={result_reward} alt="Reward learning curves" style={{width:"100%"}}/>
                <figcaption style={{textAlign: "center"}}> Reward learning curves </figcaption>
              </figure>
              <p> The following is a demonstration of the hierarchical reinforcement learner utilizing the skill policies computed using DIAYN, Dirichlet DIAYN, and a random number generator. PPO is used for computing the manager policy that controls the worker (skill) policy. The hierarchical policy that utilized DIAYN is able to maintain an upright posture, while the counterpart for Dirichlet DIAYN is not able to select skills necessary for forward locomotion.</p>
              <figure>
                <img src={hrl} alt="BipedalWalker controlled by hierarchical reinforcement learning policies" style={{width:"100%"}}/>
                <figcaption style={{textAlign: "center"}}> BipedalWalker controlled by hierarchical reinforcement learning policies </figcaption>
              </figure>
              <p> Examining the learning curves in terms of returns, the policy trained using DIAYN is able to learn with the most stability, while that of Dirichlet DIAYN showed randomness after the 100th iteration. </p>
              <figure>
                <img src={result_return} alt="Returning learning curves for hierarchical reinforcement learning" style={{width:"100%"}}/>
                <figcaption style={{textAlign: "center"}}> Returning learning curves for hierarchical reinforcement learning </figcaption>
              </figure>
              <br/>
              <h2> Conclusion </h2>
              <p> It can be inferred that having the distribution of the skills be continuous causes the difference between representations of individual skills in the latent space to be ambiguous compared to the discrete counterpart. It is advisable to utilize discrete distributions without attempting to integrate continuous distributions by gradually altering the sample skill distribution. </p>
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
            <h2> Paper </h2>
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
          <Row className="resume">
            <h2> Proposal Poster </h2>
            <Col md={10} style={{justifyContent: "left"}}>
              <Button
                variant="primary"
                href={proposal_pdf}
                target="_blank"
                style={{ maxWidth: "250px" }}
              >
                <AiOutlineDownload />
                &nbsp;Download Poster
              </Button>
              <EmbedPDF
                companyIdentifier="react-viewer"
                mode="inline"
                style={{
                  position: "relative",
                  width: "100%",
                  height: 800
                }}
                documentURL={proposal_pdf}
              />
            </Col>
          </Row>
        </Container>
      </Container>
    </section>
  );
}

export default DirichletDIAYN;
