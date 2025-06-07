import React from 'react'
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
  AiOutlineTwitter
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import './Social.css'

const Social = () => {
  return (
    <Container style={{padding: '30px'}}>
    <Row>
              <Col md={12} className="contact-social">
                <div className='contact-text'>
                <h1>FIND ME ON</h1>
                <p>
                Please don't hesitate to reach out to me and <span className="yellow">connect.</span>
                </p>
                </div>
                <ul className="contact-social-links">
                  <li className="contact-icons">
                    <a
                      href="https://github.com/Abhishek-B-R"
                      target="_blank"
                      rel="noreferrer"
                      className="icon-color contact-social-icons"
                    >
                      <div className="ml-4 mt-3">
                      <AiFillGithub />
                      </div>
                    </a>
                  </li>
                  <li className="contact-icons">
                    <a
                      href="https://twitter.com/AbhiCodes01"
                      target="_blank"
                      rel="noreferrer"
                      className="icon-color  contact-social-icons"
                    >
                      <div className="ml-4 mt-3">
                      <AiOutlineTwitter />
                      </div>
                    </a>
                  </li>
                  <li className="contact-icons">
                    <a
                      href="https://www.linkedin.com/in/abhishek-b-r-b232ba2a2/"
                      target="_blank"
                      rel="noreferrer"
                      className="icon-color  contact-social-icons"
                    >
                      <div className="ml-4 mt-3">
                      <FaLinkedinIn />
                      </div>
                    </a>
                  </li>
                  <li className="contact-icons">
                    <a
                      href="https://leetcode.com/Abhishek__B_R/"
                      target="_blank"
                      rel="noreferrer"
                      className="icon-color contact-social-icons"
                    >
                      <div className="ml-4 mt-3">
                      <SiLeetcode />
                      </div>
                    </a>
                  </li>
                </ul>
              </Col>
            </Row>
          </Container>
  )
}

export default Social