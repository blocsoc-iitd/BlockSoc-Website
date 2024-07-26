import React from 'react';
import logo from '../assets/logoB.svg'; // Adjust the path as needed

const Header = () => {
  return (
    <header className="bg-gray-800 text-white">
      <div className="container mx-auto px-8 py-4 lg:px-64">
        <div className="flex items-center border-b border-gray-600 pb-4">
          <img src={logo} alt="Blockchain Society Logo" className="w-32 h-32 mr-8" /> {/* Logo on the side */}
          <div className="flex flex-col">
            <h1 className="text-5xl font-semibold mb-2">Blockchain Society</h1>
            <h3 className="text-2xl font-semibold">Indian Institute of Technology, Delhi</h3>
          </div>
        </div>
        <nav className="mt-2 border-t border-gray-600 pt-2">
          <ul className="flex space-x-6">
            <li><a href="/" className="hover:text-gray-400">Home</a></li>
            <li><a href="/about" className="hover:text-gray-400">About Us</a></li>
            <li><a href="/blogs" className="hover:text-gray-400">Blogs</a></li>
            <li><a href="/resources" className="hover:text-gray-400">Resources</a></li>
            <li><a href="/team" className="hover:text-gray-400">Team</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
