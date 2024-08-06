import React from 'react';
import image1 from '../assets/image2.jpg';
import image4 from '../assets/image1.jpg';

function Home() {
  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold text-neonGreen mb-4">Welcome to the Blockchain Society</h1>

      {/* Image and Text Section 1 */}
      <div className="flex flex-col md:flex-row items-center mb-8">
        <div className="w-full md:w-1/2 mb-4 md:mb-0">
          <img src={image1} alt="Image 1" className="w-full h-auto object-cover rounded-lg shadow-lg" />
        </div>
        <div className="w-full md:w-1/2 md:pl-6">
          {/* <h2 className="text-2xl font-semibold text-white mb-2">About Us</h2> */}
          <p className="text-white">
            At the Blockchain Society, we are dedicated to exploring and advancing the world of blockchain technology. Our community consists of enthusiasts, developers, and researchers who are passionate about crypto, DeFi, Web3.0, and ZK proofs. We believe in the transformative power of blockchain and its potential to revolutionize various industries.
          </p>
        </div>
      </div>

      {/* Image and Text Section 2 */}
      <div className="flex flex-col md:flex-row-reverse items-center mb-8">
        <div className="w-full md:w-1/2 mb-4 md:mb-0">
          <img src={image4} alt="Image 4" className="w-full h-auto object-cover rounded-lg shadow-lg" />
        </div>
        <div className="w-full md:w-1/2 md:pr-1">
          <h2 className="text-2xl font-semibold text-white mb-2">Our Mission</h2>
          <p className="text-white">
            Our mission is to foster a deep understanding of blockchain technology and its applications. We aim to provide resources, organize events, and create opportunities for hands-on experience to empower our members to become leaders in the blockchain revolution.
          </p>
        </div>
      </div>

      {/* Additional Sections */}
      <section className="mb-6 mt-6">
        <h2 className="text-3xl font-semibold text-white mb-4">Who We Are</h2>
        <p className="text-white">
          The Blockchain Society at the Indian Institute of Technology, Delhi, is a vibrant community focused on education, research, and innovation in the blockchain space. Our members collaborate on projects, share knowledge, and engage in meaningful discussions to drive the adoption and development of blockchain technology.
        </p>
      </section>
      <section className="mb-6">
        <h2 className="text-3xl font-semibold text-white mb-4">Get Involved</h2>
        <p className="text-white">
          We are always open to collaborations. Whether you are a beginner or an expert, there is a place for you in our community. Join us to learn, collaborate, and contribute to the future of blockchain technology.
        </p>
      </section>
    </div>
  );
}

export default Home;
