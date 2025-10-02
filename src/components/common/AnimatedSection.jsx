import React from 'react';
import { motion } from 'framer-motion';
import { fadeInUp } from '../../utils/animations';

const AnimatedSection = ({ children, className = '', delay = 0 }) => {
  return (
    <motion.div
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, margin: "-100px" }}
      variants={{
        ...fadeInUp,
        animate: {
          ...fadeInUp.animate,
          transition: { delay, ...fadeInUp.transition }
        }
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedSection;