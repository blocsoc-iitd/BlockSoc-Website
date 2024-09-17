import Image from 'next/image';
import linkedinIcon from '@public/assets/icons/linkedin.svg';
import twitterIcon from '@public/assets/icons/twitter.svg';
import githubIcon from '@public/assets/icons/github.svg';
import instagramIcon from '@public/assets/icons/instagram.svg';

const socialLinks = [
  { href: "https://x.com/0xblocsoc/", src: twitterIcon, alt: "Twitter" },
  { href: "https://github.com/blocsoc-iitd/", src: githubIcon, alt: "GitHub" },
  { href: "https://instagram.com/blocsoc.eth/", src: instagramIcon, alt: "Instagram" },
  { href: "https://linkedin.com/company/blockchain-society-iit-delhi/", src: linkedinIcon, alt: "LinkedIn" },
];

const Footer = () => {
  return (
    <footer className="text-white pb-4 flex flex-col justify-between items-center">
      <div className="w-screen flex justify-between items-center py-6 px-4 md:px-20 
      bg-gradient-to-r from-black via-black to-black
      ">
        <p className="text-xl text-white font-bold">© 2024 Blockchain Society, IIT Delhi</p>
        <div className="flex space-x-4 mt-4 md:space-x-12">
          {socialLinks.map((link) => (
            <a
              key={link.alt}
              href={link.href}
              className="transition-transform transition-opacity duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src={link.src}
                alt={link.alt}
                className="w-9 h-9 text-gray-400 hover:text-gray-300 hover:opacity-90 hover:scale-110"
              />
            </a>
          ))}
        </div>
      </div>
      <div className=" text-white mt-4 text-center text-sm md:text-lg">
        Developed by Students of Blockchain Society, IITD.
      </div>
    </footer>

  );
};

export default Footer;
