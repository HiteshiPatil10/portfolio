// SEO Configuration and Utilities

export interface SEOConfig {
  title: string;
  description: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
}

// Default SEO configuration
export const defaultSEO: SEOConfig = {
  title: 'Manas Patil - Full Stack Developer | React, Node.js & Cloud Expert',
  description: 'Manas Patil is a Full Stack Developer specializing in React, Node.js, and modern web technologies. Explore my portfolio showcasing innovative web solutions and scalable applications.',
  keywords: 'Manas Patil, Full Stack Developer, React Developer, Node.js, Web Developer, JavaScript, TypeScript, Portfolio',
  image: 'https://manas-patil.netlify.app/assets/manu-DmqEKTqK.jpg',
  url: 'https://manas-patil.netlify.app',
  type: 'website'
};

// Page-specific SEO configurations
export const pageSEO = {
  home: {
    title: 'Manas Patil - Full Stack Developer | Modern Web Solutions',
    description: 'Welcome to Manas Patil\'s portfolio. Full Stack Developer passionate about creating innovative web solutions with React, Node.js, and modern technologies.',
    keywords: 'Manas Patil, Full Stack Developer, React, Node.js, Web Development, Portfolio'
  },
  about: {
    title: 'About Manas Patil - Full Stack Developer & Software Engineer',
    description: 'Learn more about Manas Patil, a Full Stack Developer with expertise in React, Node.js, and cloud platforms. Discover my journey and technical skills.',
    keywords: 'About Manas Patil, Software Engineer, Full Stack Developer, React Expert, Node.js Developer'
  },
  work: {
    title: 'Projects & Work - Manas Patil Portfolio',
    description: 'Explore Manas Patil\'s portfolio of web development projects including full-stack applications, React projects, and innovative web solutions.',
    keywords: 'Web Development Projects, React Projects, Full Stack Applications, Portfolio, Manas Patil Work'
  },
  resume: {
    title: 'Resume - Manas Patil | Full Stack Developer Skills & Experience',
    description: 'View Manas Patil\'s professional resume showcasing skills in React, Node.js, TypeScript, and full-stack development experience.',
    keywords: 'Manas Patil Resume, Full Stack Developer Skills, React Skills, Node.js Experience, Developer Resume'
  },
  contact: {
    title: 'Contact Manas Patil - Full Stack Developer for Hire',
    description: 'Get in touch with Manas Patil for web development opportunities, collaborations, or freelance projects. Available for full-stack development work.',
    keywords: 'Contact Manas Patil, Hire Full Stack Developer, Web Developer Contact, React Developer for Hire'
  }
};

// Generate structured data for projects
export const generateProjectSchema = (project: {
  name: string;
  description: string;
  url?: string;
  image?: string;
  technologies: string[];
  startDate?: string;
  endDate?: string;
}) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'CreativeWork',
    name: project.name,
    description: project.description,
    url: project.url,
    image: project.image,
    creator: {
      '@type': 'Person',
      name: 'Manas Patil'
    },
    keywords: project.technologies.join(', '),
    dateCreated: project.startDate,
    dateModified: project.endDate
  };
};

