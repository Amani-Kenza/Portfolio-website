import { useState, useEffect } from "react";
import '../tailwind.css';
import { Navbar, Container, Nav } from "react-bootstrap";

import CloseIcon from '@mui/icons-material/Close.js';
import { Certificates } from './Certificates.js';

export const NavBar = () => {
  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);


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
    if (window.innerWidth <= 640) {
      setMenuOpen(false);
    }
  };
  // Fonction pour fermer le menu
  const closeMenu = () => {
    setMenuOpen(false);
  };
  return (
    <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
      <Container style={{ display: 'flex' }}>
        <Navbar.Brand href="#home">
          <h1 className="logo">KEN<span className="za-text">ZA</span></h1>
        </Navbar.Brand>
        {window.innerWidth <= 640 && (
          <div className={`menu-bars ${menuOpen ? 'open left-menu' : ''}`} onClick={() => {
            setMenuOpen(!menuOpen);
          }}>
            {menuOpen ? (
              <>
              <CloseIcon style={{ fontSize: 50, color: 'red', marginLeft: '10px' }} onClick={closeMenu} />
              
              </>
            ) : (
              <>
                <div className="menu-bar"></div>
                <div className="menu-bar"></div>
                <div className="menu-bar"></div>
              </>
            )}
          </div>
        )}
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className={`ms-auto ${window.innerWidth <= 640 && menuOpen ? 'active' : ''}`}>
            <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
            <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
            <Nav.Link href="#certificates" className={activeLink === 'certificates' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('certificates')}>Certificates</Nav.Link>
            <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
          </Nav>
          <span className="navbar-text">
          <a href="#connect"><button className="vvd"><span>Let’s Connect</span></button></a>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
