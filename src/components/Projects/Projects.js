import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import Movie from "../../Assets/Projects/moviegen.png";
import Converter from "../../Assets/Projects/stc.png";
import DR from "../../Assets/Projects/DR.png";
import Graph from "../../Assets/Projects/gcn.png";
import DigiWeb from "../../Assets/Projects/DigWFP.png";

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
              imgPath={DR}
              isBlog={false}
              title="Diabetic Retinopathy Detection"
              description=" a robust and accurate multi-class supervised machine learning
              algorithm for the early detection of diabetic retinopathy, a chronic eye disease prevalent among diabetic patients."
              ghLink="https://github.com/Anirudhbojji/DR"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={DigiWeb}
              isBlog={false}
              title="Digital Footprints and Digital Wellbeing"
              description="Led a project educating peers on online impact, guiding self-assessment
              for effective digital footprint management. Improved awareness of digital wellbeing challenges, promoting responsible
              online engagement."
              ghLink="https://github.com/Anirudhbojji/CYBER-EKTA"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Converter}
              isBlog={false}
              title="Speech to Text Converter"
              description="Built an Android app with Flutter, showcasing cross-platform expertise and real-time
              audio transcription capabilities. Optimized user experience through intuitive design and efficient functionality"
              ghLink="https://github.com/AnirudhBojji"             
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Movie}
              isBlog={false}
              title="MovieGenre Prediction"
              description="Created a movie genre prediction model using classifiers like Naive Bayes and Support
              Vector Machines. Demonstrated proficiency in text-based classification for accurate genre identification in movie plot
              summaries"
              ghLink="https://github.com/soumyajit4419/MOVIE_GENRE"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Graph}
              isBlog={false}
              title="Github User Classification"
              description="Currently Working on GIthub User Classification with Graph Convulution Neural Networks"
              ghLink="https://github.com/AnirudhBojji"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
