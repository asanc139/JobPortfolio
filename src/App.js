import Header from './components/Header';
import AnimatedRoutes from './components/AnimatedRoutes';

function App() {
  const personalDetails = {
    name: 'Armando Sanchez',
    location: 'Los Angeles, CA',
    tagline: 'Mern Stack Developer | React Developer',
    email: 'armandosanchez855@yahoo.com',
    availability: 'Open for work',
    brand:
      "My unique blend of technical expertise, creative thinking, problem solving, and background in Sociology allows me to approach each project with a deep understanding of the end user's perspective, resulting in highly effective user experience in my work.",
  };

  return (
    <>
      <Header />
      <AnimatedRoutes personalDetails={personalDetails} />
    </>
  );
}

export default App;
