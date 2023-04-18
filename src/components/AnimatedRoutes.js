import { Routes, Route, useLocation } from 'react-router-dom';

import Landing from '../pages/landing/Landing';
import About from '../pages/about/About';
import Portfolio from '../pages/portfolio/Portfolio';
import Contact from '../pages/contact/Contact';
//import Certifications from '../pages/certifications/Certifications';
import Certificate from '../pages/certifications/Certifications';

const AnimatedRoutes = ({ personalDetails }) => {
  const location = useLocation();

  return (
    <Routes location={location} key={location.pathname}>
      <Route
        path="/"
        element={
          <Landing
            name={personalDetails.name}
            tagline={personalDetails.tagline}
          />
        }
      />
      <Route
        path="/about"
        element={
          <About
            name={personalDetails.name}
            location={personalDetails.location}
            email={personalDetails.email}
            availability={personalDetails.availability}
            brand={personalDetails.brand}
          />
        }
      />
      <Route path="/portfolio" element={<Portfolio />} />
      <Route
        path="/contact"
        element={
          <Contact
            name={personalDetails.name}
            location={personalDetails.location}
            email={personalDetails.email}
          />
        }
      />
      <Route
        path="/certifications"
        element={
          <Certificate
            technology={personalDetails.technology}
            title={personalDetails.title}
            image={personalDetails.image}
            color={personalDetails.color}
            id={personalDetails.id}
          />
        }
      />
    </Routes>
  );
};

export default AnimatedRoutes;
