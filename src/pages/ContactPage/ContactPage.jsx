import SEO from "../../components/common/SEO";
import Layout from "../../components/Layout";
import { Hero, ContactInfo, ContactForm, FAQ } from "../../features/Contact";

const ContactPage = () => {
  return (
    <>
      <SEO
        title="Contact | Orlando Dela Cruz"
        description="Get in touch with Orlando Dela Cruz — Front-End Web Developer. I'm open to freelance opportunities, collaborations, and project discussions."
        path="/contact"
      />

      <Layout>
        <Hero />
        <ContactForm />
        <ContactInfo />
        <FAQ />
      </Layout>
    </>
  );
};

export default ContactPage;
