import React from 'react';
import { motion } from 'framer-motion';
import { slideIn } from '../../utils/animations';

const SectionTitle = ({ title, subtitle }) => {
  return (
    <div className="text-center mb-16">
      <motion.h2 
        variants={slideIn("down", 0.2)}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className="text-3xl font-bold text-gray-900 sm:text-4xl"
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p 
          variants={slideIn("down", 0.3)}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="mt-4 text-xl text-gray-600"
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
};

export default SectionTitle;