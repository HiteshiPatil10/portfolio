import React from 'react';
import { Send, FileText } from 'lucide-react';
import { motion } from 'framer-motion';

const Home = () => {
  const [isAnimating, setIsAnimating] = React.useState(false);

  const scrollToWork = async () => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    
    const button = document.querySelector('.work-button') as HTMLElement;
    if (!button) return;

    // Initial animation
    button.style.transition = 'all 0.3s ease';
    button.style.width = '50px';
    button.style.transform = 'scale(0.8)';
    
    // Rotate and fly away
    setTimeout(() => {
      button.style.transform = 'scale(0.8) rotate(45deg) translateY(-20px)';
      setTimeout(() => {
        button.style.transform = `scale(0.8) rotate(45deg) translate(${window.innerWidth}px, -100px)`;
        
        // Scroll to work section
        setTimeout(() => {
          const element = document.getElementById('work');
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
          
          // Reset button
          setTimeout(() => {
            button.style.transition = 'none';
            button.style.transform = 'none';
            button.style.width = 'auto';
            setIsAnimating(false);
          }, 500);
        }, 300);
      }, 300);
    }, 300);
  };

  const scrollToResume = () => {
    const element = document.getElementById('resume');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const letterAnimation = {
    hidden: { opacity: 0, y: 50 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: [0.6, -0.05, 0.01, 0.99]
      }
    })
  };

  const text = "Hi, I'm";
  const name = "Manas";
  const role = "Full Stack Developer";

  return (
    <motion.section 
      className="min-h-[calc(100vh-4rem)] flex items-center justify-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
      aria-label="Hero section"
    >
      <div className="max-w-3xl px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6 overflow-hidden" itemProp="headline">
          <div className="flex flex-wrap">
            {text.split("").map((char, i) => (
              <motion.span
                key={i}
                custom={i}
                variants={letterAnimation}
                initial="hidden"
                animate="visible"
                className="inline-block"
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </div>
          <div className="flex flex-wrap text-red-600">
            {name.split("").map((char, i) => (
              <motion.span
                key={i}
                custom={i + text.length}
                variants={letterAnimation}
                initial="hidden"
                animate="visible"
                className="inline-block"
              >
                {char}
              </motion.span>
            ))}
          </div>
          <div className="flex flex-wrap">
            {role.split("").map((char, i) => (
              <motion.span
                key={i}
                custom={i + text.length + name.length}
                variants={letterAnimation}
                initial="hidden"
                animate="visible"
                className="inline-block"
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </div>
        </h1>
        
        <motion.p 
          className="text-gray-400 text-lg mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            delay: 1.5,
            duration: 0.8,
            ease: "easeOut"
          }}
          itemProp="description"
        >
          Passionate about creating innovative web solutions and transforming ideas into 
          seamless digital experiences. Specializing in modern web technologies and 
          user-centric design.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="flex gap-4"
        >
          <button 
            onClick={scrollToWork}
            className={`work-button group relative inline-flex items-center gap-2 bg-red-600 text-white px-6 py-3 rounded-full hover:bg-red-700 transition-colors overflow-hidden ${
              isAnimating ? 'pointer-events-none' : ''
            }`}
            aria-label="View my portfolio work"
          >
            <span className={`transition-opacity duration-200 ${isAnimating ? 'opacity-0' : 'opacity-100'}`}>
              View My Work
            </span>
            <Send className={`transition-all duration-300 ${isAnimating ? 'scale-125' : 'group-hover:translate-x-1'}`} aria-hidden="true" />
          </button>

          <button
            onClick={scrollToResume}
            className="group inline-flex items-center gap-2 bg-white text-red-600 px-6 py-3 rounded-full hover:bg-gray-100 transition-all duration-300 hover:shadow-lg border-2 border-red-600"
            aria-label="View my resume"
          >
            <span>View Resume</span>
            <FileText className="transition-transform duration-300 group-hover:scale-110" aria-hidden="true" />
          </button>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Home;