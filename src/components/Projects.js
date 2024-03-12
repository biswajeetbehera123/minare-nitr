import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import ROP from "../assets/img/Rock on pap.pdf";
import OAQ from "../assets/img/Ore-acle Quest.pdf";
import CO from "../assets/img/Case Ore rules.pdf";
import Mbc from "../assets/img/MBC.pdf";
import Mf from "../assets/img/MF.pdf";
import Mm from "../assets/img/MM.pdf";


export const Projects = () => {

  const projects = [
    {title: "MineForge",
      description:"MINARE'24 presents an immersive Mine Manager Simulation Challenge, allowing participants to navigate mining complexities. Engage in realistic exercises like planning, production optimization, inspections, and crisis management. Enhance decision-making and problem-solving skills while gaining industry insights and networking opportunities. Prepare for leadership roles in the mining sector.",
       imgUrl: "https://res.cloudinary.com/daho6qhd0/image/upload/v1710150925/minare/a_jgc1tb.png",
      Rules:Mf,
      RulesToFollow:"Rules-To-Follow",
    },
    {
      title: "Geobotics:The Robot Challenge",
      description: "Join MINARE 24' for an electrifying journey into the fusion of robotics and mining at MineBots. Crafted for pioneers and visionaries, our event illuminates the forefront of robotics in mining, redefining practices for efficiency and sustainability. Unravel how robotics propel operational growth and seize this chance to unleash limitless possibilities. Secure your transformative voyage towards innovation and excellence in mining at MineBots.",
      imgUrl:"https://res.cloudinary.com/daho6qhd0/image/upload/v1710153368/minare/Instagram_post_-_6_td56bu.jpg" ,
      Rules:Mbc,
      RulesToFollow:"Rules-To-Follow",
    },
    {
      title: "Ore-acle Quest:Quiz",
      description: "Join us for Ore-acle Quest, an exciting mining-themed quiz event at Minare 2024. Test your knowledge and compete against other teams in a battle of intellect and skill. Will your team emerge victorious and claim the title of Ore-acle Quest champion? Don't miss out on this thrilling opportunity to showcase your mining expertise! Register now and prepare to embark on an unforgettable journey through the fascinating world of mining",
      imgUrl: "https://res.cloudinary.com/daho6qhd0/image/upload/v1710150951/minare/c_vpqkn6.png",
      Rules:OAQ,
      RulesToFollow:"Rules-To-Follow",
    },
    {
      title: "Mine Matrix:The Traesure Hunt",
      description: "Welcome to Mine Matrix: The Treasure Hunt, an exhilarating event that will test your problem-solving skills and teamwork like never before! Embark on an epic adventure through a labyrinth of clues and challenges, all set within the intriguing world of mining. Gather your team, sharpen your minds, and prepare to unravel mysteries, crack codes, and unearth hidden treasures. With each step, you'll delve deeper into the matrix, racing against time to emerge victorious. Will your team be the one to conquer the Mine Matrix and claim the ultimate prize? Join us for an unforgettable journey of exploration, discovery, and triumph at Mine Matrix: The Treasure Hunt",
      imgUrl: "https://res.cloudinary.com/daho6qhd0/image/upload/v1710150962/minare/d_dayinh.png",
      Rules:Mm,
      RulesToFollow:"Rules-To-Follow",
    },
    {
      title: "Rock-On-Pap",
      description: "Experience the excitement of Minare 2024, organized by NIT Rourkela, where innovation meets opportunity. Showcase your groundbreaking research in our technical paper presentation, network with industry leaders, and contribute to the forefront of technological advancement. Elevate your academic and professional profile while engaging in a dynamic exchange of ideas. Don't miss out on this chance to be part of an extraordinary event shaping the future of technology",
      imgUrl:"https://res.cloudinary.com/daho6qhd0/image/upload/v1710150977/minare/e_k5smpe.png" ,
      Rules:ROP,
      RulesToFollow:"Rules-To-Follow",
    },
    {
      title: "Case Ore-einted",
      description: "Minare 24’ the annual Geo-mining fest at NIT Rourkela hosts the annual Case Ore-iented competition. Participants tackle real-world mining challenges, covering exploration, extraction, and processing, safety, and community engagement. This platform allows experts to demonstrate critical thinking and problem-solving skills, fostering collaboration and innovation in the mining industry. It emphasizes sustainable practices and responsible resource management, contributing to the advancement of the sector. Join us for an unforgettable event. Don't miss out!",
      imgUrl: "https://res.cloudinary.com/daho6qhd0/image/upload/v1710151091/minare/f_xxmcqn.png",
      Rules:CO,
      RulesToFollow:"Rules-To-Follow",
    },
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
        
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Events</h2>
                                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="section">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}

