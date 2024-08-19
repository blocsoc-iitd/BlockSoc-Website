import React from 'react';

// Import images directly if using a bundler
import upcoming1 from '../assets/upcoming1.jpg';
import upcoming2 from '../assets/upcoming2.jpg';
import past1 from '../assets/past1.jpg';
import past2 from '../assets/past2.jpg';
import past3 from '../assets/past3.jpg';
import past4 from '../assets/past4.jpg';

const upcomingEvents = [
  { date: 'August 2023', title: 'Upcoming Event 1', description: 'Description of upcoming event 1.', imageUrl: upcoming1 },
  { date: 'September 2023', title: 'Upcoming Event 2', description: 'Description of upcoming event 2.', imageUrl: upcoming2 },
];

const pastEvents = [
  { date: 'July 2023', title: 'Past Event 1', description: 'Description of past event 1.', imageUrl: past1 },
  { date: 'June 2023', title: 'Past Event 2', description: 'Description of past event 2.', imageUrl: past2 },
  { date: 'May 2023', title: 'Past Event 3', description: 'Description of past event 3.', imageUrl: past3 },
  { date: 'April 2023', title: 'Past Event 4', description: 'Description of past event 4.', imageUrl: past4 },
];

const Events = () => {
  const handleImageClick = (url) => {
    window.open(url, '_blank');
  };

  return (
    <div className="container mx-auto p-4 md:px-8 lg:px-8" style={{ maxWidth: '1000px' }}>
      <h1 className="text-3xl font-bold text-neonGreen mb-8">Events</h1>
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-neonYellow mb-4">Upcoming Events</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
          {upcomingEvents.map((event, index) => (
            <div key={index} className="p-4 bg-white rounded shadow-md transform transition-transform hover:scale-105 cursor-pointer">
              <img 
                src={event.imageUrl} 
                alt={event.title} 
                className="mb-4 w-full h-48 object-cover rounded" 
                onClick={() => handleImageClick(event.imageUrl)} 
              />
              <h3 className="text-xl font-semibold">{event.title}</h3>
              <p className="text-sm text-gray-500">{event.date}</p>
              <p className="mt-2 text-gray-700">{event.description}</p>
            </div>
          ))}
        </div>
      </div>
      <hr className="border-gray-300 my-8" />
      <div>
        <h2 className="text-2xl font-bold text-neonYellow mb-4">Past Events</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {pastEvents.map((event, index) => (
            <div key={index} className="p-4 bg-white rounded shadow-md transform transition-transform hover:scale-105 cursor-pointer">
              <img 
                src={event.imageUrl} 
                alt={event.title} 
                className="mb-4 w-full h-48 object-cover rounded filter grayscale" 
                onClick={() => handleImageClick(event.imageUrl)} 
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
