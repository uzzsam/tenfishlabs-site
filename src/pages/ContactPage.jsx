import { Container, CenteredIntro } from '../components/primitives.jsx';
import ContactSection from './ContactSection.jsx';

export default function ContactPage({ go }) {
  return (
    <main className="page-in">
      <section className="pt-24 pb-12 md:pt-36 md:pb-16">
        <Container>
          <CenteredIntro
            eyebrow="CONTACT"
            title={<>Talk to Ten Fish Labs</>}
            intro="For subscription access, private deployments, white-label licensing, or a general enquiry — use the form below, or email the team directly."
          />
        </Container>
      </section>
      <ContactSection go={go} standalone />
    </main>
  );
}
