import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import logo from '../assets/img/Minare-logo-white.svg';
import MES from '../assets/img/MES-logo.svg';
import white from '../assets/img/mes-logo-white.png';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';
import RegisterForm from './register/index';
import { HashLink } from 'react-router-hash-link';
import { Modal } from 'react-bootstrap';
import {
  BrowserRouter as Router
} from "react-router-dom";

export const NavBar = () => {

  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const [showRegister, setShowRegister] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [])

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  }

  return (
    <Router>
      <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
        <Container>
          <Navbar.Brand href="/">
            <img src={logo} alt="Logo" />
            <img src={white} alt="MES Logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
              <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Sponsors</Nav.Link>
              <Nav.Link href="#project" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Events</Nav.Link>
              <Nav.Link href="#skill" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Team</Nav.Link>
            </Nav>
            <span className="navbar-text">
              <div className="social-icon">
                <a href="https://www.linkedin.com/company/mining-engineering-society-nit-rourkela/about/" target="_blank"><img src={navIcon1} alt="" /></a>
                <a href="https://www.facebook.com/minare.nitr/" target="_blank"><img src={navIcon2} alt="" /></a>
                <a href="https://www.instagram.com/minare.nitr/" target="_blank"><img src={navIcon3} alt="" /></a>
              </div>
              <HashLink to='#connect'>
                <button
                  className="vvd"
                  onClick={() => setShowRegister(true)}
                >
                  <span>Let’s Register</span>
                </button>
              </HashLink>
              <Modal show={showRegister} onHide={() => setShowRegister(false)} centered>
        <Modal.Body>
          <RegisterForm />
        </Modal.Body>
      </Modal>
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Router>
  )
}