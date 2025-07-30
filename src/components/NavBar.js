import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import BorderColorIcon from "@material-ui/icons/BorderColor";
import EmailRoundedIcon from "@material-ui/icons/EmailRounded";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import GetAppIcon from "@material-ui/icons/GetApp";
import FacebookIcon from "@material-ui/icons/Facebook";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";
import "../styles/NavBar.css";

class NavBar extends React.Component {
  render() {
    return (
      <Navbar fixed="top" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#">Yousef Khattab</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#intro">Home</Nav.Link>
              <Nav.Link href="#about">About</Nav.Link>
              <Nav.Link href="#experience">Experience</Nav.Link>
              <Nav.Link href="#projects">Projects</Nav.Link>
              <Nav.Link 
                href="/assets/Youssef_Khattab_CV.pdf" 
                download="Youssef_Khattab_CV.pdf"
                className="cv-link"
              >
                CV
              </Nav.Link>
              <Nav.Link 
                href="/assets/Youssef_Khattab_CV.pdf" 
                download="Youssef_Khattab_CV.pdf"
                className="cv-link"
              >
                Portfolio
              </Nav.Link>
            </Nav>
            <Nav className="ml-auto">
              <Nav.Link href="mailto:yk0489972@gmail.com">
                <EmailRoundedIcon style={{ fontSize: 20 }}></EmailRoundedIcon>
              </Nav.Link>
              <Nav.Link 
                href="https://wa.me/201114582074"
                target="_blank"
                rel="noopener noreferrer"
                title="WhatsApp"
              >
                <WhatsAppIcon style={{ fontSize: 20 }}></WhatsAppIcon>
              </Nav.Link>
              <Nav.Link 
                href="https://www.facebook.com/share/14FWDBqwvMZ/"
                target="_blank"
                rel="noopener noreferrer"
                title="Facebook"
              >
                <FacebookIcon style={{ fontSize: 20 }}></FacebookIcon>
              </Nav.Link>
              <Nav.Link 
                href="/assets/Youssef_Khattab_CV.pdf" 
                download="Youssef_Khattab_CV.pdf"
                title="Download CV"
              >
                <GetAppIcon style={{ fontSize: 20 }}></GetAppIcon>
              </Nav.Link>                                                        
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
}

export default NavBar;