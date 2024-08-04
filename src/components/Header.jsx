import React from 'react';
import logo from '../assets/logoB.svg'; // Adjust the path as needed

const NavList = ['Home', 'Achievements', 'Events', 'Resources', 'Team'];

//const NavList = ['Home', 'Achievements', 'Events', 'Blogs', 'Resources', 'Team'];


const Header = () => {
  return (
    <header className="bg-gray-800 text-white">
      <div className="container mx-auto px-4 mb-4 max-w-screen-md">
        <div className="flex flex-wrap items-center border-b border-gray-600 pb-4">
          <img src={logo} alt="Blockchain Society Logo" className="w-20 h-20 mr-4 sm:w-32 sm:h-32" /> {/* Logo on the side */}
          <div className="flex flex-col">
            <h1 className="text-2xl sm:text-5xl font-semibold mb-2">Blockchain Society</h1>
            <h3 className="text-xl sm:text-2xl font-semibold">Indian Institute of Technology, Delhi</h3>
          </div>
        </div>
        <nav className="mt-1 border-t border-gray-600 pt-2">
          <ul className="flex flex-wrap justify-center sm:justify-start space-x-2 sm:space-x-6 text-sm sm:text-base">
            {NavList.map((item, index) => (
              <li key={index} className="relative group">
                <a href={item === 'Home' ? "\\" : `/${item.toLowerCase().replace(/\s+/g, '-')}`} className="text-neonBlue hover:text-neonBlue transition-colors duration-200">
                  {item}
                </a>
                <div className="absolute left-0 bottom-[-2px] w-full h-[2px] bg-neonBlue transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
