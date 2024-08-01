import React from 'react';

const achievements = [
  { date: 'June 2023', title: 'Achievement 1', description: 'Description ofkvkjdsnvjndsklcdsklchgvhjhjblkbjnjnkn;kl achievement 1.' },
  { date: 'May 2023', title: 'Achievement 2', description: 'Description of achievement 2.' },
  { date: 'April 2023', title: 'Achievement 3', description: 'Description of achievement 3.' },
  { date: 'March 2023', title: 'Achievement 4', description: 'Description of achievement 4.' },
  { date: 'February 2023', title: 'Achievement 5', description: 'Description of achievement 5.' },
  { date: 'January 2023', title: 'Achievement 6', description: 'Description of achievement 6.' },
  { date: 'December 2022', title: 'Achievement 7', description: 'Description of achievement 7.' },
  { date: 'November 2022', title: 'Achievement 8', description: 'Description of achievement 8.' },
  { date: 'October 2022', title: 'Achievement 9', description: 'Description of achievement 9.' },
  { date: 'September 2022', title: 'Achievement 10', description: 'Description of achievement 10.' },
];

const Achievements = () => {
  return (
    <div className="container mx-auto p-4 md:px-8 lg:px-24" style={{ maxWidth: '1200px' }}>
      <h1 className="text-3xl font-bold text-gray-800 mb-8">Our Achievements</h1>
      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-px bg-gray-300"></div>
        <ul className="space-y-8 pl-8">
          {achievements.map((achievement, index) => (
            <li key={index} className="relative flex items-start">
              <div className="absolute -left-2 w-4 h-4 bg-gray-300 rounded-full z-10"></div>
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
