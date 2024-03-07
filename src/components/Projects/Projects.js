import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
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
              imgPath={editor}
              isBlog={false}
              title="HealthCRAD (User Module)"
              description="HealthCRAD is building a decentralized healthcare ecosystem for rural India, connecting
              local Ordinants with nearby Prime Medical Aid Cities. The initiative aims to provide accessible healthcare
              and emergency services in a streamlined manner. This network ensures ease and connectivity for the
              well-being of people in underserved regions"
              // ghLink="https://github.com/Amanraj1315/NewsApp.git"

            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="CatZapp"
              description="It is a Blue-Collar Job Portal, a comprehensive web application designed to connect job
              seekers in the blue-collar sector with relevant job opportunities. Modeled after popular job platforms like
              naukri.com, this project utilizes the React framework for the frontend and Python for the backend to
              create a seamless and user-friendly experience for both job seekers and employers."
              // ghLink="https://github.com/Amanraj1315/NewsApp.git"

            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="MPS"
              description="ManPower Solution is a cutting-edge app designed to streamline job applications
              specifically for individuals seeking opportunities in the construction sector. Tailored for laborers,
              technicians, and skilled workers, this platform simplifies the process of finding and applying for jobs
              based on qualifications, experience, and location preferences. With ManPower Solution, accessing
              employment opportunities in the construction industry has never been easier, empowering workers to
              secure fulfilling roles that match their expertise and aspirations."
              // ghLink="https://github.com/Amanraj1315/NewsApp.git"

            />
          </Col>


          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="NewsApp"
              description="Personal Chat Room or Workspace to share resources and hangout with friends build with react.js, Material-UI, and Firebase. Have features which allows user for realtime messaging, image sharing as well as supports reactions on messages."
              // ghLink="https://github.com/Amanraj1315/NewsApp.git"

            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="E-Commerce Website"
              description="My personal blog page build with Next.js and Tailwind Css which takes the content from makdown files and renders it using Next.js. Supports dark mode and easy to write blogs using markdown."
              // ghLink="https://github.com/Amanraj1315/E-COMMERCE-WEBSITE.git"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Salinaka-Eyewear Website"
              description="Online code and markdown editor build with react.js. Online Editor which supports html, css, and js code with instant view of website. Online markdown editor for building README file which supports GFM, Custom Html tags with toolbar and instant preview.Both the editor supports auto save of work using Local Storage"
              // ghLink="https://github.com/Amanraj1315/SALINAKA-EYEWEAR-WEBSITE.git"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
