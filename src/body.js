import "./body.css";
import edu from "./images/edu.jpg"

function Body (){
    return (
        <>
      <div className='main-container'>
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

  </>
    );
}
export default Body;