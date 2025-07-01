import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "../components/Projects/ProjectCard";
import Particle from "../components/Particle";
import deployr from "../assets/projects/deployr.png";
import decentrack from "../assets/projects/decentrack.png";
import chess from "../assets/projects/chess.png";
import chatapp from "../assets/projects/chatapp.png";
import miniProject from "../assets/projects/mini-project.png";
import secondbrain from "../assets/projects/secondbrain.png";

const Projects = () => {
  return (  
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Recent Top <strong className="yellow">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={decentrack}
              isBlog={false}
              title="DecenTrack"
              description="This decentralized website uptime monitoring system features a modern, responsive frontend built with Next.js and Shadcn UI. Users can register their websites for uptime checks, and validators from around the world monitor these sites in real-time. If a website goes down, the system automatically sends email and SMS alerts using a smart detection algorithm. All monitoring data is logged on the Ethereum blockchain using smart contracts written in Solidity, ensuring transparency and trust. The system uses WebSockets for live validator communication, and users can view their website status, history, and performance metrics directly from the dashboard. The backend is decentralized using Ethereum."
              ghLink="https://github.com/Abhishek-B-R/DecenTrack"
              demoLink="https://decentrack.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={deployr}
              isBlog={false}
              title="Deployr"
              description="Deployr is a website frontend hosting service with a sleek and responsive interface built using Next.js and TailwindCSS. After logging in, users can select a GitHub repository, specify the working directory, and deploy their site with a single click. The system automatically builds and hosts the frontend, returning a live URL once deployment is complete. Users can later customize their domain names through the dashboard. CI/CD pipelines are integrated for automatic redeployment on every push to the repository. The backend is powered by Node.js, and seamless GitHub integration ensures a smooth developer experience."
              ghLink="https://github.com/Abhishek-B-R/Deployr"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={secondbrain}
              isBlog={false}
              title="Second Brain"
              description="Second Brain is a personal knowledge management website designed to help users capture, organize, and retrieve information effortlessly. Inspired by the concept of building a digital extension of your memory, it offers features like note-taking, tagging, search, and linking between ideas. Built with modern web technologies, it provides a clean, intuitive interface for managing knowledge and boosting productivity. It even has a chrome extension for quick note capture from anywhere on the web. Both the frontend and backend are built with Next.js, ensuring a seamless user experience and fast performance."
              ghLink="https://github.com/Abhishek-B-R/second-brain"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatapp}
              isBlog={false}
              title="ChatApp"
              description="This real-time chat application features a clean, minimal frontend built with React and TailwindCSS. On login, users are prompted to enter a room number, allowing them to join or create chat rooms dynamically. Inside each room, users can send and receive messages in real-time — all messages are instantly broadcasted to every participant in that room using WebSockets. The app supports multiple rooms and allows seamless group communication without requiring any sign-up process. The backend is powered by a Node.js and Socket.io server, ensuring low-latency message delivery and smooth real-time interaction between users."
              ghLink="https://github.com/Abhishek-B-R/simple-chat-app"
              demoLink="https://chat.abhi.wtf/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chess}
              isBlog={false}
              title="Chess.com Clone"
              description="This full-stack Chess.com clone offers a feature-rich multiplayer chess platform with a polished frontend built using Next.js and TailwindCSS. Players can create or join real-time matches with others via WebSockets, supporting smooth and synchronized gameplay. The platform also includes a bot mode for solo games, powered by a built-in AI engine. To enhance player experience, daily chess puzzles are integrated from the open-source Lichess dataset, allowing users to practice tactics and improve skills. Additional features include real-time match timers, in-game chat, player rankings, and a match history review system. The backend is built with Node.js and Socket.io, providing robust multiplayer support and real-time communication."
              ghLink="https://github.com/Abhishek-B-R/chess.com-ui-clone"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={miniProject}
              isBlog={false}
              title="Decentralized Crop Trading Platform"
              description="A blockchain-powered platform that enables farmers to list, trade, and sell their crops directly without intermediaries. Each listing is recorded on-chain, ensuring transparency, security, and traceability. Buyers can view crop details and make offers, while farmers retain full control over pricing and acceptance. This project aims to empower rural communities by providing a trustless, decentralized marketplace."
              ghLink="https://github.com/Abhishek-B-R/blockchain-mini-project"
              demoLink="https://blockchain-mini-project.vercel.app/"
            />
          </Col>

        </Row>
      </Container>
    </Container>
  )
}

export default Projects