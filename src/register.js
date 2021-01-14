import './register.css';
import regimg from "./images/Login Screen/login.jpg";
import { bottom } from '@popperjs/core';

function register() {
    return (
      <div className="register-page">
               <div className='reg-container'>
                   <div className="container-left">
                       <img src={regimg} alt="register img" className='reg-img img-fluid '></img>
                   </div>
                   <div className='container-right'>
                          <div className="logo-cont " style={{marginBottom:"40px"}}>
                                <span className="logo-text">EduTorq</span>
                            </div>
                       <div className="textbox-cont">
                                <span className="fa fa-user icon-color" style={{fontSize: "0.9rem" }}></span>
                                <input type="text" placeholder="Name"  />
                            </div>
                            <div className="textbox-cont">
                                <span className="fa fa-envelope icon-color" style={{ fontSize: "0.9rem" }}></span>
                                <input type="text" placeholder="E-Mail" onChange />
                            </div>
                            <div className="textbox-cont">
                                <span className="fa fa-lock icon-color" style={{ }}></span>
                                <input type="password" placeholder="Password" onChange />
                            </div>
                            <div className="textbox-cont">
                                <span className="fa fa-lock icon-color" style={{ }}></span>
                                <input type="password" placeholder="Confirm Password" onChange/>
                            </div>
                            <div className="textbox-cont">
                                <span className="fa fa-phone icon-color" style={{ }}></span>
                                <input type="text" placeholder="Phone No." onChange/>
                            </div>
                            <div className='text-center mt-3 '>
                            <button className="logreg-button " onClick>
                              <span><b>Sign Up</b></span>      
                            </button>
                            </div>
                   </div>
               </div>
      </div>
    );
  }
  
  export default register;