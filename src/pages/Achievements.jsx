import React from 'react';

const achievements = [
  { date: 'March 2024',
    title: 'EthMumbai 2024', 
    description: "Our institute's team of nine students participated in an international hackathon organized by the Ethereum Foundation in Mumbai. We won the main track and secured a $2050 prize, showcasing our expertise and innovation in the Web3 domain." },

  { date: 'March 2024', 
    title: 'IITR Cognizance 2024', 
    description: 'Our teams from DevClub and BlocSoc participated in this fest to explore the Web3 landscape in other colleges, gaining insights and experience. The event was a blend of technical challenges and networking opportunities' },

  { date: 'December 2023', 
    title: 'EthIndia 2023', 
    description: 'An international hackathon organized by the Ethereum Foundation in Bengaluru during December 2023. This prestigious event attracted global talent and offered our students a chance to compete at the highest level. Seven students from our college participated, showcasing innovative projects and competing for various prizes.' },

  { date: 'October 2023', 
    title: 'Unfold 2023', 
    description: 'This hackathon provided an excellent opportunity for freshers to gain exposure to the Web3 ecosystem. Two of our second-year students participated, gaining valuable experience in blockchain development and networking with industry professionals' },

  { date: 'February 2023', title: 'Achievement 1', description: 'Description of achievement 1.' },

  { date: 'January 2023', title: 'Achievement 2', description: 'Description of achievement 2.' },

  { date: 'December 2022', title: 'Achievement 3', description: 'Description of achievement 3.' },

  { date: 'November 2022', title: 'Achievement 4', description: 'Description of achievement 4.' },
  
  { date: 'October 2022', title: 'Achievement 5', description: 'Description of achievement 5.' },
];

const Achievements = () => {
  return (
    <div className="container mx-auto p-4 md:px-8 lg:px-24" style={{ maxWidth: '1200px' }}>
      <h1 className="text-3xl font-bold text-gray-800 mb-8">Our Achievements</h1>
      <div className="relative">
        <div className="absolute left-4 top-0 bottom-0 w-px bg-gray-300"></div>
        <ul className="space-y-8">
          {achievements.map((achievement, index) => (
            <li key={index} className="relative flex items-start">
              <div className="absolute left-2 w-4 h-4 bg-gray-300 rounded-full z-10"></div>
              <div className="ml-8 p-4 bg-white rounded shadow-md w-full transform transition-transform hover:scale-105 cursor-pointer">
                <h3 className="text-xl font-semibold">{achievement.title}</h3>
                <p className="text-sm text-gray-500">{achievement.date}</p>
                <p className="mt-2 text-gray-700">{achievement.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Achievements;
