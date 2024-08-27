

import { NavLink } from 'react-router-dom';
import { MdMenu, MdClose } from 'react-icons/md'; // Importing icons from react-icons/md
import logo from '@public/assets/logoW.svg'; // Adjust the path as needed

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="fixed top-0 left-1/2 transform -translate-x-1/2 w-[95vw] h-[10vh] bg-white bg-opacity-15 backdrop-filter backdrop-blur-lg rounded-full mx-auto mt-2 px-4">
      <div className="container flex justify-between items-center h-full">
        <div className="flex items-center ml-2 space-x-4">
          <img src={logo} alt="Blockchain Society Logo" className="w-[9vh] h-[9vh] rounded-lg" />
          <h1 className="text-2xl text-white font-bold">BlocSoc IITD</h1>
        </div>
        <nav className="hidden md:flex space-x-6 mr-4">
          <NavLink
            to="/"
            className={({ isActive }) => `text-xl ${isActive && 'font-semibold' } text-neonBlue text-xl hover:text-neonBlue transition-colors duration-200 relative group`}
          >
            Home
            <div className="absolute left-0 bottom-[-2px] w-full h-[2px] bg-neonBlue transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
          </NavLink>
          <NavLink
            to="/achievements"
            className={({ isActive }) => `text-xl ${isActive && 'font-semibold' } text-neonBlue text-xl hover:text-neonBlue transition-colors duration-200 relative group`}
          >
            Achievements
            <div className="absolute left-0 bottom-[-2px] w-full h-[2px] bg-neonBlue transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
          </NavLink>
          <NavLink
            to="/events"
            className={({ isActive }) => `text-xl ${isActive && 'font-semibold' } text-neonBlue text-xl hover:text-neonBlue transition-colors duration-200 relative group`}
          >
            Events
            <div className="absolute left-0 bottom-[-2px] w-full h-[2px] bg-neonBlue transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
          </NavLink>
          <NavLink
            to="/resources"
            className={({ isActive }) => `text-xl ${isActive && 'font-semibold' } text-neonBlue text-xl hover:text-neonBlue transition-colors duration-200 relative group`}
          >
            Resources
            <div className="absolute left-0 bottom-[-2px] w-full h-[2px] bg-neonBlue transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
          </NavLink>
          <NavLink
            to="/team"
            className={({ isActive }) => `text-xl ${isActive && 'font-semibold' } text-neonBlue text-xl hover:text-neonBlue transition-colors duration-200 relative group`}
          >
            Team
            <div className="absolute left-0 bottom-[-2px] w-full h-[2px] bg-neonBlue transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
          </NavLink>
        </nav>
        <div className="md:hidden flex items-center">
          <button onClick={toggleMobileMenu} className="text-white focus:outline-none">
            {isMobileMenuOpen ? <MdClose size={24} /> : <MdMenu size={24} />}
          </button>
        </div>
      </div>
      {isMobileMenuOpen && (
        <div className="md:hidden rounded flex flex-col items-center bg-white w-full py-[2vh] absolute top-[10vh] left-0">
          <Link
            to="/"
            className="text-xl text-white relative hover:text-neonBlue transition-colors duration-200"
            onClick={toggleMobileMenu}
          >
            Home
            <div className="absolute left-0 bottom-[-2px] w-full h-[2px] bg-neonBlue transform scale-x-0 hover:scale-x-100 transition-transform duration-300"></div>
          </Link>
          <NavLink
            to="/achievements"
            className="text-xl text-white relative hover:text-neonBlue transition-colors duration-200"
            onClick={toggleMobileMenu}
          >
            Achievements
            <div className="absolute left-0 bottom-[-2px] w-full h-[2px] bg-neonBlue transform scale-x-0 hover:scale-x-100 transition-transform duration-300"></div>
          </NavLink>
          <NavLink
            to="/events"
            className="text-xl text-white relative hover:text-neonBlue transition-colors duration-200"
            onClick={toggleMobileMenu}
          >
            Events
            <div className="absolute left-0 bottom-[-2px] w-full h-[2px] bg-neonBlue transform scale-x-0 hover:scale-x-100 transition-transform duration-300"></div>
          </NavLink>
          <NavLink
            to="/resources"
            className="text-xl text-white relative hover:text-neonBlue transition-colors duration-200"
            onClick={toggleMobileMenu}
          >
            Resources
            <div className="absolute left-0 bottom-[-2px] w-full h-[2px] bg-neonBlue transform scale-x-0 hover:scale-x-100 transition-transform duration-300"></div>
          </NavLink>
          <NavLink
            to="/team"
            className="text-xl text-white relative hover:text-neonBlue transition-colors duration-200"
            onClick={toggleMobileMenu}
          >
            Team
            <div className="absolute left-0 bottom-[-2px] w-full h-[2px] bg-neonBlue transform scale-x-0 hover:scale-x-100 transition-transform duration-300"></div>
          </NavLink>
        </div>
      )}
    </header>
  );
};

export default Header;
