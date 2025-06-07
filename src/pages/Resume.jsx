"use client"

import { useState, useEffect } from "react"
import { Container, Row } from "react-bootstrap"
import Button from "react-bootstrap/Button"
import { AiOutlineDownload } from "react-icons/ai"

import Particle from "../components/Particle"
import pdf from "../assets/resume.pdf"

const Resume = () => {
  const [width, setWidth] = useState(1200)

  useEffect(() => {
    setWidth(window.innerWidth)
  }, [])

  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="primary"
            href={pdf}
            target="_blank"
            style={{ maxWidth: "250px" }}
            className="d-flex align-items-center justify-content-center"
          >
            <div className="me-2">
              <AiOutlineDownload size={20} />
            </div>
            <span>Download Resume</span>
          </Button>
        </Row>

        <Row className="resume d-flex justify-content-center mt-4 mb-4">
          <div className="resume-image-container flex justify-center" style={{ textAlign: "center" }}>
            <img
              src="/resume.png"
              alt="Resume"
              className="resume-image"
              style={{
                maxWidth: "40%",
                height: "auto",
                width: width > 786 ? "85%" : "95%",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                borderRadius: "8px",
                border: "1px solid #ddd",
              }}
            />
          </div>
        </Row>

        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="primary"
            href={pdf}
            target="_blank"
            style={{ maxWidth: "250px" }}
            className="d-flex align-items-center justify-content-center"
          >
            <div className="me-2">
              <AiOutlineDownload size={20} />
            </div>
            <span>Download Resume</span>
          </Button>
        </Row>
      </Container>
    </div>
  )
}

export default Resume
