import { Link } from 'react-router-dom';
import './Courses.css';




function Courses() {
    return (
    <>
    <h1><Link to="/home">Home</Link></h1>
    <h2>Courses</h2>;
    <ul>
    <li>QCTR-100:Fundamentals of Quality Control course from The American University in Cairo .</li>
    <li>Marketing Professional Course from American chamber of Commerce in Egypt .</li>
    <li>OSHA Construction course from Egyptian Syndicate of Scientific Professions .</li>
    <li>OSHA General Industry course from Egyptian Syndicate of Scientific Professions .</li>
    </ul>


    <nav  className="div2">
    <ul>
    <ul>
            <li><Link to="/Home">Home</Link></li>
            <li><Link to="/About">About</Link></li>
            <li><Link to="/profile-summary">Profile summary</Link></li>
            <li><Link to="/experience">Experience</Link></li>
            <li><Link to="/education-certification">Education & Certification</Link></li>
          </ul>
    </ul>
  </nav>
    </>
    )
  }

  export default Courses;