import React from 'react';
import member1 from '../assets/member1.jpg';
import member2 from '../assets/member2.jpg';
import member3 from '../assets/member3.jpg';
import member4 from '../assets/member4.jpg';
import member5 from '../assets/member5.jpg';
import member6 from '../assets/member6.jpg';
import member7 from '../assets/member7.jpg';
import member8 from '../assets/member8.jpg';
import member9 from '../assets/member9.jpg';
import member10 from '../assets/member10.jpg';
import linkedinIcon from '../assets/linkedin.svg';
import twitterIcon from '../assets/twitter.svg';
import githubIcon from '../assets/github.svg';

const teamMembers = [
  {
    name: 'Monal Gupta',
    position: 'Overall Coordinator',
    avatar: member1,
    linkedin: 'https://www.linkedin.com/',
    twitter: 'https://twitter.com/',
    github: 'https://github.com/johndoe',
  },
  {
    name: 'Manoj Kumar Gorle',
    position: 'Co - Overall Coordinator',
    avatar: member2,
    linkedin: 'https://www.linkedin.com/',
    twitter: 'https://twitter.com/',
    github: 'https://github.com/manojkgorle',
  },
  {
    name: 'Muskan Kumari',
    position: 'Dev Team',
    avatar: member3,
    linkedin: 'https://www.linkedin.com/',
    twitter: 'https://twitter.com/',
    github: 'https://github.com/',
  },
  {
    name: 'Aditya Anand',
    position: 'Dev Team',
    avatar: member4,
    linkedin: 'https://www.linkedin.com/',
    twitter: 'https://twitter.com/',
    github: 'https://github.com/aditya-git16',
  },
  {
    name: 'Raman',
    position: 'Dev Team',
    avatar: member5,
    linkedin: 'https://www.linkedin.com/in/',
    twitter: 'https://twitter.com/',
    github: 'https://github.com/RamanS1819',
  },
  {
    name: 'Rajashree',
    position: 'Dev Team',
    avatar: member6,
    linkedin: 'https://www.linkedin.com/in/',
    twitter: 'https://twitter.com/',
    github: 'https://github.com/RajasreePonnada',
  },
  {
    name: 'Nitin',
    position: 'Dev Team',
    avatar: member7,
    linkedin: 'https://www.linkedin.com/',
    twitter: 'https://twitter.com/',
    github: 'https://github.com/vnitin08',
  },
  {
    name: 'Gautam',
    position: 'Dev Team',
    avatar: member8,
    linkedin: 'https://www.linkedin.com/',
    twitter: 'https://twitter.com/',
    github: 'https://github.com/whoisgautxm',
  },
  {
    name: 'Aryan',
    position: 'Dev Team',
    avatar: member9,
    linkedin: 'https://www.linkedin.com/',
    twitter: 'https://twitter.com/',
    github: 'https://github.com/aryandharwa',
  },
  {
    name: 'Shivansh Gupta',
    position: 'Dev Team',
    avatar: member10,
    linkedin: 'https://www.linkedin.com/',
    twitter: 'https://twitter.com/',
    github: 'https://github.com/shivannsh',
  },
];

const Team = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-gray-800 mb-8 text-center">Our Team</h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8 ">
        {teamMembers.map((member, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md p-4 text-center transform transition-transform hover:scale-105 cursor-pointer">
            <img
              src={member.avatar}
              alt={member.name}
              className="w-32 h-32 rounded-full mx-auto mb-4"
            />
            <h2 className="text-xl font-semibold text-gray-800">{member.name}</h2>
            <p className="text-gray-600">{member.position}</p>
            <div className="flex justify-center mt-4 space-x-4">
            <a href={member.twitter} target="_blank" rel="noopener noreferrer">
                <img
                  src={twitterIcon}
                  alt="Twitter"
                  className="w-6 h-6 filter grayscale hover:filter-none transform hover:scale-110 transition-transform duration-200"
                />
              </a>
              <a href={member.github} target="_blank" rel="noopener noreferrer">
                <img
                  src={githubIcon}
                  alt="GitHub"
                  className="w-6 h-6 filter grayscale hover:filter-none transform hover:scale-110 transition-transform duration-200"
                />
              </a>
              <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
                <img
                  src={linkedinIcon}
                  alt="LinkedIn"
                  className="w-6 h-6 filter grayscale hover:filter-none transform hover:scale-110 transition-transform duration-200"
                />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
