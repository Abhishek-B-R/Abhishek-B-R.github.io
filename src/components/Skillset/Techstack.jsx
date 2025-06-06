import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiGit,
} from "react-icons/di";
import {
  SiSolidity,
  SiMongodb,
  SiHtml5,
  SiTypescript,
  SiPostgresql,
  SiNextdotjs,
  SiCss3,
  SiJava,
  SiPython,
  SiTailwindcss,
  SiPrisma
} from "react-icons/si";

const Techstack = () => {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiHtml5 />
        <h5>HTML</h5>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiCss3 />
        <h5>CSS</h5>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
        <h5>Javascript</h5>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiTypescript />
        <h5>Typescript</h5>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiJava />
        <h5>Java</h5>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPython />
        <h5>Python</h5>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs />
        <h5>Node.js</h5>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
        <h5>React</h5>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiNextdotjs />
        <h5>Next.js</h5>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiSolidity />
        <h5>Solidity</h5>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMongodb />
        <h5>MongoDB</h5>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostgresql />
        <h5>PostgreSQL</h5>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPrisma />
        <h5>Prisma</h5>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGit />
        <h5>Git</h5>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiTailwindcss />
        <h5>TailwindCSS</h5>
      </Col>
    </Row>
  );
}

export default Techstack;
