import React from 'react';
import image1 from '../assets/image1.jpg';
import image2 from '../assets/image2.jpg';
import image3 from '../assets/image3.jpg';
import image4 from '../assets/image4.jpg';

function Home() {
  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold text-gray-800 mb-4">Welcome to the Blockchain Society</h1>
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div className="w-full aspect-w-1 aspect-h-1 overflow-hidden" style={{ height: '12rem' }}>
          <img src={image1} alt="Image 1" className="w-full h-full object-cover grayscale hover:grayscale-0 transition duration-300" />
        </div>
        <div className="w-full aspect-w-1 aspect-h-1 overflow-hidden" style={{ height: '12rem' }}>
          <img src={image2} alt="Image 2" className="w-full h-full object-cover grayscale hover:grayscale-0 transition duration-300" />
        </div>
        <div className="w-full aspect-w-1 aspect-h-1 overflow-hidden" style={{ height: '12rem' }}>
          <img src={image3} alt="Image 3" className="w-full h-full object-cover grayscale hover:grayscale-0 transition duration-300" />
        </div>
        <div className="w-full aspect-w-1 aspect-h-1 overflow-hidden" style={{ height: '12rem' }}>
          <img src={image4} alt="Image 4" className="w-full h-full object-cover grayscale hover:grayscale-0 transition duration-300" />
        </div>
      </div>
      <h2 className='text-3xl'> something something Society </h2>
      <p className="text-gray-600">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus praesentium unde, ab optio illum error harum assumenda quibusdam quis, temporibus suscipit, accusantium molestias sed similique? Doloribus, repellat! Sequi, vel amet?
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit ea debitis non dolorem ad laboriosam at saepe, consectetur odit id natus fuga rem quis ipsa deleniti voluptas iste enim velit?
      </p>
    </div>
  );
}

export default Home;
