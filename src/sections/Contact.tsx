import React, { useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const containerRef = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.9, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [0.8, 1]);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [isSending, setIsSending] = useState(false);
  const [statusMessage, setStatusMessage] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSending(true);
    setStatusMessage('');

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      message: formData.message,
    };

    try {
      await emailjs.send(
        'service_du88pyp', 
        'template_wd2z23e', 
        templateParams, 
        'ZfggM7dLwou1E58DH'
      );
      setStatusMessage('✅ Message sent successfully!');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      setStatusMessage('❌ Failed to send message. Try again.');
      console.error('EmailJS error:', error);
    } finally {
      setIsSending(false);
    }
  };

  return (
    <motion.section 
      ref={containerRef}
      className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
      style={{ y, opacity, scale }}
      aria-labelledby="contact-heading"
    >
      <h2 id="contact-heading" className="text-3xl font-bold mb-12">Get in Touch</h2>
      
      <div className="grid md:grid-cols-2 gap-12">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
        >
          <h3 className="text-xl font-semibold mb-6">Contact Information</h3>
          <address className="space-y-4 not-italic">
            <div className="flex items-center gap-4">
              <Mail className="text-red-600" aria-hidden="true" />
              <span className="text-gray-400"><a href="mailto:patilmanas63@gmail.com" className="text-gray-400 hover:underline" aria-label="Email Manas Patil">patilmanas63@gmail.com</a></span>
            </div>
            <div className="flex items-center gap-4">
              <Phone className="text-red-600" aria-hidden="true" />
              <span className="text-gray-400"><a href="tel:+917710063201" className="text-gray-400 hover:underline" aria-label="Call Manas Patil">+91 77100*****</a></span>
            </div>
            <div className="flex items-center gap-4">
              <MapPin className="text-red-600" aria-hidden="true" />
              <span className="text-gray-400" itemProp="addressLocality">Mumbai, India</span>
            </div>
          </address>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
        >
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 bg-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 bg-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 bg-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
              ></textarea>
            </div>
            <button
              type="submit"
              disabled={isSending}
              className="flex items-center gap-2 bg-red-600 text-white px-6 py-3 rounded-full hover:bg-red-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              aria-label="Submit contact form"
            >
              {isSending ? 'Sending...' : 'Send Message'}
              <Send size={20} aria-hidden="true" />
            </button>
            {statusMessage && (
              <p className={`mt-2 text-sm ${statusMessage.includes('❌') ? 'text-red-500' : 'text-green-500'}`}>
                {statusMessage}
              </p>
            )}
          </form>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Contact;
