// Footer.js
import React from "react";
import "../styles/Footer.css";
import { Container, Nav } from "react-bootstrap";
import EmailRoundedIcon from "@material-ui/icons/EmailRounded";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";
import FacebookIcon from "@material-ui/icons/Facebook";
import GetAppIcon from "@material-ui/icons/GetApp";

function Footer() {
  return (
    <footer className="bg-dark text-light py-4 mt-5">
      <Container className="text-center">
        {/* Section Navigation Links */}
        <Nav className="justify-content-center mb-3">
          <Nav.Link href="#intro" className="text-light mx-2">
            Home
          </Nav.Link>
          <Nav.Link href="#about" className="text-light mx-2">
            About
          </Nav.Link>
          <Nav.Link href="#experience" className="text-light mx-2">
            Experience
          </Nav.Link>
          <Nav.Link href="#projects" className="text-light mx-2">
            Projects
          </Nav.Link>
          <Nav.Link
            href="/assets/Youssef_Khattab_CV.pdf"
            download="Youssef_Khattab_CV.pdf"
            className="text-light mx-2"
          >
            CV
          </Nav.Link>
          <Nav.Link
            href="/assets/port.pdf"
            download="port.pdf"
            className="text-light mx-2"
          >
            Portfolio
          </Nav.Link>
        </Nav>

        {/* Icon Buttons */}
        <Nav className="justify-content-center">
          <Nav.Link href="mailto:yk0489972@gmail.com" className="text-light mx-2">
            <EmailRoundedIcon style={{ fontSize: 22 }} />
          </Nav.Link>
          <Nav.Link
            href="https://wa.me/201114582074"
            target="_blank"
            rel="noopener noreferrer"
            title="WhatsApp"
            className="text-light mx-2"
          >
            <WhatsAppIcon style={{ fontSize: 22 }} />
          </Nav.Link>
          <Nav.Link
            href="https://www.facebook.com/share/14FWDBqwvMZ/"
            target="_blank"
            rel="noopener noreferrer"
            title="Facebook"
            className="text-light mx-2"
          >
            <FacebookIcon style={{ fontSize: 22 }} />
          </Nav.Link>
          <Nav.Link
            href="/assets/Youssef_Khattab_CV.pdf"
            download="Youssef_Khattab_CV.pdf"
            title="Download CV"
            className="text-light mx-2"
          >
            <GetAppIcon style={{ fontSize: 22 }} />
          </Nav.Link>
        </Nav>

        {/* Footer Text */}
   
      </Container>
    </footer>
  );
}

export default Footer;
