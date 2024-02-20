import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from 'react-router-dom';
function NavBar() {

  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 40) {
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
      <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
        <Container>
          <Navbar.Brand href="#" className="text-white ">
            MSD
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Link to="/" className={activeLink === 'home' ? ' active nav-link navbar-link' : 'nav-link  navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Link>
              <Link to="/about" className={activeLink === 'about' ? ' active  nav-link navbar-link' : 'nav-link navbar-link'} onClick={() => onUpdateActiveLink('about')}>About</Link>
              <Link to="/test" className={activeLink === 'test' ? 'active nav-link navbar-link' : 'nav-link navbar-link'} onClick={() => onUpdateActiveLink('test')}>Test</Link>
              <Link to="/contact" className={activeLink === 'Contact' ? 'active nav-link navbar-link' : 'nav-link navbar-link'} onClick={() => onUpdateActiveLink('Contact')}>Contact</Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
  )
}
export default NavBar ;
