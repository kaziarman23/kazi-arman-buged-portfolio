import AboutSection from "@/Components/AboutSection/page";
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
    </main>
  );
};

export default Home;
