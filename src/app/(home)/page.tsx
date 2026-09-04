import AboutPage from "@/src/features/about/About-Page";
import HomePage from "@/src/features/home/home-page";
import ServicePage from "@/src/features/services/Service-Page";
import Portfolio from "@/src/features/portfolio/Portfolio-Page";

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
      <section id="portfolio" className="scroll-mt-20">
        <Portfolio />
      </section>
    </div>
  );
}
