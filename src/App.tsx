
import About from './About';
import ProfileSummary from './ProfileSummary';
import Experience from './Experience';
import Courses from './Courses';
import Home from './Home';
import EducationCertification from './EducationCertification';
import { BrowserRouter as Router, Route, Routes, Navigate} from 'react-router-dom';


function App() {

  return (
    <>
    
    <Router>
      <div  >
        
 <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/profile-summary" element={<ProfileSummary />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/education-certification" element={<EducationCertification />} />
        </Routes>
        </div>

  </Router>
    </>
    
  )
}

export default App;
