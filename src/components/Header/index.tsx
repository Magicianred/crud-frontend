import React from 'react';
import { 
  Button, 
  Form, 
  FormControl, 
  Nav, 
  Navbar,
} from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Navbar.Brand href="#home">CRUD Front-End</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto" >
          <Nav.Item as={Link} className="nav-link" to="/">Início</Nav.Item>
          <Nav.Link as={Link} className="nav-link" to="/tarefas">Tarefas</Nav.Link>
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-success">Search</Button>
        </Form>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default Header;