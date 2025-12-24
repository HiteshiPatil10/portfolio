import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Github } from 'lucide-react';
import img1 from '../assests/img1.png';
import img2 from '../assests/img2.jpeg';
import img3 from '../assests/img4.png'
import img4 from '../assests/img3.png'
import img5 from '../assests/fashiontrend tracker.png'
import img6 from '../assests/perfume.png'

// Fallback images from Unsplash for when local images fail to load
const fallbackImages = [
  "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
  "https://images.unsplash.com/photo-1461749280684-dccba0e8454d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
  "https://images.unsplash.com/photo-1555099962-4199c345e5dd?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
];

const projects = [
  {
    id: 1,
    title: "API-HawkEye",
    description: "Develop an AI-powered monitoring solution for a large-scale, distributed multi-API software platform that generates vast amounts of log data from high-frequency API calls.",
    image: img1,
    tech: ["JavaScript", "Go", "Python","Dockerfile"],
    github: "https://github.com/HiteshiPatil10/API-HawkEye"
  },
  {
    id: 2,
    title: "VanAdhikaar",
    description: "Development of AI-powered FRA Atlas and WebGIS-based Decision Support System(DSS) for Integrated Monitoring of forest Rights Act(FRA) impllementation.",
    image: img2,
    tech: ["React", "TailwindCSS", "Leaflet","Python","FastAPI","PostgreSQL","PostGIS","Docker"],
    github: "https://youtu.be/AmGK8K4cC-U"
  },
  
  {
    id: 3,
    title: "XEMOX",
    description: " A Decentralized NFT Marketplace using wallet abstraction and IPFS.",
    image: img4,
    tech: ["TailwindCSS", "Vite + React", "IPFS","etherum"],
    github: "https://github.com/HiteshiPatil10/Xemox.git"
  },
  /*{
    id: 4,
    title: "FinGyaan",
    description: "A comprehensive platform bridging the financial literacy gap with interactive education, personalized insights, market news, portfolio management, and financial calculators.",
    image: img3,
    tech: ["React", "Firebase", "Tailwind"],
    github: "https://github.com/manaspatil7/FinGyaan"
  },
  {
    id: 5,
    title: "Fashion Trends",
    description: "A dynamic platform showcasing the latest fashion trends, style inspiration, and AI-powered insights to keep you ahead in the fashion world.",
    image: img5,
    tech: ["React", "Redux", "TailwindCSS"],
    github: "https://github.com/manas-patil/weather-app"
  },
  {
    id: 6,
    title: "Atma Perfumes",
    description: "A Freelance Project for a local Vendor",
    image: img6,
    tech: ["Next.js", "Typescript", "MongoDB"],
    github: "https://github.com/manas-patil/blog-platform"
  }*/
];

const Work = () => {
  const containerRef = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.9, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [0.8, 1]);

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    const img = e.target as HTMLImageElement;
    const fallbackIndex = parseInt(img.dataset.index || '0') % fallbackImages.length;
    img.src = fallbackImages[fallbackIndex];
  };

  return (
    <motion.section 
      ref={containerRef}
      className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
      style={{ y, opacity, scale }}
      aria-labelledby="work-heading"
    >
      <h2 id="work-heading" className="text-3xl font-bold mb-12">Selected Work</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.article 
            key={project.id}
            className="group relative overflow-hidden rounded-lg cursor-pointer"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            onClick={() => window.open(project.github, '_blank')}
            role="button"
            tabIndex={0}
            aria-label={`View ${project.title} project on GitHub`}
            onKeyPress={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                window.open(project.github, '_blank');
              }
            }}
          >
            <img 
              src={project.image}
              alt={`${project.title} - ${project.description.substring(0, 60)}...`}
              className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
              onError={handleImageError}
              data-index={index}
              loading="lazy"
              width="400"
              height="256"
            />
            <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
              <div className="text-center p-4">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <div className="flex gap-2 justify-center flex-wrap mb-4">
                  {project.tech.map((tech) => (
                    <span key={tech} className="px-2 py-1 bg-red-600 rounded-full text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex justify-center items-center text-red-600 gap-2">
                  <Github size={20} aria-hidden="true" />
                  <span className="text-sm">View Repository</span>
                </div>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </motion.section>
  );
};

export default Work;