import React from 'react';
import { Github, Linkedin, Mail, ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-600 opacity-10"></div>
      </div>
      
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center stagger-children">
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight">
          Software Engineer
          <span className="block text-indigo-600 mt-2">Building Digital Solutions</span>
        </h1>
        <p className="mt-8 text-xl sm:text-2xl text-gray-600 max-w-3xl mx-auto">
          Transforming ideas into elegant, scalable, and user-centric applications. 
          Specialized in full-stack development and Data Engineering.
        </p>
        
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-6">
          <a
            href="#contact"
            className="inline-flex items-center px-8 py-4 border border-transparent text-lg font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 hover-transition hover-lift"
          >
            Get in Touch
            <ArrowRight className="ml-2 h-5 w-5" />
          </a>
          
          <div className="flex items-center space-x-6">
            {/* <a
              href="https://github.com/shrey"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-indigo-600 hover-transition hover-lift"
            >
              <Github className="h-8 w-8" />
            </a> */}
            <a
              href="https://linkedin.com/in/shreyes19"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-indigo-600 hover-transition hover-lift"
            >
              <Linkedin className="h-8 w-8" />
            </a>
            <a
              href="mailto:contact@literallyshreyas.com"
              className="text-gray-600 hover:text-indigo-600 hover-transition hover-lift"
            >
              <Mail className="h-8 w-8" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;