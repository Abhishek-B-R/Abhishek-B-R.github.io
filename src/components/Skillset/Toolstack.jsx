import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
  SiVercel,
  SiAmazonaws,
  SiDocker
} from "react-icons/si";

const Toolstack = () => {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <div className="ml-15 mb-3">
          <SiVisualstudiocode />
        </div>
        <h5>VS Code</h5>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div className="ml-15 mb-3">
        <SiPostman />
        </div>
        <h5>Postman</h5>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div className="ml-15 mb-3">
        <SiVercel />
        </div>
        <h5>Vercel</h5>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div className="ml-15 mb-3">
        <SiAmazonaws />
        </div>
        <h5>AWS</h5>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div className="ml-15 mb-3">
        <SiDocker />
        </div>
        <h5>Docker</h5>
      </Col>
    </Row>
  );
}

export default Toolstack;
