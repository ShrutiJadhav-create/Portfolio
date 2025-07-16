// src/components/Footer.jsx
import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiTwitter, FiMail } from 'react-icons/fi';

const Footer = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <motion.footer
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-100px' }}
      variants={fadeIn}
      className="bg-black bg-opacity-50 py-12 mt-20"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h3 className="text-xl font-bold">Shruti's Portfolio</h3>
            <p className="text-gray-400 mt-2">
              Crafting digital experiences with care
            </p>
          </div>

          <div className="flex space-x-6">
            <a
              href="https://github.com/ShrutiJadhav-create"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-gray-400 hover:text-purple-300 transition-colors"
            >
              <FiGithub size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/shruti-jadhav-02b29b368/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-gray-400 hover:text-purple-300 transition-colors"
            >
              <FiLinkedin size={20} />
            </a>
            <a
              href="https://twitter.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
              className="text-gray-400 hover:text-purple-300 transition-colors"
            >
              <FiTwitter size={20} />
            </a>
            <a
              href="mailto:your.shrutijadhav19@gmail.com"
              aria-label="Email"
              className="text-gray-400 hover:text-purple-300 transition-colors"
            >
              <FiMail size={20} />
            </a>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} Shruti's Portfolio. All rights reserved.</p>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;