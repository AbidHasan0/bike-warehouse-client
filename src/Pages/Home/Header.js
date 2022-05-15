import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
   return (
      <div>
         <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
               <Navbar.Brand as={Link} to="/home">Bike Warehouse</Navbar.Brand>
               <Navbar.Toggle aria-controls="responsive-navbar-nav" />
               <Navbar.Collapse id="responsive-navbar-nav">
                  <Nav className="me-auto">
                     <Nav.Link as={Link} to="/Home">Home</Nav.Link>
                     <Nav.Link as={Link} to="//products">Products</Nav.Link>
                  </Nav>
                  <Nav>
                     <Nav.Link as={Link} to="/blogs">Blogs</Nav.Link>
                     <Nav.Link as={Link} to="/login">
                        Login
                     </Nav.Link>
                  </Nav>
               </Navbar.Collapse>
            </Container>
         </Navbar>
      </div>
   );
};

export default Header;