 // src/components/Navbar.jsx
import { useEffect, useState } from 'react';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiTwitter } from 'react-icons/fi';

const Navbar = ({ activeSection, setActiveSection }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'py-2 bg-black bg-opacity-80 backdrop-blur-md' : 'py-4'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <Link
          to="home"
          smooth={true}
          duration={500}
          className="text-xl font-bold cursor-pointer hover:text-purple-300 transition-colors"
          onClick={() => setActiveSection('home')}
        >
          Portfolio
        </Link>

        <div className="hidden md:flex space-x-8">
          {navItems.map((item) => (
            <div key={item.id} className="relative">
              <Link
                to={item.id}
                smooth={true}
                duration={500}
                offset={-80}
                className={`cursor-pointer px-3 py-2 rounded-md transition-all ${
                  activeSection === item.id
                    ? 'text-purple-300 font-medium'
                    : 'hover:text-purple-200'
                }`}
                onClick={() => setActiveSection(item.id)}
                onSetActive={() => setActiveSection(item.id)}
              >
                {item.label}
              </Link>
              {activeSection === item.id && (
                <motion.div
                  layoutId="nav-underline"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-purple-400"
                  initial={false}
                  transition={{
                    type: 'spring',
                    stiffness: 500,
                    damping: 30,
                  }}
                />
              )}
            </div>
          ))}
        </div>

        <div className="flex space-x-4">
          <a
            href="https://github.com/ShrutiJadhav-create"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="p-2 hover:text-purple-300 transition-colors"
          >
            <FiGithub size={20} />
          </a>
          <a
            href="https://www.linkedin.com/in/shruti-jadhav-02b29b368/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="p-2 hover:text-purple-300 transition-colors"
          >
            <FiLinkedin size={20} />
          </a>
          <a
            href="https://twitter.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
            className="p-2 hover:text-purple-300 transition-colors"
          >
            <FiTwitter size={20} />
          </a>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;