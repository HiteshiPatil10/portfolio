import React from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { Download, Award, Briefcase, Code, GraduationCap } from 'lucide-react';

const Resume = () => {
  const containerRef = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useSpring(useTransform(scrollYProgress, [0, 1], [100, -100]), {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });
  
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.9, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [0.8, 1]);

  const experience = [
    {
      title: "Fullstack Developer Intern",
      company: "SIRO",
      location: "Mumbai - Hybrid",
      period: "Aug 2025 - Present",
      description: "Developed patient data dashboard with proprietary validation checks. Built backend APIs for dynamic check triggers and collaborated on clinical workflows.",
      logo: "https://cdn.expresspharma.in/wp-content/uploads/2019/05/20162522/Siro_purpleonwhite_rgb.jpg"
    },
    {
      title: "Research Intern",
      company: "COEP Technological University",
      location: "Pune - Hybrid",
      period: "May 2025 - Aug 2025",
      description: "Researched LLMs and multimodal AI under IndiaAI Mission. Focused on KV caching and attention mechanisms with performance evaluations.",
      logo: "https://img.jagranjosh.com/images/2023/August/2882023/coep_1.jpg"
    },
    {
      title: "Developer Intern",
      company: "Adlytica",
      location: "Poland - Remote",
      period: "May 2025 - Jul 2025",
      description: "Led team for content platform development with Supabase. Implemented automation workflows using n8n and Make.com.",
      logo: "https://tse3.mm.bing.net/th/id/OIP.3MFO7yARtBalRdRQSEM4hQHaHa?cb=ucfimgc2&rs=1&pid=ImgDetMain&o=7&rm=3"
    }
  ];

  const education = [
    {
      institution: "Thadomal Shahani Engineering College",
      degree: "B.E in AI & Data Science",
      period: "2022 - 2026",
      grade: "CGPA: 8.58",
      logo: "https://cache.careers360.mobi/media/colleges/social-media/2804/2018/6/5/Thadomal-Shahani-Engineering-College-Mumbai-Logo.jpg"
    },
    {
      institution: "Pace Junior Science College",
      degree: "HSC (Maharashtra Board)",
      period: "2019 - 2021",
      grade: "88%",
      logo: "https://images.uniapply.com/uploads/college/image/logo/4610/Pace_Junior_Science_College_3599_Logo_UA_1.JPG"
    },
    {
      institution: "Christ Church School",
      degree: "ICSE",
      period: "2009 - 2019",
      grade: "95%",
      logo: "https://images.uniapply.com/uploads/college/image/logo/4610/Christ_Church_School_2484_Logo_1.jpg"
    }
  ];

  const skillCategories = [
    {
      category: "Languages",
      icon: <Code size={18} />,
      skills: [
        { name: "C", logo: "https://upload.wikimedia.org/wikipedia/commons/1/19/C_Logo.png" },
        { name: "C++", logo: "https://upload.wikimedia.org/wikipedia/commons/1/18/ISO_C%2B%2B_Logo.svg" },
        { name: "Java", logo: "https://cdn-icons-png.flaticon.com/512/226/226777.png" },
        { name: "Python", logo: "https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg" }
      ]
    },
    {
      category: "Web Technologies",
      icon: <Code size={18} />,
      skills: [
        { name: "HTML", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
        { name: "CSS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
        { name: "React.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
        { name: "Node.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
        { name: "Express.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
        { name: "Firebase", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" },
        { name: "Supabase", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/supabase/supabase-original.svg" },
        { name: "AWS Lambda", logo: "https://cdn.worldvectorlogo.com/logos/aws-lambda-1.svg" },
        { name: "AWS Amplify", logo: "https://docs.amplify.aws/assets/logo-dark.svg" }
      ]
    },
    {
      category: "Database & Tools",
      icon: <Code size={18} />,
      skills: [
        { name: "MySQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
        { name: "MongoDB", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
        { name: "GitHub", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
        { name: "Power BI", logo: "https://upload.wikimedia.org/wikipedia/commons/c/cf/New_Power_BI_Logo.svg" }
      ]
    }
  ];

  const achievements = [
    "Winner at Jamrang AI/ML hackathon by VijayBhoomi University",
    "Consolation prize at Rubix 2025 hackathon by CSI TSEC",
    "Finalist at Hackshetra'24, national hackathon by NIT Kurukshetra",
    "Senior Core Team Member at CodeTantra, TSEC – 500+ participants"
  ];

  const LogoBox = ({ logo }: { logo: string }) => {
    const isUrl = logo.startsWith('http://') || logo.startsWith('https://');
    
    return (
      <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center border border-gray-600 flex-shrink-0 overflow-hidden">
        {isUrl ? (
          <img 
            src={logo} 
            alt="Company or institution logo" 
            className="w-full h-full object-contain p-1"
            loading="lazy"
            width="48"
            height="48"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.style.display = 'none';
              if (target.nextElementSibling) {
                (target.nextElementSibling as HTMLElement).style.display = 'flex';
              }
            }}
          />
        ) : (
          <span className="text-gray-800 font-bold text-xs">{logo}</span>
        )}
      </div>
    );
  };

  return (
    <motion.section 
      ref={containerRef}
      className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
      style={{ y, opacity, scale }}
      aria-labelledby="resume-heading"
    >
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-16">
        <motion.h2 
          id="resume-heading"
          className="text-4xl font-bold text-white"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Resume
        </motion.h2>
        <motion.a 
          href="https://drive.google.com/file/d/1jNlRPYh2yVkkvCRAF7kWxHUHdyxHT5UT/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition-all duration-300 hover:shadow-lg group"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 1.05 }}
          aria-label="Download Manas Patil's resume PDF"
        >
          <Download size={20} className="group-hover:animate-bounce" aria-hidden="true" />
          Download Resume
        </motion.a>
      </div>

      {/* Two Column Layout */}
      <div className="grid lg:grid-cols-2 gap-8">
        
        {/* LEFT COLUMN - EXPERIENCE + EDUCATION */}
        <div className="space-y-10">
          
          {/* EXPERIENCE */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold mb-8 flex items-center gap-3 text-white border-b border-gray-700 pb-4">
              <Briefcase className="text-red-600" size={28} />
              Experience
            </h3>
            
            <div className="space-y-6 relative">
              {/* Timeline Line */}
              <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gray-700" />
              
              {experience.map((job, index) => (
                <motion.div 
                  key={index} 
                  className="relative pl-16 group"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  {/* Logo */}
                  <div className="absolute left-0 top-0">
                    <LogoBox logo={job.logo} />
                  </div>
                  
                  {/* Timeline Dot */}
                  <div className="absolute left-[22px] top-14 w-3 h-3 bg-red-600 rounded-full border-2 border-black transform group-hover:scale-150 transition-transform z-10" />
                  
                  <div className="bg-gray-800/50 p-5 rounded-lg border border-gray-700 hover:border-red-600 transition-all duration-300 min-h-[180px] flex flex-col">
                    <div className="flex justify-between items-start gap-4 mb-2">
                      <h4 className="text-base font-semibold text-white">{job.title}</h4>
                      <span className="text-xs text-gray-500 whitespace-nowrap bg-gray-900 px-2 py-1 rounded">{job.period}</span>
                    </div>
                    <p className="text-red-500 font-medium text-sm mb-1">{job.company}</p>
                    <p className="text-xs text-gray-500 mb-3">{job.location}</p>
                    <p className="text-gray-400 text-sm leading-relaxed flex-grow">{job.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* EDUCATION */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold mb-8 flex items-center gap-3 text-white border-b border-gray-700 pb-4">
              <GraduationCap className="text-red-600" size={28} />
              Education
            </h3>
            <div className="space-y-5">
              {education.map((edu, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-gray-800/50 p-5 rounded-lg border border-gray-700 hover:border-red-600 transition-all duration-300 min-h-[140px] flex gap-4"
                >
                  <LogoBox logo={edu.logo} />
                  <div className="flex-1">
                    <div className="flex justify-between items-start gap-4 mb-2">
                      <h4 className="text-base font-semibold text-white leading-tight">{edu.institution}</h4>
                      <span className="text-xs text-gray-500 whitespace-nowrap bg-gray-900 px-2 py-1 rounded">{edu.period}</span>
                    </div>
                    <p className="text-gray-300 text-sm mb-2">{edu.degree}</p>
                    <p className="text-red-500 font-semibold text-sm">{edu.grade}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* RIGHT COLUMN - SKILLS + ACHIEVEMENTS */}
        <div className="space-y-10">
          
          {/* SKILLS */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
          >
            <h3 className="text-2xl font-bold mb-8 flex items-center gap-3 text-white border-b border-gray-700 pb-4">
              <Code className="text-red-600" size={28} />
              Technical Skills
            </h3>
            <div className="space-y-6">
              {skillCategories.map((category, categoryIndex) => (
                <motion.div
                  key={categoryIndex}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: categoryIndex * 0.1 }}
                  className="bg-gray-800/50 p-6 rounded-lg border border-gray-700 hover:border-red-600 transition-all duration-300"
                >
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-red-500">{category.icon}</span>
                    <h4 className="text-base font-semibold text-white">{category.category}</h4>
                  </div>
                  <div className="grid grid-cols-3 gap-3">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: skillIndex * 0.05 }}
                        whileHover={{ scale: 1.05, y: -2 }}
                        className="bg-gray-900 p-3 rounded-md border border-gray-700 hover:border-red-500 hover:bg-gray-800 transition-all duration-200 cursor-default flex flex-col items-center gap-2"
                        title={skill.name}
                      >
                        <div className="w-10 h-10 bg-white rounded-md flex items-center justify-center p-1.5">
                          <img 
                            src={skill.logo} 
                            alt={skill.name}
                            className="w-full h-full object-contain"
                            onError={(e) => {
                              const target = e.target as HTMLImageElement;
                              target.style.display = 'none';
                              const parent = target.parentElement?.parentElement;
                              if (parent) {
                                parent.innerHTML = `<span class="text-gray-300 text-xs font-medium">${skill.name}</span>`;
                              }
                            }}
                          />
                        </div>
                        <span className="text-gray-400 text-xs text-center leading-tight">{skill.name}</span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* ACHIEVEMENTS */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-3 text-white border-b border-gray-700 pb-4">
              <Award className="text-red-600" size={28} />
              Achievements
            </h3>
            <div className="space-y-3">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-3 bg-gray-800/50 p-4 rounded-lg border border-gray-700 hover:border-red-600 transition-all duration-300"
                >
                  <div className="w-2 h-2 bg-red-600 rounded-full mt-1.5 flex-shrink-0" />
                  <p className="text-gray-400 text-sm leading-snug">{achievement}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Resume;
