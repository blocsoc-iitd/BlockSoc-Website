import React from 'react';
import linkedinLogo from '../assets/linkedin.svg'; // Adjust the path as needed
import twitterLogo from '../assets/twitter.svg'; // Adjust the path as needed
import githubLogo from '../assets/github.svg'; // Adjust the path as needed

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white mt-12 ">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center lg:px-64">
        <div className="text-sm">
          © 2024 Blockchain Society. All rights reserved.
        </div>
        <div className="flex space-x-4">
          <a href="https://in.linkedin.com/company/blockchain-society-iit-delhi" target="_blank" rel="noopener noreferrer">
            <img src={linkedinLogo} alt="LinkedIn" className="w-6 h-6 filter grayscale hover:grayscale-0 transition" />
          </a>
          <a href="https://x.com/blocsociitd" target="_blank" rel="noopener noreferrer">
            <img src={twitterLogo} alt="Twitter" className="w-6 h-6 filter grayscale hover:grayscale-0 transition" />
          </a>
          <a href="https://github.com/blocsoc-iitd" target="_blank" rel="noopener noreferrer">
            <img src={githubLogo} alt="GitHub" className="w-6 h-6 filter grayscale hover:grayscale-0 transition" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
