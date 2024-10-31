import Hero from "@/Components/Hero/page";
import AboutSection from "@/Components/AboutSection/page";
import Skills from "@/Components/Skills/page";
import Projects from "@/Components/Projects/page";
import Contact from "@/Components/Contact/page";

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
