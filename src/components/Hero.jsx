// src/components/Hero.jsx
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';

const Hero = () => {
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  return (
    <div className="w-full">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={{
          visible: { transition: { staggerChildren: 0.1 } },
        }}
        className="max-w-4xl mx-auto text-center"
      >
        <motion.h1
          variants={textVariants}
          className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight"
        >
          Hi, I'm <span className="text-purple-300">Shruti</span>,<br />
          I craft responsive websites and web applications.
        </motion.h1>

        <motion.p
          variants={textVariants}
          className="text-lg sm:text-xl text-gray-300 mb-10 max-w-2xl mx-auto"
        >
          Frontend developer passionate about creating beautiful, functional, and
          user-friendly digital experiences.
        </motion.p>

        <motion.div variants={textVariants}>
          <Link
            to="projects"
            smooth={true}
            duration={500}
            className="inline-block px-8 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-lg font-medium hover:from-purple-700 hover:to-indigo-700 transition-all transform hover:scale-105 shadow-lg hover:shadow-purple-500/20"
          >
            View Projects
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Hero;