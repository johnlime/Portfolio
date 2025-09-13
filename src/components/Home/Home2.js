import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/simple_profile.png";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              ABOUT ME
            </h1>
            <p className="home-about-body">
            Game programmer, data scientist, and AI engineer with years of experience in conducting research, developing softwares, and mentoring students in machine learning, AI, game development, computational simulation models, and statistical models. I have a proven track record of achieving high pass rates in classes that I have tutored and producing significant results in various projects using Python, C#, game engines, etc. Additionally, my background in conducting sound design for theatrical plays demonstrates my ability to collaborate with teams and enhance overall experiences. With a focus on research, software development, and education, I bring a unique blend of technical skills and creative expertise to the table.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;

/*
<h1 style={{ fontSize: "2.6em" }}>
  LET ME <span className="purple"> INTRODUCE </span> MYSELF
</h1>
<p className="home-about-body">
  I fell in love with programming and I have at least learnt
  something, I think… 🤷‍♂️
  <br />
  <br />I am fluent in classics like
  <i>
    <b className="purple"> C++, Javascript and Go. </b>
  </i>
  <br />
  <br />
  My field of Interest's are building new &nbsp;
  <i>
    <b className="purple">Web Technologies and Products </b> and
    also in areas related to{" "}
    <b className="purple">
      Blockchain.
    </b>
  </i>
  <br />
  <br />
  Whenever possible, I also apply my passion for developing products
  with <b className="purple">Node.js</b> and
  <i>
    <b className="purple">
      {" "}
      Modern Javascript Library and Frameworks
    </b>
  </i>
  &nbsp; like
  <i>
    <b className="purple"> React.js and Next.js</b>
  </i>
</p>
*/
