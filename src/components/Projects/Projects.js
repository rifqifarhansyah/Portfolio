import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import TubesAlgeo1 from "../../Assets/Projects/TubesAlgeo1.png";
import FrontEndIntroduction from "../../Assets/Projects/FrontEndIntroduction.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={TubesAlgeo1}
              isBlog={false}
              title="Matrix Calculator in Java"
              description="Calculator Matrix to determine the solution of linear equation, inverse of certain matrix, linear interpolation, bicubic interpolation, etc. This Program is written in Java Programming Language."
              ghLink="https://github.com/rifqifarhansyah/Algeo01-21086"
              // demoLink="https://chatify-49.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={FrontEndIntroduction}
              isBlog={false}
              title="Simple Movie List Website"
              description="My personal simple web project that show a list of movie. This program is written in HTMl, CSS, and Javascript. User can click the picture of the movie and the description will be appeard."
              ghLink="https://github.com/rifqifarhansyah/FrontEndIntroduction"
              // demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
