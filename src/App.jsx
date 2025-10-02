import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HelmetProvider } from 'react-helmet-async';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
// import About from './components/About';
import Services from './components/Services';
import Work from './components/Work';
import Projects from './components/Projects';
// import Testimonials from './components/Testimonials';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollProgress from './components/common/ScrollProgress';
import SEO from './components/SEO';
import { useIntersectionObserver } from './utils/useIntersectionObserver';

function App() {
  useIntersectionObserver();

  return (
    <HelmetProvider>
      <AnimatePresence mode="wait">
        <div className="bg-gray-50">
          <SEO />
          <ScrollProgress />
          <Navbar />
          <motion.main
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <section id="home" className="scroll-fade">
              <Hero />
            </section>
            {/* <section id="about" className="scroll-fade">
              <About />
            </section> */}
            <section id="services" className="scroll-fade">
              <Services />
            </section>
            <section id="work" className="scroll-fade">
              <Work />
            </section>
            <section id="projects" className="scroll-fade">
              <Projects />
            </section>
            {/* <section id="testimonials" className="scroll-fade">
              <Testimonials />
            </section> */}
            <section id="education" className="scroll-fade">
              <Education />
            </section>
            <section id="contact" className="scroll-fade">
              <Contact />
            </section>
          </motion.main>
          <Footer />
        </div>
      </AnimatePresence>
    </HelmetProvider>
  );
}

export default App;