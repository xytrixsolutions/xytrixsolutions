import { JSX } from "react";
import { Navbar } from "./components/Navbar/Navbar";
import { Hero } from "./components/Hero/Hero";
import { Projects } from "./components/Projects/Projects";
import { About } from "./components/About/About";
import { Services } from "./components/Services/Services";
import { Contact } from "./components/Contact/Contact";

const Home = (): JSX.Element => (
  <>
    <Navbar />
    <Hero />
    <About />
    <Services />
    <Projects />
    <Contact />
  </>
);

export default Home;
