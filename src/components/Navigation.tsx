import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const sections = [
    { id: 'home', label: 'home' },
    { id: 'about', label: 'about' },
    { id: 'work', label: 'work' },
    { id: 'resume', label: 'resume' },
    { id: 'contact', label: 'contact' }
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <nav className="fixed w-full top-0 z-40 bg-black/90 backdrop-blur-sm border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <button 
            onClick={() => scrollToSection('home')} 
            className="text-2xl font-bold"
          >
            <span className="text-red-600">M</span>anas's Portfolio
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => scrollToSection(section.id)}
                className="nav-link text-sm uppercase tracking-wider hover:text-red-600 transition-colors text-gray-300"
              >
                {section.label}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-black border-b border-gray-800">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => scrollToSection(section.id)}
                className="block w-full text-left px-3 py-2 text-base uppercase tracking-wider hover:text-red-600 transition-colors text-gray-300"
              >
                {section.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;