import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Preloader = () => {
  const quotes = [
    "Turning Vision into Reality",
    "Crafting Digital Experiences",
    "Innovation through Code",
    "Building the Future"
  ];
  const [currentQuote, setCurrentQuote] = useState(quotes[0]);

  useEffect(() => {
    let quoteIndex = 0;
    const quoteInterval = setInterval(() => {
      quoteIndex = (quoteIndex + 1) % quotes.length;
      setCurrentQuote(quotes[quoteIndex]);
    }, 2000);

    return () => clearInterval(quoteInterval);
  }, []);

  return (
    <motion.div 
      className="preloader"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="preloader-content">
        <div className="preloader-logo mb-8" />
        <motion.div 
          className="text-red-600 text-4xl font-bold mb-4"
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          Manas Patil
        </motion.div>
        <div className="preloader-text">{currentQuote}</div>
      </div>
    </motion.div>
  );
};

export default Preloader;