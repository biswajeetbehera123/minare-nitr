import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import logo from "../assets/img/Minare-logo-white.svg";
import MES from "../assets/img/MES-logo.svg";
import white from "../assets/img/mes-logo-white.png";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

import { Router, useNavigate } from "react-router-dom";
import {getAccomodationData, getNormalData} from '../firebase/db'



export const NavBar = () => {
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  };


  const handleNavigate = () => {
    navigate("/register");
  };

  const handleSponsor = () => {
    navigate("/sponsors");
  };

  return (
    
    <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
      <Container>
        <Navbar.Brand href="/">
          <img src={logo} alt="Logo" />
          <img src={white} alt="MES Logo" />
        </Navbar.Brand>
        <div className="ms-auto d-md-none navbar-text">
            <button className="vvd small-button" onClick={handleNavigate}>
              <span className="text-white border-white">Let’s Register</span>
            </button>
          </div>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link
              href="/"
              className={
                activeLink === "home" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("home")}
            >
              Home
            </Nav.Link>
            <Nav.Link

              href="/#about"
              className={
                activeLink === "projects" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("projects")}
            >
              About
            </Nav.Link>
            <Nav.Link

              href="/#project"
              className={
                activeLink === "projects" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("projects")}
            >
              Events
            </Nav.Link>
            <Nav.Link
              href="/gallery"
              className={
                activeLink === "skills" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("")}
            >
              Gallery
            </Nav.Link>
            <Nav.Link
              href="/sponsors"
              className={
                activeLink === "skills" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("skills")}
            >
              Sponsorship
            </Nav.Link>
            <Nav.Link
             href="/teams" 
             className={
              activeLink === '/teams' ? 'active navbar-link' : 'navbar-link'
              } 
              onClick={() => onUpdateActiveLink('teams')}
            >
              Team
            </Nav.Link>
          </Nav>
          <span className="navbar-text">
            <div className="social-icon">
              <a
                href="https://www.linkedin.com/company/mining-engineering-society-nit-rourkela/about/"
                target="_blank"
                rel="noreferrer"
              >
                <img src={navIcon1} alt="" />
              </a>
              <a href="https://www.facebook.com/minare.nitr/" target="_blank" rel="noreferrer">
                <img src={navIcon2} alt="" />
              </a>
              <a href="https://www.instagram.com/minare.nitr/" target="_blank" rel="noreferrer">
                <img src={navIcon3} alt="" />
              </a>
            </div>

            <button className="vvd" onClick={handleNavigate}>
              <span>Let’s Register</span>
            </button>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    
  );
};