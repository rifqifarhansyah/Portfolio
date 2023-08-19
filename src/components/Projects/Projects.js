import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import Binomo from "../../Assets/Projects/Binomo.png";
import FlaskCard from "../../Assets/Projects/FlaskCard.png";
import SimplePomodoro from "../../Assets/Projects/SimplePomodoro.png";
import BatikPattern from "../../Assets/Projects/BatikPattern.png";
import TubesAlgeo1 from "../../Assets/Projects/TubesAlgeo1.png";
import TubesAlgeo2 from "../../Assets/Projects/TubesAlgeo2.png";
import FrontEndIntroduction from "../../Assets/Projects/FrontEndIntroduction.png";
import DrumKitSimulator from "../../Assets/Projects/DrumKitSimulator.png";
import SimonGame from "../../Assets/Projects/SimonGame.png";
import ChatGPT from "../../Assets/Projects/ChatGPT.png";
import Perhutani from "../../Assets/Projects/Perhutani.png";
import TreasureHunter from "../../Assets/Projects/TreasureHunter.png";
import PathFinder from "../../Assets/Projects/PathFinder.png";
import FloodFill from "../../Assets/Projects/FloodFill.png";
import MSTVisualizer from "../../Assets/Projects/MSTVisualizer.png";
import CourseScheduler from "../../Assets/Projects/CourseScheduler.png";
import TarjanAlgorithm from "../../Assets/Projects/TarjanAlgorithms.png";
import TextCompresser from "../../Assets/Projects/TextCompresser.png";

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
              imgPath={TubesAlgeo2}
              isBlog={false}
              title="Eigen Face Recognition"
              description="A simple face recognition GUI that utilizing the Eigen Concepts of matrices using Tkinter, OpenCV, PIL, numpy, etc."
              ghLink="https://github.com/rifqifarhansyah/EigenFace-Recognition"
              demoLink="https://www.youtube.com/watch?v=xm5gqvvVv0k&ab_channel=MohammadRifqiFarhansyah"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={BatikPattern}
              isBlog={false}
              title="Batik Pattern Classification"
              description="A simple Batik Pattern Classification using Decision Tree and Global Features Extraction."
              ghLink="https://github.com/rifqifarhansyah/Batik-Pattern-Classification"
              demoLink="https://drive.google.com/file/d/1SbD0jCkGbdNSbsBV52oIpmvyz75EotJb/view"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ChatGPT}
              isBlog={false}
              title="ChatGPT - Lite"
              description="Website that can generate a chat response based on the user input. This program utilize KMP and BM for string pattern matching process."
              ghLink="https://github.com/rifqifarhansyah/ChatGPT-Lite"
              demoLink="https://chatgpt-lite-alpha.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Perhutani}
              isBlog={false}
              title="Perhutani Website"
              description="Website project for 'Perhutani Regional Jawa Barat dan Banten'. This project is intended to help Perhutani manage their assets in Jawa Barat and Banten."
              ghLink="https://github.com/rifqifarhansyah/Perhutani-Jabar"
              demoLink="https://perhutani-jabar.vercel.app/"
            />
          </Col>
          
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={TreasureHunter}
              isBlog={false}
              title="Treasure Hunter"
              description="GUI Project that implement BFS and DFS Algorithm to find the treasure. This program is written in C# Programming Language (GUI)."
              ghLink="https://github.com/rifqifarhansyah/TreasureHunter"
              // demoLink="https://perhutani-jabar.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={PathFinder}
              isBlog={false}
              title="Path Finder"
              description="Website Project that implement A* and UCS Algorithm to find the shortest path. This program is the part of my project in Algorithm Strategy Course"
              ghLink="https://github.com/rifqifarhansyah/PathFinder"
              demoLink="https://tucil-3-g7s9.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={FloodFill}
              isBlog={false}
              title="FloodFill - Simple Paint"
              description="An implementation of BFS and DFS Algorithm to recreate a bucket fill tool in paint application. FloodFill application is written in Python Programming Language (PyGame)."
              ghLink="https://github.com/rifqifarhansyah/FloodFill-SimplePaint"
              demoLink="https://www.youtube.com/watch?v=FQxSS_ljs6A&feature=youtu.be&ab_channel=MohammadRifqiFarhansyah"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={MSTVisualizer}
              isBlog={false}
              title="MST Visualizer"
              description="Minimum Spanning Tree Visualizer that implement Kruskal and Prim Algorithm to find the minimum spanning tree. The application also provides another fitures (MST clustering, add and remove node, etc)."
              ghLink="https://github.com/rifqifarhansyah/MST-Visualizer"
              // demoLink="https://www.youtube.com/watch?v=FQxSS_ljs6A&feature=youtu.be&ab_channel=MohammadRifqiFarhansyah"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={CourseScheduler}
              isBlog={false}
              title="Course Scheduler"
              description="Website that could help students to plan their courses that have a big chance to get the best score. This website use react for the frontend and golang for the bockend. This project also provide a Docker setup."
              ghLink="https://github.com/rifqifarhansyah/CourseScheduler_Frontend"
              demoLink="https://course-scheduler-frontend-cztvf3pz6-rifqifarhansyah.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={TarjanAlgorithm}
              isBlog={false}
              title="Tarjan Algorithm"
              description="A website that implement Tarjan Algorithm to find SCC and its bridge. This website use react for the frontend and golang for the bockend."
              ghLink="https://github.com/rifqifarhansyah/TarjansAlgorithm"
              // demoLink="https://course-scheduler-frontend-cztvf3pz6-rifqifarhansyah.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={TextCompresser}
              isBlog={false}
              title="Text Compresser"
              description="Text compresser website that utilize LZW and Huffman Algorithm. This website use react for the frontend and nodeJS for the bockend."
              ghLink="https://github.com/rifqifarhansyah/StringCompresser-FrontEnd"
              // demoLink="https://course-scheduler-frontend-cztvf3pz6-rifqifarhansyah.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Binomo}
              isBlog={false}
              title="Binomo Game Bot"
              description="CLI based game for Binomo Game (similar with dinner dash game). This program is written in Python Programming Language."
              ghLink="https://github.com/rifqifarhansyah/IF2110-BNMO-The-Game"
              // demoLink="https://drive.google.com/file/d/1SbD0jCkGbdNSbsBV52oIpmvyz75EotJb/view"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={TubesAlgeo1}
              isBlog={false}
              title="Matrix Calculator in Java"
              description="Calculator Matrix to determine the solution of linear equation, inverse of certain matrix, linear interpolation, bicubic interpolation, etc. This Program is written in Java Programming Language."
              ghLink="https://github.com/rifqifarhansyah/MatrixCalculator"
              // demoLink="https://chatify-49.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={FlaskCard}
              isBlog={false}
              title="Flask Card"
              description="Project to help Indonesian People who wants to study English Vocabularies. This program is written in Python Programming Language (GUI)."
              ghLink="https://github.com/rifqifarhansyah/Flask-Card"
              // demoLink="https://chatify-49.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={FrontEndIntroduction}
              isBlog={false}
              title="Simple Movie List Website"
              description="My personal simple web project that show a list of movie. This program is written in HTMl, CSS, and Javascript. User can click the picture of the movie and the description will be appeared."
              ghLink="https://github.com/rifqifarhansyah/FrontEndIntroduction"
              // demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={DrumKitSimulator}
              isBlog={false}
              title="Drum Kit Simulator"
              description="A Simple Drum Kit Simulator website that build with HTML, CSS, and JavaScript. User can click the 'button drum' by pressing the keyboard or just click the image."
              ghLink="https://github.com/rifqifarhansyah/DrumKitSimulator"
              demoLink="https://drumkitsimulator.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={SimonGame}
              isBlog={false}
              title="Simple Simon Game"
              description="A Simple Simon Game website that build with HTML, CSS, and JavaScript. User need to remember the pattern that given by system and then follow it (test the Sound Memories of the User)."
              ghLink="https://github.com/rifqifarhansyah/SimonGame"
              demoLink="https://simongame-six.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={SimplePomodoro}
              isBlog={false}
              title="Simple Pomodoro Timer"
              description="Pomodoro timer to manage work and break time. This program is written in python programming language (GUI)."
              ghLink="https://github.com/rifqifarhansyah/Simple-Pomodoro"
              // demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
