import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="6" className="footer-copywright">
          <h3>Template Designed and Developed by </h3>
          <h3>Soumyajit Behera</h3>
          <ul className="footer-icons">
            <li className="social-icons">
              <a
                href="https://github.com/soumyajit4419"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillGithub />
              </a>
            </li>
          </ul>
        </Col>
        <Col md="6" className="footer-copywright">
          <h3>Mioto Takahashi</h3>
          <h3>AI Engineer / Data Scientist</h3>
          <ul className="footer-icons">
            <li className="social-icons">
              <a
                href="https://github.com/johnlime"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillGithub />
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}
// <Col md="4" className="footer-copywright">
//   <h3>Copyright © {year} SB</h3>
// </Col>
// <Col md="4" className="footer-body">
//   <ul className="footer-icons">
//     <li className="social-icons">
//       <a
//         href="https://github.com/soumyajit4419"
//         style={{ color: "white" }}
//         target="_blank"
//         rel="noopener noreferrer"
//       >
//         <AiFillGithub />
//       </a>
//     </li>
//   </ul>
// </Col>

export default Footer;
