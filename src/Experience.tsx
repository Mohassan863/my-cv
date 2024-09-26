import { Link } from 'react-router-dom';

import './Experience.css';

function Experience() {
    return(
        <>
        <h2>Experience</h2>;
        <h2>Working as a chemist at Fatma El-Zahraa Hospital.</h2>
        <ul>
<li>Utilized advanced laboratory skills to analyze, measure, and record data.</li>
<li>Experienced in preparing buffers and reagents to exact specifications and standards. </li>
<li>Gained extensive experience in laboratory techniques, including titrations, distillations, and
chromatography.</li>
</ul>
<h2>Trainee at the National Research Center.</h2>
<ul>
<li>Carried out detailed investigations into the molecular biology of various enzymes.</li>
<li>Experienced in using chromatography, spectrophotometry, and titration for qualitative and quantitative analysis.</li>
<li>A variety of advanced genetic techniques including DNA activation and DNA replication have been used.</li>
</ul>
<h2>Trainee at The Nile for Pharmaceuticals & Chemical Industries .</h2>
<ul>
<li>Experienced in using chromatography, spectrophotometry, and titration for qualitative and quantitative analysis.</li>
<li>Conducted research to identify and develop new materials to meet customer requirements.</li>
<li>Utilized laboratory instrumentation such as HPLC, GC, and UV-Vis spectrophotometers for chemical analysis</li>
</ul>








<nav  className="div2">
    <ul>
    <ul>

            <li><Link to="/Home">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/profile-summary">Profile summary</Link></li>
            <li><Link to="/courses">Courses</Link></li>
            <li><Link to="/education-certification">Education & Certification</Link></li>
          </ul>
    </ul>
  </nav>
        </>
    ) 
  }

  export default Experience;