import Image from 'next/image';
import linkedinIcon from '@public/assets/linkedin.svg';
import twitterIcon from '@public/assets/twitter.svg';
import githubIcon from '@public/assets/github.svg';
import instagramIcon from '@public/assets/instagram.svg';

const socialLinks = [
  { href: "https://x.com/blocsociitd", src: twitterIcon, alt: "Twitter" },
  { href: "https://github.com/blocsoc-iitd", src: githubIcon, alt: "GitHub" },
  { href: "https://instagram.com", src: instagramIcon, alt: "Instagram" },
  { href: "https://linkedin.com", src: linkedinIcon, alt: "LinkedIn" },
];

const Footer = () => {
  return (
    <footer className="bg-transparent text-white py-4">
      <div className="container flex justify-between items-center mx-auto px-4 mb-4 max-w-screen-md">
        <p className=" text-xl text-gray-800 font-bold" >© 2024 Blockchain Society, IIT Delhi</p>
        <div className="flex space-x-6">
          {socialLinks.map((link) => (
            <a 
              key={link.alt}
              href={link.href} 
              className="transition-transform transition-opacity duration-300"
              target="_blank" 
              rel="noopener noreferrer"
            >
              <Image c
                src={link.src} 
                alt={link.alt} 
                className="w-8 h-8 text-gray-400 hover:text-gray-300 hover:opacity-80 hover:scale-110"
              />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
