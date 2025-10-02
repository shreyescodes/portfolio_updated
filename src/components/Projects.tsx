// import React, { useRef } from 'react';
// import { Github, ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react';

// const Projects = () => {
//   const scrollContainerRef = useRef<HTMLDivElement>(null);

//   const scroll = (direction: 'left' | 'right') => {
//     if (scrollContainerRef.current) {
//       const container = scrollContainerRef.current;
//       const scrollAmount = container.clientWidth;
//       const newScrollPosition = container.scrollLeft + 
//         (direction === 'left' ? -scrollAmount : scrollAmount);
      
//       container.scrollTo({
//         left: newScrollPosition,
//         behavior: 'smooth'
//       });
//     }
//   };

//   const projects = [
//     {
//       title: 'E-Commerce Platform',
//       description: 'A full-stack e-commerce solution with real-time inventory management.',
//       image: 'https://images.unsplash.com/photo-1661956602116-aa6865609028?auto=format&fit=crop&q=80&w=800',
//       tech: ['React', 'Node.js', 'MongoDB', 'Redux'],

//     },
//     {
//       title: 'Task Management System',
//       description: 'Collaborative project management tool with real-time updates.',
//       image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=800',
//       tech: ['TypeScript', 'React', 'Firebase', 'Material-UI'],

//     },
//     {
//       title: 'AI Content Generator',
//       description: 'ML-powered application for generating marketing content.',
//       image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800',
//       tech: ['Python', 'TensorFlow', 'FastAPI', 'React'],

//     },
//   ];

//   return (
//     <div className="py-24 bg-gray-50">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="text-center">
//           <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Featured Projects</h2>
//           <p className="mt-4 text-xl text-gray-600">
//             Showcase of my recent work and contributions
//           </p>
//         </div>

//         <div className="mt-20 relative">
//           <button
//             onClick={() => scroll('left')}
//             className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 p-2 rounded-full shadow-md hover:bg-indigo-600 hover:text-white transition-all duration-200 hidden md:block"
//             aria-label="Scroll left"
//           >
//             <ChevronLeft className="h-6 w-6" />
//           </button>
          
//           <button
//             onClick={() => scroll('right')}
//             className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 p-2 rounded-full shadow-md hover:bg-indigo-600 hover:text-white transition-all duration-200 hidden md:block"
//             aria-label="Scroll right"
//           >
//             <ChevronRight className="h-6 w-6" />
//           </button>

//           <div 
//             ref={scrollContainerRef}
//             className="flex gap-12 overflow-x-auto scrollbar-hide snap-x snap-mandatory scroll-smooth px-4"
//             style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
//           >
//             {projects.map((project, index) => (
//               <div
//                 key={index}
//                 className="min-w-[300px] md:min-w-[350px] flex-shrink-0 snap-center"
//               >
//                 <div className="relative h-48 overflow-hidden">
//                   <img
//                     src={project.image}
//                     alt={project.title}
//                     className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-300"
//                   />
//                 </div>
                
//                 <div className="p-6">
//                   <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
//                   <p className="text-gray-600 mb-4">{project.description}</p>
                  
//                   <div className="flex flex-wrap gap-2 mb-4">
//                     {project.tech.map((tech, i) => (
//                       <span
//                         key={i}
//                         className="px-3 py-1 bg-indigo-50 text-indigo-600 rounded-full text-sm font-medium"
//                       >
//                         {tech}
//                       </span>
//                     ))}
//                   </div>
                  
//                   <div className="flex space-x-4">
//                     <a
//                       href={project.github}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className="flex items-center text-gray-600 hover:text-indigo-600 transition-colors"
//                     >
//                       <Github className="h-5 w-5 mr-1" />
//                       Code
//                     </a>
//                     <a
//                       href={project.live}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className="flex items-center text-gray-600 hover:text-indigo-600 transition-colors"
//                     >
//                       <ExternalLink className="h-5 w-5 mr-1" />
//                       Live Demo
//                     </a>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Projects;




import React, { useRef, useState } from 'react';
import { ChevronLeft, ChevronRight, Award, Users, Workflow, BarChart3, Database, Zap } from 'lucide-react';

const Projects = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const scrollAmount = container.clientWidth * 0.8;
      const newScrollPosition = container.scrollLeft + 
        (direction === 'left' ? -scrollAmount : scrollAmount);
      
      container.scrollTo({
        left: newScrollPosition,
        behavior: 'smooth'
      });
    }
  };

  const projects = [
    {
      title: 'Workflow Automation SaaS Platform',
      description: 'A comprehensive full-stack automation dashboard built with MERN stack featuring real-time updates, intuitive drag-and-drop workflow builder, and intelligent node-cron schedulers for seamless task automation.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800',
      tech: ['React.js', 'Node.js', 'MongoDB', 'Express.js', 'Socket.io', 'Redis'],
      icon: <Workflow className="h-8 w-8" />,
      stats: [
        { label: 'Daily Events', value: '1,000+' },
        { label: 'API Integrations', value: '3+' },
        { label: 'Real-time Updates', value: '100%' }
      ],
      highlights: [
        'Integrated Google Calendar, Slack, and SendGrid APIs',
        'Processing 1,000+ daily automation events',
        'Advanced retry mechanisms and comprehensive logging',
        'Drag-and-drop workflow builder interface'
      ],
      category: 'Full-Stack Development'
    },
    {
      title: 'Custom Analytics Dashboard',
      description: 'Advanced data visualization platform engineered with React.js and Chart.js, featuring a robust Node.js backend with MongoDB storage and Redis caching for optimal performance.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800',
      tech: ['React.js', 'Chart.js', 'Node.js', 'MongoDB', 'Redis', 'Elasticsearch'],
      icon: <BarChart3 className="h-8 w-8" />,
      stats: [
        { label: 'Load Time Improvement', value: '90%' },
        { label: 'Cache Hit Rate', value: '95%' },
        { label: 'Data Sources', value: 'Multiple' }
      ],
      highlights: [
        'Elasticsearch for log aggregation and search',
        '90% improvement in dashboard load times',
        'Advanced query optimization and indexing',
        'Real-time data visualization capabilities'
      ],
      category: 'Data Engineering'
    },
    {
      title: 'Automated Health Monitoring System',
      description: 'Award-winning IoT-based health monitoring solution that earned Best Paper at IETE National Conference and government sponsorship from Karnataka State Council for Science and Technology.',
      image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&q=80&w=800',
      tech: ['Python', 'IoT', 'Machine Learning', 'Django', 'PostgreSQL', 'Data Analytics'],
      icon: <Award className="h-8 w-8" />,
      stats: [
        { label: 'Recognition', value: 'Best Paper' },
        { label: 'Funding', value: 'Govt. Sponsored' },
        { label: 'Conference', value: 'IETE National' }
      ],
      highlights: [
        'Best Paper Award at IETE National Conference',
        'Government sponsorship from Karnataka State Council',
        'Real-time health parameter monitoring',
        'Advanced ML algorithms for health predictions'
      ],
      category: 'IoT & Machine Learning',
      award: true
    },
    {
      title: 'Microservices Architecture Platform',
      description: 'Scalable and secure Node.js microservices ecosystem with advanced error handling, SHA-256 hash-based file integrity monitoring, and distributed file management capabilities.',
      image: 'https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?auto=format&fit=crop&q=80&w=800',
      tech: ['Node.js', 'Express.js', 'Redis', 'Docker', 'Kubernetes', 'SHA-256'],
      icon: <Database className="h-8 w-8" />,
      stats: [
        { label: 'Files Monitored', value: '100,000+' },
        { label: 'Latency Reduction', value: '60%' },
        { label: 'Bug Reduction', value: '25%' }
      ],
      highlights: [
        'SHA-256 hash-based file integrity monitoring',
        'Managing 100,000+ distributed files',
        '60% latency reduction with Redis caching',
        'Enterprise-grade security and scalability'
      ],
      category: 'Backend Development'
    },
    {
      title: 'Voice Assistant Automation',
      description: 'Intelligent voice-activated task management system designed to optimize workflows and reduce manual effort through advanced automation and natural language processing.',
      image: 'https://images.unsplash.com/photo-1589254065878-42c9da997008?auto=format&fit=crop&q=80&w=800',
      tech: ['Python', 'Machine Learning', 'Speech Recognition', 'NLP', 'Automation'],
      icon: <Zap className="h-8 w-8" />,
      stats: [
        { label: 'Efficiency Gain', value: '25%' },
        { label: 'Voice Commands', value: 'Multi-lingual' },
        { label: 'Task Automation', value: 'Advanced' }
      ],
      highlights: [
        '25% reduction in manual effort',
        'Natural language processing capabilities',
        'Automated workflow optimization',
        'Voice-activated task management'
      ],
      category: 'AI & Automation'
    }
  ];

  return (
    <div className="py-24 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-indigo-100 text-indigo-800 rounded-full text-sm font-medium mb-6">
            <Users className="h-4 w-4 mr-2" />
            Professional Portfolio
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Featured Projects</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Showcasing innovative solutions across full-stack development, microservices architecture, 
            IoT systems, and AI-powered automation platforms
          </p>
          <div className="mt-8 flex justify-center space-x-8 text-sm text-gray-500">
            <div className="flex items-center">
              <div className="w-3 h-3 bg-green-400 rounded-full mr-2"></div>
              Production Ready
            </div>
            <div className="flex items-center">
              <div className="w-3 h-3 bg-blue-400 rounded-full mr-2"></div>
              Award Winning
            </div>
            <div className="flex items-center">
              <div className="w-3 h-3 bg-purple-400 rounded-full mr-2"></div>
              Open Source
            </div>
          </div>
        </div>

        <div className="relative">
          <button
            onClick={() => scroll('left')}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/90 backdrop-blur-sm p-3 rounded-full shadow-lg hover:bg-indigo-600 hover:text-white transition-all duration-300 hidden lg:flex items-center justify-center group"
            aria-label="Scroll left"
          >
            <ChevronLeft className="h-6 w-6 group-hover:scale-110 transition-transform" />
          </button>
          
          <button
            onClick={() => scroll('right')}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/90 backdrop-blur-sm p-3 rounded-full shadow-lg hover:bg-indigo-600 hover:text-white transition-all duration-300 hidden lg:flex items-center justify-center group"
            aria-label="Scroll right"
          >
            <ChevronRight className="h-6 w-6 group-hover:scale-110 transition-transform" />
          </button>

          <div 
            ref={scrollContainerRef}
            className="flex gap-8 overflow-x-auto scrollbar-hide snap-x snap-mandatory scroll-smooth px-4 pb-4"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {projects.map((project, index) => (
              <div
                key={index}
                className="min-w-[320px] md:min-w-[360px] flex-shrink-0 snap-center group"
                onMouseEnter={() => setHoveredProject(index)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                <div className={`bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform ${
                  hoveredProject === index ? 'scale-102 -translate-y-1' : ''
                }`}>
                  {/* Project Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute top-3 left-3">
                      <div className="bg-white/90 backdrop-blur-sm p-1.5 rounded-lg">
                        <div className="text-indigo-600">
                          {React.cloneElement(project.icon, { className: "h-5 w-5" })}
                        </div>
                      </div>
                    </div>
                    {project.award && (
                      <div className="absolute top-3 right-3">
                        <div className="bg-gradient-to-r from-yellow-400 to-orange-500 p-1.5 rounded-lg">
                          <Award className="h-4 w-4 text-white" />
                        </div>
                      </div>
                    )}
                  </div>
                  
                  {/* Project Content */}
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="text-xl font-bold text-gray-900 group-hover:text-indigo-600 transition-colors">
                        {project.title}
                      </h3>
                      <span className="bg-indigo-50 text-indigo-700 px-2 py-1 rounded-full text-xs font-medium ml-2 flex-shrink-0">
                        {project.category}
                      </span>
                    </div>
                    <p className="text-gray-600 mb-4 text-sm line-clamp-3">
                      {project.description}
                    </p>
                    
                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.slice(0, 4).map((tech, i) => (
                        <span
                          key={i}
                          className="px-2 py-1 bg-indigo-50 text-indigo-600 rounded-full text-xs font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.tech.length > 4 && (
                        <span className="px-2 py-1 bg-gray-100 text-gray-600 rounded-full text-xs font-medium">
                          +{project.tech.length - 4} more
                        </span>
                      )}
                    </div>
                    
                    {/* Key Highlights */}
                    <div>
                      <ul className="space-y-1.5">
                        {project.highlights.slice(0, 3).map((highlight, i) => (
                          <li key={i} className="flex items-start">
                            <div className="w-1 h-1 bg-indigo-600 rounded-full mt-1.5 mr-2 flex-shrink-0"></div>
                            <span className="text-xs text-gray-600 line-clamp-2">{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Contact CTA */}
        {/* <div className="mt-20 text-center">
          <div className="bg-white rounded-2xl p-8 shadow-lg max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Interested in Collaboration?</h3>
            <p className="text-gray-600 mb-6">
              Let's discuss how these technologies and experiences can contribute to your next project.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:shreyastc19@gmail.com"
                className="inline-flex items-center px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors font-medium"
              >
                Get In Touch
              </a>
              <a
                href="https://linkedin.com/in/shreyas-tc"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-gray-100 text-gray-900 rounded-lg hover:bg-gray-200 transition-colors font-medium"
              >
                Connect on LinkedIn
              </a>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Projects;