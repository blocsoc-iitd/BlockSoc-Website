"use client"
// Import images directly if using a bundler
import Image from 'next/image';
import bc106 from '@public/assets/events/bc106_s2.jpg';

import satorioss from '@public/assets/events/satori_space.jpg';

import bc106_s1 from '@public/assets/events/bc106_s1.jpg';
import zkBootcamp from '@public/assets/events/zk_bootcamp.jpg';
import macaw_s1 from '@public/assets/events/macaw_s1.jpg';
import internal_zkb from '@public/assets/events/internal_zk_bootcamp.jpg';

const ongoingEvents = [
  { date: 'August - October 2024', title: 'BC106 Cohort Season 2', description: 'The only cohort you need to kickstart your blockchain journey.', imageUrl: bc106, redirectUrl: 'https://x.com/0xblocsoc' },
];

const upcomingEvents = [
  { date: '2nd October 2024', title: 'Diving into ZK with Satori', description: 'Twitter Space with Satori Network on Zero Knowledge Proving.', imageUrl: satorioss, redirectUrl: 'https://x.com/satoriOSS' },
];

const pastEvents = [
  { date: 'May - June 2024', title: 'ZK Bootcamp with ZkSync', description: 'ZK bootcamp is an intensive program for beginning with Snarks and Starks.', imageUrl: zkBootcamp, redirectUrl: 'https://x.com/0xblocsoc' },
  { date: 'January - March 2024', title: 'Macaw Season 1', description: 'Macaw consisted technical deep dive sessions on Avalanche.', imageUrl: macaw_s1, redirectUrl: 'https://x.com/0xblocsoc' },
  { date: 'December 2023 - April 2024', title: 'Internal ZK Bootcamp', description: 'Traning our dev team to work on zero knowledge protocols.', imageUrl: internal_zkb, redirectUrl: 'https://x.com/0xblocsoc' },
  { date: 'September - November 2023', title: 'BC106 Cohort Season 1', description: 'The first cohort of BC106 was a huge success.', imageUrl: bc106_s1, redirectUrl: 'https://x.com/0xblocsoc' },
];

const Events = () => {
  const handleImageClick = (url) => {
    window.open(url, '_blank');
  };

  return (
    <div className="container mx-auto p-4 md:px-8 lg:px-8" style={{ maxWidth: '1000px'}}>
      <h1 className="mt-14 text-5xl font-bold text-neonGreen mb-8" style={{textAlign:'center' }}>Events</h1>
      <div className="mb-12">
        <h2 className="text-3xl font-bold text-neonYellow mb-4" style={{textAlign:'center' }}>Ongoing Events</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
          {ongoingEvents.map((event, index) => (
            <div key={index} className="p-4 bg-white rounded shadow-md transform transition-transform hover:scale-105 cursor-pointer">
              <Image 
                src={event.imageUrl}  
                alt={event.title}
                className="mb-4 w-full h-60 object-contain rounded" 
                onClick={() => handleImageClick(event.redirectUrl)} 
              />
              <h3 className="text-xl font-semibold">{event.title}</h3>
              <p className="text-sm text-gray-500">{event.date}</p>
              <p className="mt-2 text-gray-700">{event.description}</p>
            </div>
          ))}
        </div>
      </div>
      <hr className="border-gray-300 my-8" />
      <div className="mb-12">
        <h2 className="text-3xl font-bold text-neonYellow mb-4" style={{textAlign:'center' }}>Upcoming Events</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
          {upcomingEvents.map((event, index) => (
            <div key={index} className="p-4 bg-white rounded shadow-md transform transition-transform hover:scale-105 cursor-pointer">
              <Image 
                src={event.imageUrl} 
                alt={event.title} 
                className="mb-4 w-full h-60 object-contain rounded" 
                onClick={() => handleImageClick(event.redirectUrl)} 
              />
              <h3 className="text-xl font-semibold">{event.title}</h3>
              <p className="text-sm text-gray-500">{event.date}</p>
              <p className="mt-2 text-gray-700">{event.description}</p>
            </div>
          ))}
        </div>
      </div>
      <hr className="border-gray-300 my-8" />
      <div className='mb-12'>
        <h2 className="text-3xl font-bold text-neonYellow mb-4" style={{textAlign:'center'}}>Past Events</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
          {pastEvents.map((event, index) => (
            <div key={index} className="p-4 bg-white rounded shadow-md transform transition-transform hover:scale-105 cursor-pointer">
              <Image 
                src={event.imageUrl} 
                alt={event.title} 
                className="mb-4 w-full h-60 object-contain rounded" 
                onClick={() => handleImageClick(event.redirectUrl)} 
              />
              <h3 className="text-xl font-semibold">{event.title}</h3>
              <p className="text-sm text-gray-500">{event.date}</p>
              <p className="mt-2 text-gray-700">{event.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Events;
