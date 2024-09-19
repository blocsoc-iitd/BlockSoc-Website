
import Image from 'next/image';
import TeamMemberCard from '@components/TeamMemberCard';

import dummy from '@public/assets/team/dummy.jpg';
import monalGupta from '@public/assets/team/monalGupta.jpg'
import manojSer from '@public/assets/team/manojSer.jpeg'
import adityaBansal from '@public/assets/team/adityaBansal.jpg'
import akshatShandilya from '@public/assets/team/akshatShandilya.jpg'
import arnavPanjla from '@public/assets/team/arnavPanjla.jpeg'
import aryanDharwa from '@public/assets/team/aryanDharwa.jpg'
import aryanGiri from '@public/assets/team/aryanGiri.jpeg'
import rupadityaAdireddy from '@public/assets/team/rupadityaAdireddy.jpeg'
import gautamKumar from '@public/assets/team/gautamKumar.jpg'
import kushagrahJain from '@public/assets/team/kushagrahJain.jpeg'
import nitinVerma from '@public/assets/team/nitinVerma.jpg'
import ramkrishnaGena from '@public/assets/team/ramkrishnaGena.png'
import reeshabKotecha from '@public/assets/team/reeshabKotecha.jpeg'
import shivanshGupta from '@public/assets/team/shivanshGupta.png'
import siddhiSawarkar from '@public/assets/team/siddhiSawarkar.jpg'
import suraj from '@public/assets/team/suraj.jpeg'
import tejashviKumawat from '@public/assets/team/tejashviKumawat.PNG'
import vivekKumar from '@public/assets/team/vivekKumar.jpg'

import '@/styles/profileCard.css'
import linkedinIcon from '@public/assets/icons/linkedin.svg';
import twitterIcon from '@public/assets/icons/twitter.svg';
import githubIcon from '@public/assets/icons/github.svg';

const teamMembers = [
  {
    name: 'Monal Gupta',
    position: 'President',
    avatar: monalGupta  ,
    linkedin: 'https://www.linkedin.com/in/monalgupta03/',
    twitter: 'https://twitter.com/monalgupta03',
    github: 'https://github.com/monalgupta03',
    quote: 'Disrupt the status quo'
  },
  {
    name: 'Manoj Kumar Gorle',
    position: 'Vice President',
    avatar: manojSer,
    linkedin: 'https://linkedin.com/in/manojkgorle',
    twitter: 'https://twitter.com/manojkgorle',
    github: 'https://github.com/manojkgorle',
    quote: 'Let verification take the control.'
  },
  {
    name: 'Aditya Anand',
    position: 'Developer',
    avatar: dummy,
    linkedin: 'https://www.linkedin.com/',
    twitter: 'https://twitter.com/',
    github: 'https://github.com/aditya-git16',
  },
  {
    name: 'Suraj',
    position: 'Researcher',
    avatar: suraj,
    linkedin: 'https://www.linkedin.com/in/suraj-choudhary-861a13285',
    twitter: 'https://twitter.com/esciiee',
    github: 'https://github.com/esciiee',
    quote: 'verify without trusting',
  },
  {
    name: 'Muskan Kumari',
    position: 'Researcher',
    avatar: dummy,
    linkedin: 'https://www.linkedin.com/',
    twitter: 'https://twitter.com/',
    github: 'https://github.com/',
  },
  {
    name: 'Rajashree',
    position: 'Developer',
    avatar: dummy,
    linkedin: 'https://www.linkedin.com/in/',
    twitter: 'https://twitter.com/',
    github: 'https://github.com/RajasreePonnada',
  },
  {
    name: 'Siddhi Vivek Sawarkar',
    position: 'Partnership Manager',
    avatar: siddhiSawarkar,
    linkedin: 'https://www.linkedin.com/in/siddhi-sawarkar-4a7585254',
    twitter: 'https://twitter.com/SiddhiSawarkar',
    quote: 'Be fearless and explore',
  },
  {
    name: 'Saksham Kumar',
    position: 'Partnership Manager',
    avatar: dummy,
  },
  {
    name: 'Raman',
    position: 'Researcher',
    avatar: dummy,
    linkedin: 'https://www.linkedin.com/in/',
    twitter: 'https://twitter.com/',
    github: 'https://github.com/RamanS1819',
  },
  {
    name: 'Nitin',
    position: 'Developer',
    avatar: nitinVerma,
    linkedin: 'https://www.linkedin.com/in/nitin-verma-13392a253',
    twitter: 'https://x.com/baptonic3',
    github: 'https://github.com/vnitin08',
    quote: 'Privacy is a right, scalability is a need – I build both.'
  },
  {
    name: 'Arnav Panjla',
    position: 'Developer',
    avatar: arnavPanjla,
    linkedin: 'https://www.linkedin.com/in/arnav-panjla-a71309299/',
    twitter: 'https://x.com/ArnavPanjla',
    github: 'https://github.com/arnav-panjla',
    quote:'Strength lies not in secrecy but in the precision of what we reveal—ZK proves that, the less you show, the more you say.'
  },
  {
    name: 'Akshat Shandilya',
    position: 'Researcher',
    avatar: akshatShandilya,
    linkedin: 'https://www.linkedin.com/in/akshat-shandilya-490a762b0/',
    twitter: 'https://x.com/A_Shandilya2005',
    github:'https://github.com/Akshat-Shandilya',
    quote: 'I know exactly what to do. But in a much more real sense, I have no idea what to do.'
  },
  {
    name: 'Reeshabh Kotecha',
    position: 'Researcher',
    avatar: reeshabKotecha,
    linkedin: 'https://www.linkedin.com/in/reeshabh-kotecha-a4a147212',
    github: 'https://github.com/reeshabh-k',
    quote: '💰💰💰💰💰💰',
  },
  {
    name: 'Rupaditya',
    position: 'Community Manager',
    avatar: rupadityaAdireddy,
    linkedin: 'https://www.linkedin.com/in/rupaditya-adireddy-9576b6282/',
    twitter: 'https://x.com/rupaditya_',
    github: 'https://github.com/rupaditya',
    quote: 'explore and grow incessantly :)',
  },
  {
    name: 'Gautam',
    position: 'Developer',
    avatar: gautamKumar,
    twitter: 'https://x.com/0xgautxm',
    github: 'https://github.com/whoisgautxm',
    quote: 'All rollups are "ZK" Rollups.'
  },
  {
    name: 'Aryan Dharwa',
    position: 'Developer',
    avatar: aryanDharwa,
    linkedin: 'https://www.linkedin.com/in/aryandharwa/',
    twitter: 'https://x.com/aryandharwa',
    github: 'https://github.com/aryandharwa',
    quote: 'Is Web3 Gaming the future?',
  },
  {
    name: 'Shivansh Gupta',
    position: 'Developer',
    avatar: shivanshGupta,
    linkedin: 'https://www.linkedin.com/in/shivansh-gupta-iitd',
    twitter: 'https://x.com/shivansheth',
    github: 'https://github.com/shivannsh',
    quote: '"I know nothing, but I prove everything" - ZK',
  },
  {
    name: 'Aditya Bansal',
    position: 'Developer',
    avatar: adityaBansal ,
    linkedin: 'https://www.linkedin.com/in/aditya-bansal-b38b67281/',
    github: 'https://github.com/adibansal29',
  },
  {
    name: 'Ramakrishna Gena',
    position: 'Developer',
    avatar: ramkrishnaGena,
    linkedin: 'https://www.linkedin.com/in/ramkrishna-gena-b29424307',
    quote: 'Driving innovation in decentralised technology to build trust and transparency, one block at a time',
  },
  {
    name: 'Tejashvi Kumawat',
    position: 'Designer',
    avatar: tejashviKumawat,
    linkedin: 'https://www.linkedin.com/in/tejashvi-kumawat/',
    twitter: 'https://x.com/tejashvi_iitd',
    github: 'https://github.com/tejashvi-kumawat',
    quote: 'Dedication Drives Achievement.',
  },
  {
    name: 'Kushagrah Jain',
    position: 'Events Manager',
    avatar: kushagrahJain,
    linkedin: 'www.linkedin.com/in/kushagrah-jain-b83187286',
  },
  {
    name: 'Aryan Giri',
    position: 'Events Manager',
    avatar: aryanGiri,
    linkedin: 'https://www.linkedin.com/in/aryan-giri-42a83127b',
  },
  {
    name: 'Vivek',
    position: 'Community Manager',
    avatar: vivekKumar,
    linkedin: 'https://www.linkedin.com/in/vivek-prajapati-b1480527b',
  }
];

const Team = () => {
  return (
    <div className="container mx-auto p-4" style={{ maxWidth: '1200px' }}>
      <h1 className="mt-14 text-5xl font-bold text-neonGreen mb-8 text-center">Our Team</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {teamMembers.map((member, index) => (
          <TeamMemberCard key={index} member={member} />
        ))}
      </div>
    </div>
  );
};

export default Team;
