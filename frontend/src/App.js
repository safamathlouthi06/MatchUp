import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import { initLandingScripts } from './utils/landingScripts';


import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Feature from "./components/Feature";
import FeaturesCards from "./components/FeaturesCards";
import Testimonials from "./components/Testimonials";
import Stats from "./components/Stats";
import Services from "./components/Services";
import Pricing from "./components/Pricing";
import Contact from "./components/Contact";
function App() {
  return (
    <div className="App">
     <Header />
      <Hero />
      <About/>
      <Feature/>
      <FeaturesCards/>
      <Testimonials/>
      <Stats/>
      <Services/>
      <Pricing/>
      <Contact/>

      
    </div>
  );
}

export default App;