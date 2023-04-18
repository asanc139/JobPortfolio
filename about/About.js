import AboutMe from '../../components/AboutMe';
import CodeCademyCertifications from '../../components/CodeCademyCertifications';
import PageHeader from '../../components/PageHeader';
import { Helmet } from 'react-helmet-async';

const About = ({ name, location, brand, email, availability }) => {
  return (
    <section className="about">
      <PageHeader title="About Me" description="Let me introduce myself" />
      <AboutMe
        name={name}
        location={location}
        brand={brand}
        email={email}
        availability={availability}
      />
    </section>
  );
};

export default About;
