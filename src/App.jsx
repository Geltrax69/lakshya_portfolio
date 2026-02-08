// import components
import Hero from "./components/Hero";
import Navbar from "./Layouts/Navbar";
import Skills from "./components/Skills";

import Projects from "./components/Projects";


const App = () => {
  return (
    <div className="h-screen overflow-y-scroll snap-y snap-mandatory">
      <Navbar />
      <Hero />
      <Skills />

      <Projects />

    </div>
  );
};

export default App;
