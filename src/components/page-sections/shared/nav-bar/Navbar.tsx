import * as React from 'react'
import { Link } from 'gatsby'
import { Container, Navbar as BsNavbar, Nav } from 'react-bootstrap';
import { StaticImage } from 'gatsby-plugin-image';

import GetStartedButton from '../../../buttons/GetStartedButton';
import {
  navbar,
  navbarContainer,
} from './Navbar.module.scss';


const Navbar: React.FC = () => {

  return (
    <div className={navbarContainer}>
      <BsNavbar className={navbar} expand="lg">
        <Container fluid className="mx-md-3">
          <BsNavbar.Brand className="me-auto">
            <Link to='/'>
              <StaticImage
                src="../../../../images/Insightful-IR-Web-Logo.png"
                alt="Insightful IR Logo"
                className="img-fluid"
                width={151}
              />
            </Link>
          </BsNavbar.Brand>

          <BsNavbar.Toggle className="navbar-mobile-menu" aria-controls="navbarDropdown" />
          <BsNavbar.Collapse id="navbarDropdown" className="navbar-mobile-menu">
            <Nav className="ms-auto">
              <Link to='/pricing' className='nav-link'>Pricing</Link>
              <Link to='/contact' className='nav-link'>Contact</Link>
              <GetStartedButton />
            </Nav>
          </BsNavbar.Collapse>
        </Container>
      </BsNavbar>
    </div>
  );
};

export default Navbar;