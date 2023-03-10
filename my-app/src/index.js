import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import { Container } from 'react-bootstrap';
import { Navbar } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import { NavDropdown } from 'react-bootstrap';
import { Image } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { Facebook, Twitter, Pinterest, Instagram, HouseFill, Search, PersonFill, Cart } from 'react-bootstrap-icons';


const TopMenu = () => (
    <Navbar bg="light" expand="lg">
      <Container>
        <Nav className="me-auto">
          <Nav.Link><Facebook/></Nav.Link>
          <Nav.Link><Twitter/></Nav.Link>
          <Nav.Link><Pinterest/></Nav.Link>
          <Nav.Link><Instagram/></Nav.Link>
        </Nav>
        <Nav className="justify-content-end">
          <Nav.Link><HouseFill/> </Nav.Link>
          <Nav.Link><Search/> </Nav.Link>
          <Nav.Link><PersonFill/> </Nav.Link>
          <NavDropdown title={<Cart/>}>
            <NavDropdown.Item></NavDropdown.Item>
            <NavDropdown.ItemText>Your cart is currently empty.</NavDropdown.ItemText>
          </NavDropdown>
        </Nav>
      </Container>
    </Navbar>
);
const IslandSnowLogo = () => (
      <Image className="rounded mx-auto d-block"
             src="http://courses.ics.hawaii.edu/ics314s23/morea/ui-frameworks/experience-islandsnow-bootstrap-logo.png"/>
);

const MiddleMenu = () => (

      <Row className="justify-content-lg-center pt-4">
        <Col></Col>
        <Col><NavDropdown title="Kid's" ></NavDropdown></Col>
        <Col><NavDropdown title="Men's" ></NavDropdown></Col>
        <Col><NavDropdown title="Women's" ></NavDropdown></Col>
        <Col><NavDropdown title="Brands" ></NavDropdown></Col>
        <Col>Search</Col>
        <Col></Col>
      </Row>
);

const FullWidthImage = () => (
    <Image className="img-fluid" src="https://courses.ics.hawaii.edu/ics314s23/morea/ui-frameworks/experience-islandsnow-bootstrap-main.png"></Image>

);

const FooterMenu = () => (
    <footer>

    <Row className="pt-4">
    <Col>
      NAVIGATION
      <hr/>
      <div>About Us</div>
      <div>Employment</div>
      <div>About Us</div>
    </Col>
    <Col>
      MAIN MENU
      <hr/>
      <div>Men</div>
      <div>Women</div>
      <div>Kids</div>
    </Col>
      <Col>
        Connect
        <hr />
        <div>Sign up for latest updates</div>
        <ButtonToolbar
            className="justify-content-between"
            aria-label="Toolbar with Button groups"
        >
          <InputGroup>
            <Form.Control
                type="text"
                placeholder="Enter Email Address"
                aria-label="Input group example"
                aria-describedby="btnGroupAddon2"
            />
            <Button variant="dark">Join</Button>
          </InputGroup>
        </ButtonToolbar>
      </Col>
    </Row>
  </footer>

);

const IslandSnow = () => (
    <Container>
      <TopMenu/>
      <IslandSnowLogo/>
      <MiddleMenu/>
      <FullWidthImage/>
      <FooterMenu/>
    </Container>
);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<IslandSnow />);
