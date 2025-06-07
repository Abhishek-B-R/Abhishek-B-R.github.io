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
      <Col xs={4} md={2} className="tech-icons flex-col">
        <div className="ml-15 mb-3">
          <SiHtml5 />
        </div>
        <h5>HTML</h5>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div className="ml-15 mb-3">
          <SiCss3 />
        </div>
        <h5>CSS</h5>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div className="ml-15 mb-3">
          <DiJavascript1 />
        </div>
        <h5>Javascript</h5>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div className="ml-15 mb-3">
          <SiTypescript />
        </div>
        <h5>Typescript</h5>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div className="ml-15 mb-3">
          <SiJava />
        </div>
        <h5>Java</h5>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div className="ml-15 mb-3">
          <SiPython />
        </div>
        <h5>Python</h5>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div className="ml-15 mb-3">
          <DiNodejs />
        </div>
        <h5>Node.js</h5>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div className="ml-15 mb-3">
          <DiReact />
        </div>
        <h5>React</h5>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div className="ml-15 mb-3">
        <SiNextdotjs />
        </div>
        <h5>Next.js</h5>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div className="ml-15 mb-3">
        <SiSolidity />
        </div>
        <h5>Solidity</h5>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div className="ml-15 mb-3">
        <SiMongodb />
        </div>
        <h5>MongoDB</h5>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div className="ml-15 mb-3">
        <SiPostgresql />
        </div>
        <h5>PostgreSQL</h5>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div className="ml-15 mb-3">
        <SiPrisma />
        </div>
        <h5>Prisma</h5>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div className="ml-15 mb-3">
        <DiGit />
        </div>
        <h5>Git</h5>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div className="ml-15 mb-3">
        <SiTailwindcss />
        </div>
        <h5>TailwindCSS</h5>
      </Col>
    </Row>
  );
}

export default Techstack;
