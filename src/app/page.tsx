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

// website is working on localhost but it's not working when i deploy it
// because react is updating and nextjs have the old default setting's stuff
// that's why there were happening a dev-depandence conflict.
// have to wait for the updated nextjs version
// Time: 2.32 
// PM Date: 3/11/24 
// I am the real loser....