import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';

const Header = () => {
   const [user] = useAuthState(auth);
   const handleSignOut = () => {
      signOut(auth);
   }
   return (
      <div>
         <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
               <Navbar.Brand as={Link} to="/home">Bike Warehouse</Navbar.Brand>
               <Navbar.Toggle aria-controls="responsive-navbar-nav" />
               <Navbar.Collapse id="responsive-navbar-nav">
                  <Nav className="me-auto">
                     <Nav.Link as={Link} to="/Home">Home</Nav.Link>
                     <Nav.Link as={Link} to="/products">Products</Nav.Link>
                  </Nav>
                  <Nav>
                     <Nav.Link as={Link} to="/blogs">Blogs</Nav.Link>
                     {
                        user && <>
                           <Nav.Link as={Link} to="/addbike">Add Products</Nav.Link>
                           <Nav.Link as={Link} to="/managebikes">Manage Products</Nav.Link>
                        </>

                     }
                     {user ?

                        <button className='btn btn-link text-white text-decoration-none' onClick={handleSignOut}>Sign Out</button>
                        :
                        <Nav.Link as={Link} to="/login">
                           Login
                        </Nav.Link>}
                  </Nav>
               </Navbar.Collapse>
            </Container>
         </Navbar>
      </div>
   );
};

export default Header;