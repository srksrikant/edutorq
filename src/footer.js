import React from "react";
import "./footer.css"
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

const Footer = () => {
  return (
    <MDBFooter  className="font-small pt-4 mt-4 footer-container">
      <MDBContainer fluid className="text-center text-md-left">
        <MDBRow >
          <MDBCol md="3" style={{color:"black"}}>
            <h5 className="logo-text">EduTorq</h5>
            <p>
              Here you can use rows and columns here to organize your footer
              content.
            </p>
            <div className="footer-copyright" style={{backgroundColor:"white"}}>
        <MDBContainer fluid style={{color:"black"}}>
          &copy; {new Date().getFullYear()} Copyright: <a href="javascript:void(0);" style={{color:"black"}}>EduTorq </a>
        </MDBContainer>
      </div>
          </MDBCol>
          <MDBCol md="3" style={{color:"black"}}>
            <ul style={{padding:"0px"}}>
            <h5 className="title">About Us</h5>
              <li className="list-unstyled">
                <a href="#!">Jion Our Team </a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Terms and Services</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Privacy Policy</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Resolve Complaints</a>
              </li>
            </ul>
          </MDBCol>
          <MDBCol md="3" style={{color:"black"}}>
        
            <ul style={{padding:"0px"}}>
            <h5 className="title">Useful Links</h5>
              <li className="list-unstyled">
                <a href="#!">Event</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Blogs</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">FAQ</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">What We Offer</a>
              </li>
            </ul>
          </MDBCol>
          <MDBCol md="3" style={{color:"black"}}>
        
        <ul style={{padding:"0px"}}>
        <h5 className="title">Contact Info</h5>
          <li className="list-unstyled">
          <i className="fas fa-map-marker-alt mr-2  " style={{color: '#008cc8'}} />BHive, 27th Main, 2nd <br /> Sector, HSR Layout, <br /> Bengaluru, Karnataka - <br /> 560102
          </li>
          <li className="list-unstyled">
          <i className="fas fa-phone mt-3 mr-2 mb-3 " style={{color: '#008cc8'}} /><a className="link-color" href="tel:+91-83031 74782" style={{letterSpacing: '2px'}}>+91-83031 74782</a>
          </li>
          <li className="list-unstyled">
          <i className="fas fa-envelope mr-2" style={{color: '#008cc8'}} /><a className="link-color" href="mailto:info@devtorq.in" style={{letterSpacing: '2px'}}>info@devtorq.in</a>          </li>
        </ul>
      </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-3" style={{backgroundColor:"white"}}>
        <MDBContainer fluid  style={{color:"black"}}>
        <span className="social-icon-footer"><i class="fab fa-facebook-f "></i></span>
        <span className="social-icon-footer"><i class="fab fa-linkedin-in "></i></span>
        <span className="social-icon-footer"><i class="fab fa-twitter "></i></span>
         
        </MDBContainer>
      </div>
    </MDBFooter>
  );
}

export default Footer;