import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
/*import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";*/
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const GL = () => {

  const projects = [
    {
      title: "UAV WORKSHOP",
      description: "Join MINARE 24' for an immersive workshop on drone technology in mining.Tailored for professionals and enthusiasts, explore drones' cutting-edge applications, reshaping traditional practices for operational efficiency and sustainability. Gain invaluable insights into drones' transformative potential in  mining, ensuring you stay ahead of the curve. Reserve your spot now for innovation and excellence in mining.",
      imgUrl: "https://res.cloudinary.com/daho6qhd0/image/upload/v1710151101/minare/g_b9m8ol.png",
      RulesToFollow:"Enjoy-the-Event",
    },

    {
        title: "Minecarft:The Roadmap to start a mine",
        description: "Discover mining entrepreneurship at Minare 2024. Learn prospecting, innovation, and financial mastery at our exclusive workshop. Network with miners, investors, and visionaries. Secure your spot to unlock the secrets of success in the mining industry. Join us for an enlightening experience that could shape your entrepreneurial journey. Don't miss out on this opportunity to connect, learn, and thrive in the world of mining entrepreneurship!",
        imgUrl: "https://res.cloudinary.com/daho6qhd0/image/upload/v1710151128/minare/h_gxalom.png",
        RulesToFollow:"Enjoy-the-Event",
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
                  <div class="div1">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                  <Nav.Item>
                      <Nav.Link eventKey="first">UAV Workshop</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                  <Nav.Item>
                      <Nav.Link eventKey="first">Guest Lecture</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  </div>
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