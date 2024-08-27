"use client"

import React, { useEffect } from 'react';


const achievements = [
  { date: 'March 2024', title: 'EthMumbai 2024', description: "Our institute's team of nine students participated in an international hackathon organized by the Ethereum Foundation in Mumbai. We won the main track and secured a $2050 prize, showcasing our expertise and innovation in the Web3 domain." },
  { date: 'March 2024', title: 'Speakers at IITR Cognizance 2024', description: 'Our teams from DevClub and BlocSoc participated in this fest to explore the Web3 landscape in other colleges, gaining insights and experience. The event was a blend of technical challenges and networking opportunities' },
  { date: 'December 2023', title: 'EthIndia 2023', description: 'An international hackathon organized by the Ethereum Foundation in Bengaluru during December 2023. This prestigious event attracted global talent and offered our students a chance to compete at the highest level. Seven students from our college participated, showcasing innovative projects and competing for various prizes.' },
  { date: 'October 2023', title: 'Unfold 2023', description: 'This hackathon provided an excellent opportunity for freshers to gain exposure to the Web3 ecosystem. Two of our second-year students participated, gaining valuable experience in blockchain development and networking with industry professionals' },
  { date: 'February 2023', title: 'Achievement 1', description: 'Description of achievement 1.' },
  { date: 'January 2023', title: 'Achievement 2', description: 'Description of achievement 2.' },
  { date: 'December 2022', title: 'Achievement 3', description: 'Description of achievement 3.' },
  { date: 'November 2022', title: 'Achievement 4', description: 'Description of achievement 4.' },
  { date: 'October 2022', title: 'Achievement 5', description: 'Description of achievement 5.' },
];

const Achievements = () => {

  return (
      <div className="relative mx-auto min-h-screen py-24 text-white " style={{ maxWidth: '1000px' }}>
        <div>
          <h1 className="text-4xl font-bold text-neonGreen mb-8 text-center">Our Achievements</h1>

          {/* LARGE&MEDIUM */}
          <section className=''>
            <div className="relative container mx-auto px-4 hidden md:block" style={{ maxWidth: '1500px' }}>
              {/* Central Dot and Line for Desktop */}
            <div className="fixed top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 bg-white rounded-full z-20 hidden md:block"></div>
            <div className="absolute mt-2 top-16 bottom-0 left-1/2 transform -translate-x-1/2 w-0.5 bg-white hidden md:block"></div>
              <ul className="space-y-4" >
                {achievements.map((achievement, index) => (
                  <li
                    key={index}
                    data-aos="fade-up"
                    data-aos-delay={index*400}
                    className={`relative flex items-start achievement-item opacity-0 transition-transform duration-500 ease-in-out transform translate-y-64`}
                    style={{
                      display: 'flex',
                      justifyContent: 'flex-start',
                      marginLeft: index % 2 === 0 ? 'auto' : '0',
                      marginRight: index % 2 === 0 ? '0' : 'auto',
                      position: 'relative',
                      width: '100%',
                    }}
                  >
                    <div
                      className={`p-4 bg-transparent rounded shadow-md ${
                        index % 2 === 0 ? 'text-right' : 'text-left'
                      }`}
                      style={{
                        marginLeft: index % 2 === 0 ? 'auto' : '0',
                        marginRight: index % 2 === 0 ? '0' : 'auto',
                        width: 'calc(50% - 10px)', // Ensures each item takes up half the container width minus some spacing
                      }}
                    >
                      <h3 className="text-xl font-semibold text-neonYellow">{achievement.title}</h3>
                      <p className="text-sm text-gray-400">{achievement.date}</p>
                      <p className="mt-2 text-white">{achievement.description}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* SMALL */}
          <div className="relative container mx-auto px-4 md:hidden" style={{ maxWidth: '1500px' }}>
            {/* Central Dot and Line for Mobile */}
          <div className="fixed top-1/3 left-1.5 transform -translate-y-1/2 w-6 h-6 bg-white rounded-full z-20 block"></div>
          <div className="absolute mt-2 top-16 bottom-0 left-4 transform w-0.5 bg-white block"></div>

            <ul className="space-y-4">
              {achievements.map((achievement, index) => (
                <li
                  key={index}
                  data-aos="fade-up"
                  className={`relative flex items-start achievement-item opacity-10 transition-transform duration-500 ease-in-out transform translate-y-64`}
                  style={{
                    display: 'flex',
                    justifyContent: 'flex-start',
                    position: 'relative',
                    width: '90%',
                  }}
                >
                  <div className='p-12 bg-transparent rounded shadow-md text-left'>
                    <h3 className="text-xl font-semibold text-neonYellow">{achievement.title}</h3>
                    <p className="text-sm text-gray-400">{achievement.date}</p>
                    <p className="mt-2 text-white">{achievement.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
  );
};

export default Achievements;
