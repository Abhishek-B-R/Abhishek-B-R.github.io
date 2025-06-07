import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { AiOutlineDownload } from "react-icons/ai";

import Particle from '../components/Particle'
import pdf from "../assets/resume.pdf"

import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import "react-pdf/dist/esm/Page/TextLayer.css";
pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const resumeLink = `https://raw.githubusercontent.com/abhishek-b-r/abhishek-b-r.github.io/main/src/assets/resume.pdf`


const Resume = () => {
  const [width, setWidth] = useState(1200);

  useEffect(() => {
    
    setWidth(window.innerWidth);
  }, []);

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
          >
           <div className="scale-200 ml-20 mt-2">
            <AiOutlineDownload />
            </div>
            <div className="-mt-5">&nbsp;Download Resume</div>
          </Button>
        </Row>

        <Row className="resume">
          <Document file={resumeLink} className="d-flex justify-content-center">
            <Page pageNumber={1} scale={width > 786 ? 1.7 : 0.6} />
          </Document>
        </Row>

        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="primary"
            href={pdf}
            target="_blank"
            style={{ maxWidth: "250px" }}
            className="flex"
          >
           <div className="scale-200 ml-20 mt-2">
            <AiOutlineDownload />
            </div>
            <div className="-mt-5">&nbsp;Download Resume</div>
          </Button>
        </Row>
      </Container>
    </div>
  )
}

export default Resume