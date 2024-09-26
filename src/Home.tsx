import './Home.css';
import { Link } from 'react-router-dom';
import myImage from './assets/my photo.png';



function Home() {
    return(
      
        <section className="home">
  
  <div className="text">
    <h3>Hi, I am</h3>
  <h1>Mohamed hassan
  <p> chemist & front end developer</p>
  </h1>


  <div className="social-icons">
    <a href="https://github.com/Mohassan863" target="_blank"><i className="fab fa-github"></i></a>
    <a href="https://www.linkedin.com/in/mohamed-hassan-22b15a1a6?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank"><i className="fab fa-linkedin"></i></a>
    <a href="https://www.instagram.com/amrhassan863?utm_source=qr&igsh=emxtZjh2eGU3Zjlr" target="_blank"><i className="fab fa-instagram"></i></a>
    <a href="https://www.facebook.com/share/hrvmYQQLiBYnsink/?mibextid=qi2Omg" target="_blank"><i className="fab fa-facebook"></i></a>
    </div>
</div>

<div className="image">
<div  className="div2">
    
    <ul>
            <li ><Link to="/about">About</Link></li>
            <li><Link to="/profile-summary">Profile summary</Link></li>
            <li><Link to="/experience">Experience</Link></li>
            <li><Link to="/courses">Courses</Link></li>
            <li  className="edu" ><Link to="/education-certification">Education & Certification</Link></li>
          </ul>
    
  </div>


<img src={myImage} alt="my-image" className="my-image" />
</div>



  </section>
  

    ) 
  }

  export default Home;