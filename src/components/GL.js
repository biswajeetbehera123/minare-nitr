import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import ROP from "../assets/img/Rock on pap.pdf";
import OAQ from "../assets/img/Ore-acle Quest.pdf";
import CO from "../assets/img/Case Ore rules.pdf";

export const GL = () => {

  const projects = [
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
    
    
    
   
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                  <Nav.Item>
                      <Nav.Link eventKey="first">Guest Lecture</Nav.Link>
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
