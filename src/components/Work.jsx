// import React from 'react';
// import { Calendar, MapPin } from 'lucide-react';

// const Work = () => {
//   const experiences = [
//     {
//       title: 'Senior Software Engineer',
//       company: 'Tech Solutions Inc.',
//       period: '2021 - Present',
//       location: 'San Francisco, CA',
//       description: [
//         'Led development of microservices architecture serving 1M+ users',
//         'Implemented CI/CD pipelines reducing deployment time by 60%',
//         'Mentored junior developers and conducted code reviews',
//       ],
//     },
//     {
//       title: 'Software Engineer',
//       company: 'Digital Innovations Ltd',
//       period: '2019 - 2021',
//       location: 'New York, NY',
//       description: [
//         'Developed full-stack applications using React and Node.js',
//         'Optimized database queries improving performance by 40%',
//         'Collaborated with cross-functional teams to deliver projects on time',
//       ],
//     },
//     {
//       title: 'Junior Developer',
//       company: 'StartUp Hub',
//       period: '2018 - 2019',
//       location: 'Boston, MA',
//       description: [
//         'Built responsive web applications using modern JavaScript frameworks',
//         'Participated in agile development processes',
//         'Contributed to open-source projects',
//       ],
//     },
//     {
//       title: 'Software Development Intern',
//       company: 'Innovation Labs',
//       period: '2017 - 2018',
//       location: 'Seattle, WA',
//       description: [
//         'Developed and maintained web applications using React',
//         'Collaborated with senior developers on major projects',
//         'Implemented responsive design principles',
//       ],
//     },
//     {
//       title: 'Web Development Intern',
//       company: 'Tech Startups Inc',
//       period: '2017',
//       location: 'Austin, TX',
//       description: [
//         'Created and maintained company websites',
//         'Implemented SEO best practices',
//         'Worked with cross-functional teams',
//       ],
//     },
//   ];

//   return (
//     <div className="py-24 bg-white h-screen flex flex-col">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex-shrink-0">
//         <div className="text-center">
//           <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Work Experience</h2>
//           <p className="mt-4 text-xl text-gray-600">
//             Professional journey and achievements
//           </p>
//         </div>
//       </div>

//       <div className="mt-20 flex-grow overflow-hidden">
//         <div className="h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="h-full overflow-y-auto pr-4 custom-scrollbar">
//             <div className="space-y-8">
//               {experiences.map((exp, index) => (
//                 <div 
//                   key={index}
//                   className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
//                 >
//                   <div className="flex justify-between items-start">
//                     <div>
//                       <h3 className="text-xl font-bold text-gray-900">{exp.title}</h3>
//                       <p className="text-lg font-medium text-indigo-600">{exp.company}</p>
//                     </div>
//                   </div>
                  
//                   <div className="flex items-center text-sm text-gray-500 mt-2 space-x-4">
//                     <div className="flex items-center">
//                       <Calendar className="h-4 w-4 mr-1" />
//                       {exp.period}
//                     </div>
//                     <div className="flex items-center">
//                       <MapPin className="h-4 w-4 mr-1" />
//                       {exp.location}
//                     </div>
//                   </div>
                  
//                   <ul className="mt-4 space-y-2">
//                     {exp.description.map((item, i) => (
//                       <li key={i} className="flex items-start">
//                         <span className="inline-block w-2 h-2 bg-indigo-600 rounded-full mt-2 mr-2"></span>
//                         <span className="text-gray-600">{item}</span>
//                       </li>
//                     ))}
//                   </ul>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Work;










import React from 'react';
import { Calendar, MapPin } from 'lucide-react';

const Work = () => {
  const experiences = [
    {
      title: 'Associate Software Engineer',
      company: 'Ahana Systems and Solutions',
      period: 'Jul 2024 – Present',
      location: 'Bengaluru',
      description: [
        'Developed scalable and secure Node.js microservices with error handling and SHA-256 hash-based file integrity monitoring for over 100,000+ distributed files.',
        'Designed and optimized REST APIs using Express.js and Django ORM with Redis for in-memory caching, achieving 60% latency reduction.',
        'Participated in Agile SDLC via code reviews, CI pipelines, and pair programming, reducing bugs by 25%.',
      ],
    },
    {
      title: 'Python Developer Intern',
      company: 'GTPL',
      period: 'Feb 2024 – May 2024',
      location: 'Bengaluru',
      description: [
        'Contributed to Django PostgreSQL-based modules for customer data workflows in BFSI domain, with secure auth and form validation.',
        'Developed pytest-based unit test suite covering 85% of codebase; accelerated QA and deployment cycle.',
      ],
    },
    {
      title: 'Data Science and Business Analytics Intern',
      company: 'The Sparks Foundation',
      period: 'Apr 2022 – May 2022',
      location: 'Remote',
      description: [
        'Analyzed stock prices and news headlines, delivering actionable insights that improved forecasting accuracy by 25%.',
        'Developed dashboards in Python and Power BI for presenting insights clearly and concisely.',
      ],
    },
    {
      title: 'Machine Learning and Automation Intern',
      company: 'AiRobosoft',
      period: 'Jun 2020 – Aug 2020',
      location: 'Remote',
      description: [
        'Created an automated voice assistant for efficient task management, reducing manual effort by 25%.',
        'Streamlined repetitive tasks using Python scripts, improving productivity.',
      ],
    },
  ];

  return (
    <div className="py-24 bg-white h-screen flex flex-col">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex-shrink-0">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Work Experience</h2>
          <p className="mt-4 text-xl text-gray-600">
            Professional journey and achievements
          </p>
        </div>
      </div>

      <div className="mt-20 flex-grow overflow-hidden">
        <div className="h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="h-full overflow-y-auto pr-4 custom-scrollbar">
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">{exp.title}</h3>
                      <p className="text-lg font-medium text-indigo-600">{exp.company}</p>
                    </div>
                  </div>

                  <div className="flex items-center text-sm text-gray-500 mt-2 space-x-4">
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      {exp.period}
                    </div>
                    <div className="flex items-center">
                      <MapPin className="h-4 w-4 mr-1" />
                      {exp.location}
                    </div>
                  </div>

                  <ul className="mt-4 space-y-2">
                    {exp.description.map((item, i) => (
                      <li key={i} className="flex items-start">
                        <span className="inline-block w-2 h-2 bg-indigo-600 rounded-full mt-2 mr-2"></span>
                        <span className="text-gray-600">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
