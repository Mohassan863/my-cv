import { Link } from 'react-router-dom';

import './EducationCertification.css'

function EducationCertification() {
    return (
    <>
    <h2>Education & Certification</h2>;
    
   <h1> Aswan University</h1>
<h2>BSc in chemistry & zoology Faculty of
Science.</h2>
<h1>Beni Suef University</h1>
<h2>Diploma in Biochemistry</h2>

<nav  className="div2">
    <ul>
    <ul>

            <li><Link to="/Home">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/profile-summary">Profile summary</Link></li>
            <li><Link to="/experience">Experience</Link></li>
            <li><Link to="/courses">Courses</Link></li>
          </ul>
    </ul>
  </nav>

    </>
    )
}

  export default EducationCertification;