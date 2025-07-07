import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";

function ProjectCards(props) {
  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={props.imgPath} alt="card-img" />
      <Card.Body>
        <Card.Title>
          <b>{props.title}</b>
        </Card.Title>

        {props.tags && (
          <Card.Subtitle style={{paddingBottom: 5, paddingTop: 5}}>
            Tags: <strong class="highlight">
              {props.tags}
            </strong>
          </Card.Subtitle>
        )}

        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>

        {props.articleLink && (
          <Button
            variant="primary"
            href={props.articleLink}
            target="_self"
            style={{ marginLeft: "10px" }}
          >
            <CgWebsite /> &nbsp;
            Article
          </Button>
        )}
        &nbsp;
        {props.ghLink && (
          <Button
            variant="primary"
            href={props.ghLink}
            target="_blank">
              <BsGithub /> &nbsp;
              GitHub
          </Button>
        )}

        {"\n"}
        {"\n"}
      </Card.Body>
    </Card>
  );
}
export default ProjectCards;
