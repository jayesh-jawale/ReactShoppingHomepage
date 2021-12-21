import {Navbar, Container, Nav, NavDropdown, Button, Badge} from 'react-bootstrap';
import {AiOutlineShoppingCart} from 'react-icons/ai'

export function MyNavBar({ cart }){
    return (
  <Navbar bg="light" expand="lg">
    <Container>
      <Navbar.Brand href="#home">Shopping</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#link">About</Nav.Link>
          <NavDropdown title="Shop" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">All Products</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Popular Items</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">New Arrivals</NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Button variant="primary">
            <AiOutlineShoppingCart/> Cart <Badge bg="secondary">{cart}</Badge>
          </Button>
      </Navbar.Collapse>
    </Container>
  </Navbar>
    )
  }