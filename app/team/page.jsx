import Image from 'next/image';

import member1 from '@public/assets/member1.jpg';
import member2 from '@public/assets/member2.jpg';
import member3 from '@public/assets/member3.jpg';
import member4 from '@public/assets/member4.jpg';
import member5 from '@public/assets/member5.jpg';
import member6 from '@public/assets/member6.jpg';
import member7 from '@public/assets/member7.jpg';
import member8 from '@public/assets/member8.jpg';
import member9 from '@public/assets/member9.jpg';
import member10 from '@public/assets/member10.jpg';
import linkedinIcon from '@public/assets/linkedin.svg';
import twitterIcon from '@public/assets/twitter.svg';
import githubIcon from '@public/assets/github.svg';

const teamMembers = [
  {
    name: 'Monal Gupta',
    position: 'Overall Coordinator',
    avatar: member1,
    linkedin: 'https://www.linkedin.com/',
    twitter: 'https://twitter.com/',
    github: 'https://github.com/johndoe',
    about: 'Monal is the Overall Coordinator '
  },
  {
    name: 'Manoj Kumar Gorle',
    position: 'Co - Overall Coordinator',
    avatar: member2,
    linkedin: 'https://www.linkedin.com/',
    twitter: 'https://twitter.com/',
    github: 'https://github.com/manojkgorle',
    about: 'Manoj ser is the co-overall coordinatior'
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
  {
    name: 'Arnav Panjla',
    position: 'NFT :D',
    avatar: member10,
    linkedin: 'https://www.linkedin.com/',
    twitter: 'https://twitter.com/',
    github: 'https://github.com/arnav-panjla',
    about:'I am batman '
  },
];

const Team = () => {
  return (
    <div className="container mx-auto p-4" style={{ maxWidth: '1000px' }}>
      <h1 className="text-3xl font-bold text-neonGreen mb-8 text-center">Our Team</h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8">
        {teamMembers.map((member, index) => (
          <div key={index} className="flip-card ">
            <div className="flip-card-inner relative bg-white rounded-xl shadow-2xl text-center cursor-pointer perspective w-full h-64">
              <div className="flip-card-front absolute w-full h-full">
                <Image
                  src={member.avatar}
                  alt={member.name}
                  className="w-32 h-32 rounded-full mx-auto mb-4"
                />
                <h2 className="text-xl font-semibold text-gray-800">{member.name}</h2>
                <p className="text-gray-600">{member.position}</p>
                
              </div>
              <div className="flip-card-back absolute w-full h-full bg-black text-neonBlue rounded-xl p-4">
                <p className="text-md">{member.about}</p>
                <div className="absolute bottom-4 flex fle-row space-x-4 justify-items-center mt-4 ">
                  <a href={member.twitter} target="_blank" rel="noopener noreferrer">
                    <Image
                      src={twitterIcon}
                      alt="Twitter"
                      className="w-6 h-6 transform hover:scale-110 transition-transform duration-200"
                    />
                  </a>
                  <a href={member.github} target="_blank" rel="noopener noreferrer">
                    <Image
                      src={githubIcon}
                      alt="GitHub"
                      className="w-6 h-6 transform hover:scale-110 transition-transform duration-200"
                    />
                  </a>
                  <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
                    <Image
                      src={linkedinIcon}
                      alt="LinkedIn"
                      className="w-6 h-6 transform hover:scale-110 transition-transform duration-200"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    
    </div>
  );
};

export default Team;
