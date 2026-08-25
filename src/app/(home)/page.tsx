import AboutPage from "@/src/features/about/About-Page";
import HomePage from "@/src/features/home/home-page";

export default function Home() {
  return (
    <div className="mt-20">
      <section id="home" className="scroll-mt-20">
        <HomePage />
      </section>
      <section id="about" className="scroll-mt-20">
        <AboutPage />
      </section>
    </div>
  );
}
