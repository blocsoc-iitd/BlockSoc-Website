import React from 'react';
import linkedinIcon from '../assets/linkedin.svg';
import twitterIcon from '../assets/twitter.svg';
import githubIcon from '../assets/github.svg';
import instagramIcon from '../assets/instagram.svg';


const socialLinks = [
  { href: "https://twitter.com", src: twitterIcon, alt: "Twitter" },
  { href: "https://github.com", src: githubIcon, alt: "GitHub" },
  { href: "https://instagram.com", src: instagramIcon, alt: "Instagram" },
  { href: "https://linkedin.com", src: linkedinIcon, alt: "LinkedIn" },
];

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <p className="text-gray-400">© 2024 Blockchain Society, IIT Delhi</p>
        <div className="flex space-x-4">
          {socialLinks.map((link) => (
          <a 
            key={link.alt}
            href={link.href} 
            className="transition-transform transition-opacity duration-300"
            target="_blank" 
            rel="noopener noreferrer"
          >
            <img 
              src={link.src} 
              alt={link.alt} 
              className="w-6 h-6 text-gray-400 hover:text-gray-300 hover:opacity-80 hover:scale-110"
            />
          </a>

          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
