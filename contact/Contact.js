import PageHeader from '../../components/PageHeader';
import SocialIcons from '../../components/SocialIcons';
import Form from '../../components/Form';
import ContactInfo from '../../components/ContactInfo';
import Email from '../../components/Email';

const Contact = ({ name, email, location }) => {
  return (
    <section className="contact">
      <PageHeader
        title="Contact Information"
        description="Let's get in touch!"
      />
      <div className="contactWrap container">
        <div className="row">
          <div className="col-12 col-lg-6">
            <Email />
          </div>
          <div className="col-12 col-lg-6">
            <ContactInfo name={name} location={location} email={email} />
          </div>
        </div>
      </div>

      <SocialIcons />
    </section>
  );
};

export default Contact;
