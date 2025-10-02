// import React from 'react';
// import { GraduationCap, Award, BookOpen } from 'lucide-react';

// const Education = () => {
//   const education = [
//     {
//       degree: "Master's in Computer Science",
//       school: 'Stanford University',
//       period: '2016 - 2018',
//       description: 'Specialized in Machine Learning and Distributed Systems',
//       achievements: [
//         'Published research paper on distributed systems',
//         'Teaching Assistant for Advanced Algorithms',
//         'Graduate with Honors',
//       ],
//     },
//     {
//       degree: "Bachelor's in Software Engineering",
//       school: 'MIT',
//       period: '2012 - 2016',
//       description: 'Focus on Software Architecture and Web Technologies',
//       achievements: [
        
//         'Led university hackathon team',
//         'Completed internship at Google',
//       ],
//     },
//   ];

//   const certifications = [
//     {
//       name: 'AWS Solutions Architect',
//       issuer: 'Amazon Web Services',
//       year: '2021',
//     },
//     {
//       name: 'Google Cloud Professional',
//       issuer: 'Google',
//       year: '2020',
//     },
//     {
//       name: 'MongoDB Developer',
//       issuer: 'MongoDB University',
//       year: '2019',
//     },
//   ];

//   return (
//     <div className="py-24 bg-white">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="text-center">
//           <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Education & Certifications</h2>
//           <p className="mt-4 text-xl text-gray-600">
//             Academic background and professional certifications
//           </p>
//         </div>

//         <div className="mt-20">
//           <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
//             {/* Education Section */}
//             <div>
//               <div className="flex items-center mb-8">
//                 <GraduationCap className="h-8 w-8 text-indigo-600 mr-3" />
//                 <h3 className="text-2xl font-bold text-gray-900">Education</h3>
//               </div>
              
//               <div className="space-y-8">
//                 {education.map((edu, index) => (
//                   <div
//                     key={index}
//                     className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
//                   >
//                     <h4 className="text-xl font-bold text-gray-900">{edu.degree}</h4>
//                     <p className="text-indigo-600 font-medium">{edu.school}</p>
//                     <p className="text-gray-500 mt-1">{edu.period}</p>
//                     <p className="text-gray-600 mt-2">{edu.description}</p>
                    
//                     <ul className="mt-4 space-y-2">
//                       {edu.achievements.map((achievement, i) => (
//                         <li key={i} className="flex items-start">
//                           <Award className="h-5 w-5 text-indigo-600 mr-2 mt-0.5" />
//                           <span className="text-gray-600">{achievement}</span>
//                         </li>
//                       ))}
//                     </ul>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             {/* Certifications Section */}
//             <div>
//               <div className="flex items-center mb-8">
//                 <BookOpen className="h-8 w-8 text-indigo-600 mr-3" />
//                 <h3 className="text-2xl font-bold text-gray-900">Certifications</h3>
//               </div>
              
//               <div className="space-y-6">
//                 {certifications.map((cert, index) => (
//                   <div
//                     key={index}
//                     className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
//                   >
//                     <div className="flex justify-between items-center">
//                       <div>
//                         <h4 className="text-lg font-bold text-gray-900">{cert.name}</h4>
//                         <p className="text-gray-600">{cert.issuer}</p>
//                       </div>
//                       <span className="text-indigo-600 font-medium">{cert.year}</span>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Education;







import React from 'react';
import { GraduationCap, Calendar, MapPin, Star } from 'lucide-react';

const Education = () => {
  const education = [
    {
      degree: "B.E. in Electronics and Communications",
      school: 'RNS Institute of Technology',
      location: 'Bengaluru',
      // period: '2019 - 2023',
      description: 'Comprehensive engineering program focusing on electronics, communications, and embedded systems with hands-on project experience.',
      achievements: [
        'Best Paper Award at IETE National Conference',
        'Government Sponsorship from Karnataka State Council for Science and Technology',
        'Final Year Project: "Automated Health Monitoring System"',
        'Strong foundation in electronics, communications, and software development'
      ],
      // gpa: 'Distinction',
      specialization: 'IoT & Embedded Systems'
    }
  ];

  return (
    <div className="py-24 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-indigo-100 text-indigo-800 rounded-full text-sm font-medium mb-6">
            <GraduationCap className="h-4 w-4 mr-2" />
            Academic Journey
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Education</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Strong foundation in Electronics & Communication Engineering with specialization in IoT and Embedded Systems.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {education.map((edu, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-indigo-100"
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2">{edu.degree}</h4>
                  <div className="flex items-center text-indigo-600 font-semibold mb-1">
                    {edu.school}
                  </div>
                  <div className="flex items-center text-gray-500 space-x-4">
                    <div className="flex items-center">
                      <MapPin className="h-4 w-4 mr-1" />
                      <span>{edu.location}</span>
                    </div>
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      <span>{edu.period}</span>
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium mb-2">
                    {edu.gpa}
                  </div>
                  <div className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-xs font-medium">
                    {edu.specialization}
                  </div>
                </div>
              </div>

              <p className="text-gray-600 mb-6 leading-relaxed">{edu.description}</p>

              <div className="space-y-3">
                <h5 className="font-semibold text-gray-900">Key Achievements:</h5>
                {edu.achievements.map((achievement, i) => (
                  <div key={i} className="flex items-start">
                    <Star className="h-5 w-5 text-yellow-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600 text-sm">{achievement}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Education;
