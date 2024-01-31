import "./Navbar.css"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


function navbar() {

  return (
    <Navbar collapseOnSelect expand="lg" className="Nav fixed-top p-3">
      <Container>
        <Navbar.Brand className="logo" href="#">Appland</Navbar.Brand>
        <Navbar.Toggle  aria-controls="responsive-navbar-nav" style={{border:"none" ,boxShadow:"none",color:" #353d51"}} />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#Home">Home</Nav.Link>
            <Nav.Link href="#App-Features">App Features</Nav.Link>
            <Nav.Link href="#Gallery">Gallery</Nav.Link>
            <Nav.Link href="#Pricing">Pricing</Nav.Link>
            <Nav.Link href="#F.A.Q">F.A.Q</Nav.Link>

            <NavDropdown title="Dropdown" id="collapsible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
          <Nav>
            <a href="#App-Features" className="btn btn-Nav border-0" style={{color:"#fff",backgroundColor:'#47536e'}}>Get Started</a>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default navbar;

