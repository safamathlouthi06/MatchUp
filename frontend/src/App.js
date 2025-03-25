import "./App.css";


import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Header from "./components/Header";
import Footer from "./components/Footer";
import {
  Hero,
  About,
  Feature,
  FeaturesCards,
  Testimonials,
  Stats,
  Services,
  Pricing,
  Contact,
} from "./pages/landing-page";
function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <About />
      <Feature />
      <FeaturesCards />
      <Testimonials />
      <Stats />
      <Services />
      <Pricing />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;