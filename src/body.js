import "./body.css";
import edu from "./images/edu.jpg";
import pongal from './images/pongal.jpg';
import program from './images/program.jpg';

function Body (){
    return (
        <>
         {/* <div className='main-container'>
          <div className='left-container'>
          <h3 className='logo-text py-3'>EduTorq</h3>
              <h5 className='text-center'>We Provide What you Actually Need</h5>
              <p className='text-center'>We at EduTorq help our students by providing
One-One Career Counseling and Mentorship, Personalized Trainings, Mock Interviews that strengthen their confidence to get their dream job.</p>
                <button className="logreg-button " onClick>
                    <span><b>Join With Us</b></span>      
                 </button>
         
          </div>  
          <div className='right-container'>
          <img src={pongal} alt="Pongal Img" className='reg-img img-fluid '></img>
          </div>
      </div> */}
      <div className='main-container'>
         <div className='sub-container'>
         <div className='left-container'>
              <h3 className='logo-text py-3'>EduTorq</h3>
              <h5 className='text-center'>We Provide What you Actually Need</h5>
              <p className='text-center'>We at EduTorq help our students by providing
                            One-One Career Counseling and Mentorship, Personalized Trainings, Mock Interviews that strengthen their confidence to get their dream job.</p>
                <button className="logreg-button " onClick>
                    <span><b>Join With Us</b></span>      
                 </button>
          </div>  
          <div className='right-container'>
          <img src={edu} alt="register img" className='reg-img img-fluid '></img>
          </div>
         </div>
     <div className='text-center '>
         <p className='what-is-edu'>
             <span>What is </span><span className='text-color'>EduTorq</span>
         </p>
         <p className='para'><span className='para-text'><b>EduTorq</b></span> is a platform and ecosystem that connects tech talents with opportunities across Asia. We support people to build their skills, their connections, their teams and their careers.</p>

     </div>
     <div className='sub-container py-5'>
         <div className='left-container'>
              {/* <h3 className='logo-text py-3'>EduTorq</h3> */}
              <h5 className='text-center' style={{fontSize:"2rem"}}>Become a Programmer</h5>
              <p className='text-center'>Learn and Practise Programming with courses created by industry experts</p>
                <button className="logreg-button " onClick>
                    <span><b>Start Programming</b></span>      
                 </button>
          </div>  
          <div className='right-container'>
          <img src={program} alt="register img" className='reg-img img-fluid program-img  '></img>
          </div>
         </div>
         <div className='text-center'>
         <button className="logreg-button " onClick>
                    <span style={{fontSize:"1.1rem"}}><b>Create Your Profile Now</b></span>      
        </button>
         </div>
         <div className='sub-container py-5'>
             <div className='text-center'>
             <h6 style={{fontSize:"2rem "}} >Unlock The Premium features</h6>
             <p></p>
             </div>
         </div>
         <div className='sub-container'>
            <div className='free-membership'>
               <div className='free-head'>
               <p>Free Membership</p>
               </div>
            </div>
            <div className='premium-membership'>
            <div className='pre-head'>
               <p>Premium Membership</p>
               </div>
            </div>
         </div>
      </div>
     

  </>
    );
}
export default Body;