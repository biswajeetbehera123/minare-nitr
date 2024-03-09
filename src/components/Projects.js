import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Ore-acle Quest:Quiz",
      description: "Join us for Ore-acle Quest, an exciting mining-themed quiz event at Minare 2024. Test your knowledge and compete against other teams in a battle of intellect and skill. Will your team emerge victorious and claim the title of Ore-acle Quest champion? Don't miss out on this thrilling opportunity to showcase your mining expertise! Register now and prepare to embark on an unforgettable journey through the fascinating world of mining",
      imgUrl: projImg1,
    },
    {
      title: "Case Ore-einted",
      description: "Minare 24’ the annual Geo-mining fest at NIT Rourkela hosts the annual Case Ore-iented competition. Participants tackle real-world mining challenges, covering exploration, extraction, and processing, safety, and community engagement. This platform allows experts to demonstrate critical thinking and problem-solving skills, fostering collaboration and innovation in the mining industry. It emphasizes sustainable practices and responsible resource management, contributing to the advancement of the sector. Join us for an unforgettable event. Don't miss out!",
      imgUrl: projImg2,
    },
    {
      title: "MineBots Challenge:Mining Robotics Challenge",
      description: "Join MINARE 24' for an electrifying journey into the fusion of robotics and mining at MineBots. Crafted for pioneers and visionaries, our event illuminates the forefront of robotics in mining, redefining practices for efficiency and sustainability. Unravel how robotics propel operational growth and seize this chance to unleash limitless possibilities. Secure your transformative voyage towards innovation and excellence in mining at MineBots.",
      imgUrl: projImg1,
    },
    {
      title: "Minecarft:The Roadmap to start a mine",
      description: "Embark on a transformative journey into the world of mining entrepreneurship at our exclusive workshop event, where luminous insights and polished strategies await. Join Minare 2024 to share the secrets of prospecting for opportunities, navigating the innovation minefield, and mastering financial fluency. This glittering experience extends beyond workshops, offering a gemstone gala of networking opportunities, where connections with fellow miners, investors, and visionaries could be the golden key to your entrepreneurial kingdom. Secure your spot now and let the mining spirit within you shine like a radiant diamond in the rough!",
      imgUrl: projImg3,
    },
    {
      title: "Optimizing Operations from Above: UAV WORKSHOP",
      description: "Join MINARE 24' for an immersive workshop on drone technology in mining.Tailored for professionals and enthusiasts, explore drones' cutting-edge applications, reshaping traditional practices for operational efficiency and sustainability. Gain invaluable insights into drones' transformative potential in  mining, ensuring you stay ahead of the curve. Reserve your spot now for innovation and excellence in mining.",
      imgUrl: projImg3,
    },
    {
      title: "Rock-On-Pap",
      description: "Experience the excitement of Minare 2024, organized by NIT Rourkela, where innovation meets opportunity. Showcase your groundbreaking research in our technical paper presentation, network with industry leaders, and contribute to the forefront of technological advancement. Elevate your academic and professional profile while engaging in a dynamic exchange of ideas. Don't miss out on this chance to be part of an extraordinary event shaping the future of technology",
      imgUrl: projImg3,
    },
    {
      title: "Mine Matrix:The Traesure Hunt",
      description: "Welcome to Mine Matrix: The Treasure Hunt, an exhilarating event that will test your problem-solving skills and teamwork like never before! Embark on an epic adventure through a labyrinth of clues and challenges, all set within the intriguing world of mining. Gather your team, sharpen your minds, and prepare to unravel mysteries, crack codes, and unearth hidden treasures. With each step, you'll delve deeper into the matrix, racing against time to emerge victorious. Will your team be the one to conquer the Mine Matrix and claim the ultimate prize? Join us for an unforgettable journey of exploration, discovery, and triumph at Mine Matrix: The Treasure Hunt",
      imgUrl: projImg2,
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
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                  </Nav>
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
