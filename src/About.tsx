import { Link } from 'react-router-dom';
import './About.css';
import myImage from './assets/my photo 2.png';




function About() {
    return(
<>
<div className="About-Me">
<div className="image">
<img src={myImage} alt="my-image" className="my-image" />
 </div>

<section className="Me">
<nav  className="nav">
    <ul  className="ul" >
            <li><Link className='link-l' to="/home">Home</Link></li>
            <li><Link to="/profile-summary">Profile summary</Link></li>
            <li ><Link to="/experience">Experience</Link></li>
            <li><Link to="/courses">Courses</Link></li>
            <li><Link to="/education-certification">Education & Certification</Link></li>
    </ul>
  </nav>
  <h2> About Me</h2>
  <p>
    I`m Mohamed Hassan ,I`m a chemist
    , graduated from faculty of science on 2022,
    I finished my military service on 1/2024, I work as a chemist at Fatma El-Zahraa Hospital,
    I have trained in many places, andI am now looking for a job as a chemist in a pharmaceutical company.
     </p>
</section>
<div className="sk-co">
<section className="Skills">
  <h2> Skills</h2>
  <ul>
  <li>Negotiation</li>
  <li>Creativity</li>  
  <li>Digital Marketing</li>  
  <li>Project Management </li>  
  <li>Critical Thinking</li>  
  <li>Management Skills</li>  
  <li>Leadership</li>  
  
  </ul>
  </section>
  <section className="Contact">
  <h2> Contact</h2>
  <ul>
    <li> phone: 01032932198</li>
    <li> email: mohassan863@outlook.com</li>
    <li> address:Alexandria, Egypt</li>
  </ul>
  </section>
  </div>
        

  <div className="download"> 
  <button className="download-button"> Download my cv </button>
  </div>
  </div>
<div>
 
</div>

  
        </>
    ) 
  }

  export default About;