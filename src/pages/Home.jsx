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
      <p className="text-gray-600">
      At the Blockchain Society, we are dedicated to exploring and advancing the world of blockchain technology. Our community consists of enthusiasts, developers, and researchers who are passionate about crypto, DeFi, Web3.0, and ZK proofs. We believe in the transformative power of blockchain and its potential to revolutionize various industries
      </p>
      <section className="mb-6 mt-6">
        <h2 className="text-3xl font-semibold text-gray-700 mb-4">Who We Are</h2>
        <p className="text-gray-600">
        The Blockchain Society at the Indian Institute of Technology, Delhi, is a vibrant community focused on education, research, and innovation in the blockchain space. Our members collaborate on projects, share knowledge, and engage in meaningful discussions to drive the adoption and development of blockchain technology.  </p>
      </section>
      <section className="mb-6">
        <h2 className="text-3xl font-semibold text-gray-700 mb-4">Our Mission</h2>
        <p className="text-gray-600">
        Our mission is to foster a deep understanding of blockchain technology and its applications. We aim to provide resources, organize events, and create opportunities for hands-on experience to empower our members to become leaders in the blockchain revolution.  </p>
      </section>
      <section className="mb-6">
        <h2 className="text-3xl font-semibold text-gray-700 mb-4">Get Involved</h2>
        <p className="text-gray-600">
          We are always open to collaborations. Whether you are a beginner or an expert, there is a place for you in our community. Join us to learn, collaborate, and contribute to the future of blockchain technology.
        </p>
      </section>

    </div>
  );
}

export default Home;
