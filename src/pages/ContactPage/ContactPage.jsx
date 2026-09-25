import SEO from "../../components/common/SEO";
import { Hero, ContactInfo, ContactForm, FAQ } from "../../features/Contact";

const ContactPage = () => {
  return (
    <>
      <SEO
        title="Contact | Orlando Dela Cruz"
        description="Get in touch with Orlando Dela Cruz — Front-End Web Developer. I'm open to freelance opportunities, collaborations, and project discussions."
        path="/contact"
      />

      <Hero />
      <ContactForm />
      <ContactInfo />
      <FAQ />
    </>
  );
};

export default ContactPage;
