import './login.css';
import logimg from "./images/Login Screen/login.jpg";

function Login() {
    return (
      <div className="register-page">
               <div className='reg-container'>
                   <div className="container-left">
                       <img src={logimg} alt="register img" className='reg-img img-fluid '></img>
                   </div>
                   <div className='container-right'>        
                   <div className="logo-cont " style={{marginBottom:"60px"}}>
                                <span className="logo-text">EduTorq</span>
                            </div>
                            <div className="textbox-cont">
                                <span className="fa fa-envelope icon-color" style={{ fontSize: "0.9rem" }}></span>
                                <input type="text" placeholder="E-Mail" onChange />
                            </div>
                            <div className="textbox-cont">
                                <span className="fa fa-lock icon-color" style={{ }}></span>
                                <input type="password" placeholder="Password" onChange />
                            </div>
                            <div className="forgot-password">Forgot Password ?</div>
                            <div class="checkbox">
                                    <label style={{ fontSize: "12px" }}><input type="checkbox" value="" />   Remember Me</label>
                                </div>
                            <div className='text-center mt-3 '>
                            <button className="logreg-button " onClick>
                              <span><b>Log In</b></span>      
                            </button>
                            </div>
                            <div></div>
                   </div>
               </div>
      </div>
    );
  }
  
  export default Login;