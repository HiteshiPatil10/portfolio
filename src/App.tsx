import React, { useState, useEffect } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import Navigation from './components/Navigation';
import Preloader from './components/Preloader';
import CustomCursor from './components/CustomCursor';
import SEO from './components/SEO';
import Home from './sections/Home';
import About from './sections/About';
import Work from './sections/Work';
import Resume from './sections/Resume';
import Contact from './sections/Contact';
import { defaultSEO } from './utils/seo';

function App() {
  const [loading, setLoading] = useState(true);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  if (loading) {
    return <Preloader />;
  }

  return (
    <div className="bg-black min-h-screen text-white">
      <SEO config={defaultSEO} />
      <CustomCursor />
      
      {/* Smooth Progress Bar */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1 bg-red-600 origin-left z-50"
        style={{ scaleX }}
      />

      <Navigation />

      <main className="relative">
        <div id="home" className="section-wrapper">
          <Home />
        </div>
        
        <motion.div 
          id="about" 
          className="section-wrapper bg-gray-900/50"
        >
          <About />
        </motion.div>
        
        <motion.div 
          id="work" 
          className="section-wrapper"
        >
          <Work />
        </motion.div>
        
        <motion.div 
          id="resume" 
          className="section-wrapper bg-gray-900/50"
        >
          <Resume />
        </motion.div>
        
        <motion.div 
          id="contact" 
          className="section-wrapper"
        >
          <Contact />
        </motion.div>
      </main>
    </div>
  );
}

export default App;