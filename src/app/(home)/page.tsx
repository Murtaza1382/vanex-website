import AboutPage from "@/src/features/about/About-Page";
import ContactPage from "@/src/features/contact/Contact-Page";
import HomePage from "@/src/features/home/home-page";
import ServicePage from "@/src/features/services/Service-Page";

export default function Home() {
  return (
    <div className="mt-20">
      <section id="home" className="scroll-mt-20">
        <HomePage />
      </section>
      <section id="services" className="scroll-mt-20">
        <ServicePage />
      </section>
      <section id="about" className="scroll-mt-20">
        <AboutPage />
      </section>
      <section id="about" className="scroll-mt-20">
        <ContactPage />
      </section>
    </div>
  );
}
