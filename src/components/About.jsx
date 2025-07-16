// src/components/About.jsx
import { motion } from 'framer-motion';
import { FiCode, FiLayers, FiSmartphone } from 'react-icons/fi';

const About = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  const skills = [
    { name: 'React', level: 90 },
    { name: 'JavaScript', level: 85 },
    { name: 'Tailwind CSS', level: 80 },
    { name: 'Node.js', level: 70 },
    { name: 'TypeScript', level: 75 },
    { name: 'UI/UX Design', level: 65 },
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        variants={fadeIn}
      >
        <h2 className="text-3xl sm:text-4xl font-bold mb-6">
          About <span className="text-purple-300">Me</span>
        </h2>
        <p className="text-gray-300 mb-6 text-lg">
          I am a passionate Frontend Developer who loves crafting clean, responsive, and user-friendly interfaces that 
          create meaningful experiences for users. I enjoy bringing ideas to life through code and design, ensuring that every 
          detail aligns with both user needs and business goals. My journey in frontend development has been driven by curiosity 
          and a sincere desire to grow, learn new technologies, and solve real-world problems with intuitive, accessible designs.
        </p>
        <p className="text-gray-300 mb-8 text-lg">
           I look forward to contributing my skills in a team environment where I 
           can continue to learn while delivering quality work that makes an impact.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="bg-gray-900 bg-opacity-50 p-4 rounded-lg">
            <FiCode className="text-purple-400 text-2xl mb-2" />
            <h3 className="font-medium">Web Development</h3>
            <p className="text-sm text-gray-400">React, Next.js, Node</p>
          </div>
          <div className="bg-gray-900 bg-opacity-50 p-4 rounded-lg">
            <FiLayers className="text-purple-400 text-2xl mb-2" />
            <h3 className="font-medium">UI/UX Design</h3>
            <p className="text-sm text-gray-400">Figma, Tailwind, Framer</p>
          </div>
          <div className="bg-gray-900 bg-opacity-50 p-4 rounded-lg">
            <FiSmartphone className="text-purple-400 text-2xl mb-2" />
            <h3 className="font-medium">Responsive Design</h3>
            <p className="text-sm text-gray-400">Mobile-first approach</p>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        variants={fadeIn}
        className="space-y-6"
      >
        {/* {skills.map((skill, index) => (
          <div key={index}>
            <div className="flex justify-between mb-1">
              <span className="font-medium">{skill.name}</span>
              <span className="text-gray-400">{skill.level}%</span>
            </div>
            <div className="w-full bg-gray-800 rounded-full h-2.5">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${skill.level}%` }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: index * 0.1 }}
                className="h-2.5 rounded-full bg-gradient-to-r from-purple-500 to-indigo-500"
              />
            </div>
          </div>
        ))} */}
      </motion.div>
    </div>
  );
};

export default About;