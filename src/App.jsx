 // src/App.js
import { useState } from 'react';
import { motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import FloatingShapes from './components/FloatingShapes';

function App() {
  const [activeSection, setActiveSection] = useState('home');

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-[#0F0F1B] to-[#2C0735] text-white font-sans overflow-x-hidden">
      {/* Background shapes */}
      <FloatingShapes />
      
      {/* Blurred decorative shapes */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 w-64 h-64 rounded-full bg-purple-900 opacity-20 blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 rounded-full bg-indigo-900 opacity-15 blur-3xl"></div>
      </div>

      <Navbar activeSection={activeSection} setActiveSection={setActiveSection} />
      
      <main className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.section
          id="home"
          onViewportEnter={() => setActiveSection('home')}
          className="min-h-screen flex items-center"
        >
          <Hero />
        </motion.section>

        <motion.section
          id="about"
          onViewportEnter={() => setActiveSection('about')}
          className="min-h-screen flex items-center py-20"
        >
          <About />
        </motion.section>

        <motion.section
          id="projects"
          onViewportEnter={() => setActiveSection('projects')}
          className="min-h-screen py-20"
        >
          <Projects />
        </motion.section>

        <motion.section
          id="contact"
          onViewportEnter={() => setActiveSection('contact')}
          className="min-h-screen flex items-center py-20"
        >
          <ContactForm />
        </motion.section>
      </main>

      <Footer />
    </div>
  );
}

export default App;