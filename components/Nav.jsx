"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { MdMenu, MdClose } from 'react-icons/md'; // Importing icons from react-icons/md

import logo from '@public/assets/logo.png'; 
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

const Nav = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
    const toggleMobileMenu = () => {
      setIsMobileMenuOpen(!isMobileMenuOpen);
    };
  
    return (
        <div className="z-50 w-screen">
            <header className="fixed top-0 left-1/2 transform -translate-x-1/2 w-screen bg-black">
                <div className="container flex justify-between items-center h-full my-2">
                <div className="flex items-center sm:space-x-8 ">
                    <Link
                    href="/"
                    className="text-xl ml-6 text-white relative hover:text-neonBlue  transition-all duration-200"
                    >
                    <Image src={logo} alt="Blockchain Society Logo" className="w-[7vh] h-[7vh] ml-4 md:ml-12 " />
                    </Link>
                    <h1 className="text-white font-bold ml-2 text-5xl md:text-3xl">BlocSoc IITD</h1>
                </div>
                <nav className="hidden md:flex space-x-4 text-white text-xl mr-8">
                    <Link
                    href="/"
                    className="text-xl ml-6 text-white relative hover:text-neonBlue  transition-all duration-200"
                    >
                    Home
                    <div className="absolute left-0 bottom-[-2px] w-full h-[2px] bg-neonBlue transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
                    </Link>
                    <Link
                    href="/achievements"
                    className="text-xl ml-6 text-white relative hover:text-neonBlue  transition-all duration-00"
                    >
                    Achievements
                    <div className="absolute left-0 bottom-[-2px] w-full h-[2px] bg-neonBlue transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
                    </Link>
                    <Link
                    href="/events"
                    className="text-xl ml-6 text-white relative hover:text-neonBlue  transition-all duration-200"
                    >
                    Events
                    <div className="absolute left-0 bottom-[-2px] w-full h-[2px] bg-neonBlue transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
                    </Link>
                    <Link
                    href="/resources"
                    className="text-xl ml-6 text-white relative hover:text-neonBlue  transition-all duration-200"
                    >
                    Resources
                    <div className="absolute left-0 bottom-[-2px] w-full h-[2px] bg-neonBlue transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
                    </Link>
                    <Link
                    href="/team"
                    className="text-xl ml-6 text-white relative hover:text-neonBlue transition-all duration-200"
                    >
                    Team
                    <div className="absolute left-0 bottom-[-2px] w-full h-[2px] bg-neonBlue transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
                    </Link>
                </nav>
                <div className="md:hidden flex items-center">
                    <button onClick={toggleMobileMenu} className="text-white focus:outline-none mr-4">
                    {isMobileMenuOpen ? <MdClose size={24} /> : <MdMenu size={24} />}
                    </button>
                </div>
                </div>
                {isMobileMenuOpen && (
                <div className="relative  w-full h-screen ">    
                    <div className="md:hidden flex flex-col  bg-black w-full h-screen py-[2vh]  left-0">
                        <div className="mb-4 w-full h-[2px] bg-white bg-opacity-80"></div>
                        <Link
                        href="/"
                        className="text-2xl ml-6 text-white relative hover:text-neonBlue  transition-colors duration-200"
                        onClick={toggleMobileMenu}
                        >
                        Home
                        <div className="absolute left-0 bottom-[-2px] w-full h-[2px] bg-neonBlue transform scale-x-0 hover:scale-x-100 transition-transform duration-300"></div>
                        </Link>
                        <div className="my-4 w-full h-[2px] bg-white bg-opacity-80"></div>
                        <Link
                        href="/achievements"
                        className="text-2xl ml-6 text-white relative hover:text-neonBlue  transition-colors duration-200"
                        onClick={toggleMobileMenu}
                        >
                        Achievements
                        <div className="absolute left-0 bottom-[-2px] w-full h-[2px] bg-neonBlue transform scale-x-0 hover:scale-x-100 transition-transform duration-300"></div>
                        </Link>
                        <div className="my-4  w-full h-[2px] bg-white bg-opacity-80"></div>
                        <Link
                        href="/events"
                        className="text-2xl ml-6 text-white relative hover:text-neonBlue  transition-colors duration-200"
                        onClick={toggleMobileMenu}
                        >
                        Events 
                        <div className="absolute left-0 bottom-[-2px] w-full h-[2px] bg-neonBlue transform scale-x-0 hover:scale-x-100 transition-transform duration-300"></div>
                        </Link>
                        <div className="my-4 w-full h-[2px] bg-white bg-opacity-80"></div>
                        <Link
                        href="/resources"
                        className="text-2xl ml-6 text-white relative hover:text-neonBlue  transition-all duration-200"
                        onClick={toggleMobileMenu}
                        >
                        Resources
                        <div className="absolute left-0 bottom-[-2px] w-full h-[2px] bg-neonBlue transform scale-x-0 hover:scale-x-100 transition-transform duration-300"></div>
                        </Link>
                        <div className="my-4 w-full h-[2px] bg-white bg-opacity-80"></div>
                        <Link
                        href="/team"
                        className="text-2xl ml-6 text-white relative hover:text-neonBlue  transition-all duration-200"
                        onClick={toggleMobileMenu}
                        >
                        Team
                        <div className="absolute left-0 bottom-[-2px] w-full h-[2px] bg-neonBlue transform scale-x-0 hover:scale-x-100 transition-transform duration-300"></div>
                        </Link>
                        <div className="my-4 w-full h-[2px] bg-white bg-opacity-80"></div>
                        <div className="absolute inset-x-0 bottom-0">
                            <div className="flex space-x-4">
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
                                        className="w-6 h-6 text-gray-400 hover:text-gray-300 hover:opacity-80 hover:scale-110"
                                    />
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
                )}
            </header>
        </div>
    );
  };

export default Nav