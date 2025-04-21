import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import ezfolio from "../../Assets/Projects/ezfolio.png";
import ats from "../../Assets/Projects/ats.png";
import portf from "../../Assets/Projects/personal-portfolio.png"

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
              imgPath={ezfolio}
              isBlog={false}
              title="Attention Problem"
              description="Struggling to stay focused at work? Attention problems can make tasks feel overwhelming, reduce productivity, and lead to frustration. Distractions, mental fatigue, or even underlying conditions like ADHD can contribute to difficulty in concentrating on important tasks."
              ghLink="https://github.com/pmc0707/Hack-viz_Hackthon"
              demoLink="https://attention-problem.onrender.com/"
            />
          </Col>

          
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ats}
              isBlog={false}
              title="Camping Adventure"
              description="A camping adventure is an immersive outdoor experience where individuals or groups venture into nature to enjoy the tranquility, beauty, and challenges of the wilderness.😍😊👍groups to escape the hustle and bustle of everyday life and reconnect with nature. 🌿🏕️✨"
              ghLink="https://github.com/pmc0707/Camping-Adventure"
              demoLink="https://camping-adventure.onrender.com/listings"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={portf}
              isBlog={false}
              title="Food Delivery Website"
              description="DelishExpress is a fast, reliable, and convenient food delivery platform that connects you with your favorite restaurants. Whether you're craving a hot pizza, a gourmet burger, or a healthy salad, we bring delicious meals straight to your doorstep with just a few clicks"
              ghLink="https://github.com/pmc0707/Food-Delivery-App"
              demoLink=""
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
