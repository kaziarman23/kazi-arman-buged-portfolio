import AboutSection from "@/Components/AboutSection/page";
import Contact from "@/Components/Contact/page";
import Hero from "@/Components/Hero/page";
import Projects from "@/Components/Projects/page";
import Skills from "@/Components/Skills/page";

const Home = () => {
  return (
    <main>
      <Hero />
      <AboutSection />
      <Skills />
      <Projects />
      <Contact />
    </main>
  );
};

export default Home;
