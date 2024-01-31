import './App.css';
import Navbar from './Navbar/Navbar'
import Home from './Hero/Hero';
import App_Features from './App Features/App_Features';
import Gallery from './Gallery/Gallery';
import Testimonials from './Testimonials/Testimonials';
import Pricing from './Pricing/Pricing';
import Frequently_Asked_Questions from './Frequently Asked Questions/Frequently-Asked-Questions';
import Contact from './Contact/Contact';
import Footer from './footer/Footer';

import { motion, useScroll, useSpring } from "framer-motion";

function App() {


  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });


  return (
    <div className='parent'>
      <div className="App">
        <motion.div className='progress-bar ' style={{ scaleX, zIndex: "1000" }}></motion.div>

        <Home />
        <Navbar />
        <App_Features />
        <Gallery />
        <Testimonials />
        <Pricing />
        <Frequently_Asked_Questions />
        <Contact/>
        <Footer/>
      </div>
    </div>

  );
}

export default App;
