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

  const certification = [
    {
      title: "Google Data Analytics Professional Certificate.",
      company: "By Google on Coursera",
      certificate: "https://drive.google.com/file/d/1NcfJoAW53RoexFXAe9DxCryVzBnAUNMJ/view",
      logo: "https://images.credly.com/images/c697cca4-0ae9-4821-ac6f-6156a041243f/image.png"
    },
    {
      title: "Google UX Design Professional Certificate.",
      company: "By Google on Coursera",
      certificate: "https://drive.google.com/file/d/1_vqHaRVQ7-o7LVqD2gEtySuIggcgv7KK/view",
      logo: "https://images.credly.com/images/1ad28ff4-5b00-43ee-9898-f002ef7c6a5a/GCC_badge_UX_1000x1000.png"
    },
    {
      title: "IBM DevOps and Software Engineering",
      company: "By IBM on Coursera",
      certificate: "https://drive.google.com/file/d/14dHe-K7KNHa_hGgF9vrjodIR1dL92HDa/view.",
      logo: "https://frontlinesmedia.in/wp-content/uploads/2024/09/IBM-LOGO.jpg"
    },
    {
      title: "AWS Certified Solutions Architect - Associate (SAA-C03)",
      company: "By LinkedIn Learning",
      certificate: "https://drive.google.com/file/d/1u6b_SFYtEk9MSwtj0D1_FlaE357og5-3/view?usp=drive_link",
      logo: "https://blog.ippon.fr/content/images/2023/05/AWS_SAA_badge-1.png"
    }
  ];

  const education = [
    {
      institution: "Vishwakarma Institute of Technology",
      degree: "B.Tech in Information Technology",
      period: "2022 - 2026",
      grade: "CGPA: 8.56",
      logo: "https://www.vishwakarma-group.com/images/logos/VIT-logo.png"
    },
    {
      institution: "Vyankatesh Juniour Science College",
      degree: "HSC (Maharashtra Board)",
      period: "2020 - 2022",
      grade: "88.17%",
      logo: "https://cache.careers360.mobi/media/colleges/social-media/logo/Logo_of_Shri_Vyankatesh_Polytechnic_Wardha_Logo.png"
    },
    {
      institution: "Agragami High School",
      degree: "SSC (Maharashtra Board)",
      period: "2019 - 2020",
      grade: "94%",
      logo: "http://www.agragamiconventschool.org/wp-content/uploads/2019/02/Logo-agragami-2-300x225.png"
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
        { name: "Tailwind CSS",logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/1024px-Tailwind_CSS_Logo.svg.png?20230715030042"},
        { name: "JavaScript",logo: "https://images.seeklogo.com/logo-png/27/1/javascript-js-logo-png_seeklogo-273557.png"},
        { name: "Bootstrap",logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-plain.svg" },
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
    "Winner of Internal Smart India Hackathon 2024",
    "Winner of Internal Smart India Hackathon 2025",
    "Published a patent and Research papers",
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
          href="https://drive.google.com/file/d/1zby1jVTDk_-h-ZI5X5oPPuuyVPNOPVP6/view"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition-all duration-300 hover:shadow-lg group"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 1.05 }}
          aria-label="Download Hiteshi Patil's resume PDF"
        >
          <Download size={20} className="group-hover:animate-bounce" aria-hidden="true" />
          Download Resume
        </motion.a>
      </div>

      {/* Two Column Layout */}
      <div className="grid lg:grid-cols-2 gap-8">
        
        {/* LEFT COLUMN - CERTIFICATION + EDUCATION */}
        <div className="space-y-10">
          
          {/* CERTIFICATION */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold mb-8 flex items-center gap-3 text-white border-b border-gray-700 pb-4">
              <Briefcase className="text-red-600" size={28} />
              Certification
            </h3>
            
            <div className="space-y-6 relative">
              {/* Timeline Line */}
              <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gray-700" />
              
              {certification.map((job, index) => (
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
                      <a 
                      href={job.certificate}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-auto inline-flex items-center gap-2 text-red-500 hover:text-red-400 text-sm font-medium transition-colors"
                    >
                      View Certificate
                     </a>
                    </div>
                    <p className="text-red-500 font-medium text-sm mb-1">{job.company}</p>
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
