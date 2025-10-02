import React from 'react';
import { Calendar, MapPin } from 'lucide-react';

const Work = () => {
  const experiences = [
    {
      title: 'Senior Software Engineer',
      company: 'Tech Solutions Inc.',
      period: '2021 - Present',
      location: 'San Francisco, CA',
      description: [
        'Led development of microservices architecture serving 1M+ users',
        'Implemented CI/CD pipelines reducing deployment time by 60%',
        'Mentored junior developers and conducted code reviews',
      ],
    },
    {
      title: 'Software Engineer',
      company: 'Digital Innovations Ltd',
      period: '2019 - 2021',
      location: 'New York, NY',
      description: [
        'Developed full-stack applications using React and Node.js',
        'Optimized database queries improving performance by 40%',
        'Collaborated with cross-functional teams to deliver projects on time',
      ],
    },
    {
      title: 'Junior Developer',
      company: 'StartUp Hub',
      period: '2018 - 2019',
      location: 'Boston, MA',
      description: [
        'Built responsive web applications using modern JavaScript frameworks',
        'Participated in agile development processes',
        'Contributed to open-source projects',
      ],
    },
  ];

  return (
    <div className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Work Experience</h2>
          <p className="mt-4 text-xl text-gray-600">
            Professional journey and achievements
          </p>
        </div>

        <div className="mt-20">
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-gray-200"></div>
            
            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <div key={index} className="relative group">
                  <div className="flex items-center">
                    <div className="flex-1 md:flex md:justify-between">
                      <div className={`relative bg-white p-6 rounded-lg shadow-md transition-all duration-300 hover:shadow-lg ${
                        index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'
                      }`}>
                        <div className="flex justify-between items-center mb-4">
                          <div>
                            <h3 className="text-xl font-bold text-gray-900">{exp.title}</h3>
                            <p className="text-lg font-medium text-indigo-600">{exp.company}</p>
                          </div>
                        </div>
                        
                        <div className="flex items-center text-sm text-gray-500 mb-4 space-x-4">
                          <div className="flex items-center">
                            <Calendar className="h-4 w-4 mr-1" />
                            {exp.period}
                          </div>
                          <div className="flex items-center">
                            <MapPin className="h-4 w-4 mr-1" />
                            {exp.location}
                          </div>
                        </div>
                        
                        <ul className="list-disc list-inside space-y-2 text-gray-600">
                          {exp.description.map((item, i) => (
                            <li key={i}>{item}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
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