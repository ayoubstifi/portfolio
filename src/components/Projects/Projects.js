import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

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
              imgPath={chatify}
              isBlog={false}
              title="Web Design"
              description="Static web site using HTLM5 and CSS3"
              ghLink="https://github.com/ayoubstifi/sitewebvitrine"
              demoLink="https://acumewebdesign.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="e-commerce website"
              description="e-commerce website for phones its like a phone store with add to cart using Reactjs, HTML5, CSS3, javascript, React Hooks, Bootstrap and json file type"
              ghLink="https://github.com/ayoubstifi/react-phone-store"
              demoLink="https://phone-store00.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Todo list"
              description="Todo list using Angular"
              ghLink="https://github.com/ayoubstifi/angular-todoList"
              demoLink="https://todoliste2.netlify.app/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title=" Breaking-bad-character-Browser "
              description=" Breaking-bad-character-Browser using Reactjs "
              ghLink="https://github.com/ayoubstifi/Breaking-bad-character-Browser"
              demoLink="https://breaking-bad-character-browser.netlify.app/"
            />
          </Col>
 
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
