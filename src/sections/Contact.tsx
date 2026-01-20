import React, { useState, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
  const containerRef = useRef(null);

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

    const BOT_TOKEN = import.meta.env.VITE_TELEGRAM_BOT_TOKEN;
    const CHAT_ID = import.meta.env.VITE_TELEGRAM_CHAT_ID;

    const text = `
📩 New Portfolio Contact

👤 Name: ${formData.name}
📧 Email: ${formData.email}

💬 Message:
${formData.message}
    `;

    try {
      const res = await fetch(
        `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            chat_id: CHAT_ID,
            text,
          }),
        }
      );

      if (!res.ok) throw new Error('Telegram API Error');

      setStatusMessage('✅ Message sent successfully!');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error(error);
      setStatusMessage('❌ Failed to send message. Try again.');
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
      <h2 id="contact-heading" className="text-3xl font-bold mb-12">
        Get in Touch
      </h2>

      <div className="grid md:grid-cols-2 gap-12">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
        >
          <h3 className="text-xl font-semibold mb-6">
            Contact Information
          </h3>

          <address className="space-y-4 not-italic">
            <div className="flex items-center gap-4">
              <Mail className="text-red-600" />
              <a
                href="mailto:hiteshi10092004@gmail.com"
                className="text-gray-400 hover:underline"
              >
                hiteshi10092004@gmail.com
              </a>
            </div>

            <div className="flex items-center gap-4">
              <Phone className="text-red-600" />
              <a
                href="tel:+917058473751"
                className="text-gray-400 hover:underline"
              >
                +91 7058******
              </a>
            </div>

            <div className="flex items-center gap-4">
              <MapPin className="text-red-600" />
              <span className="text-gray-400">
                Pune, India
              </span>
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
              <label className="block text-sm text-gray-400 mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 bg-gray-800 rounded-lg focus:ring-2 focus:ring-red-600 outline-none"
              />
            </div>

            <div>
              <label className="block text-sm text-gray-400 mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 bg-gray-800 rounded-lg focus:ring-2 focus:ring-red-600 outline-none"
              />
            </div>

            <div>
              <label className="block text-sm text-gray-400 mb-2">
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 bg-gray-800 rounded-lg focus:ring-2 focus:ring-red-600 outline-none"
              />
            </div>

            <button
              type="submit"
              disabled={isSending}
              className="flex items-center gap-2 bg-red-600 text-white px-6 py-3 rounded-full hover:bg-red-700 transition disabled:opacity-50"
            >
              {isSending ? 'Sending...' : 'Send Message'}
              <Send size={18} />
            </button>

            {statusMessage && (
              <p className={`text-sm mt-2 ${
                statusMessage.includes('❌')
                  ? 'text-red-500'
                  : 'text-green-500'
              }`}>
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
