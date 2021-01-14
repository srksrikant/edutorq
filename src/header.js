import "./header.css";
import {  Navbar , Nav , NavDropdown } from 'react-bootstrap';


function  Header () {

    return(
        <>
            <Navbar collapseOnSelect expand="lg" >
  <Navbar.Brand href="#home" className="logo-text" >EduTorq</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav"  />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
      
      {/* <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
        <NavDropdown.Item href="#action/3.1" className='nav-bar-text'>Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2" className='nav-bar-text'>Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3" className='nav-bar-text'>Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4" className='nav-bar-text'>Separated link</NavDropdown.Item>
      </NavDropdown> */}
    </Nav>
    <Nav>
    <Nav.Link href="#features" className='nav-bar-text nav-head'  >Courses</Nav.Link>
    <Nav.Link href="#pricing" className='nav-bar-text nav-head'>Labs</Nav.Link>
    <Nav.Link href="#pricing" className='nav-bar-text nav-head'>Blogs</Nav.Link>
    <Nav.Link href="#deets" className='nav-bar-text ' > <button className="logreg-button " onClick>
                              <span><b>Login</b></span>      
                            </button></Nav.Link>
    <Nav.Link href="#deets" className='nav-bar-text sign-up-btn '> <button className="logreg-button  " onClick >
                              <span><b>Register</b></span>      
                            </button></Nav.Link>
      {/* <Nav.Link eventKey={2} href="#memes">
       Sign Up
      </Nav.Link> */}
    </Nav>
  </Navbar.Collapse>
</Navbar>
        </>
    );
}
export default Header;