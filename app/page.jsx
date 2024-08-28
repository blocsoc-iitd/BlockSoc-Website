"use client"

import Image from 'next/image';
import logo from '@public/assets/ethereumLogo.svg';
import image1 from '@public/assets/image1.jpg'; 
import image2 from '@public/assets/image2.jpg';
import image5 from '@public/assets/image5.png';
import BTP from '@public/assets/BelieveTheProcess.png';
import image7 from '@public/assets/image7.jpg'
import image6 from '@public/assets/image6.jpg';
import image10 from '@public/assets/image10.jpg';

import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

import AnimatedText from '@components/AnimatedText';


const Home = () => {

    useEffect (() => {
        AOS.init({
            duration: 1000, // You can customize the duration here
            once: false, // Whether animation should happen only once - while scrolling down
          });
        }, []);

        
  return (
    <div className='w-screen overflow-x-hidden'>
      {/* First Part: Background Video and Welcome Text */}
      <section className="w-screen h-[100vh] relative overflow-hidden">
      <div >
            <video 
            src={require('../public/assets/backgroundDark.mp4')}
            className="absolute inset-0 w-[98vw] h-full object-cover"
            autoPlay
            loop
            muted
            />
        </div>
        <div className="absolute inset-0 flex flex-col pt-[25vh] text-white z-10 space-y-4 ml-8">
          <h1 className="text-8xl text-left font-bold animate-line-fade-in">Welcome to</h1>
          <h2 className="text-8xl text-left font-bold mb-2 " data-aos="fade-up">Blockchain Society</h2>
          <span className="text-4xl text-left w-128 scrollReveal" data-text="Indian_Institute_of_Technology,Delhi" >Indian_Institute_of_Technology,Delhi</span>
        </div>
      </section>


      {/* -----------------------------Second section-----------------------------  ;D*/}
      {/* -----------------------------Second section-----------------------------  ;D*/}
      {/* -----------------------------Second section-----------------------------  ;D*/}
      {/* -----------------------------Second section-----------------------------  ;D*/}
      {/* -----------------------------Second section-----------------------------  ;D*/}

      <section className='w-screen  flex flex-col items-center justufy-center'> 
        <div className=' flex align-center justify-center w-screen text-white md:mb-16'>
            <div className='w-[80vw]' data-aos="fade-up">
                <div className='text-5xl mb-2 text-bold'>
                    Who are we ?
                </div>
                <div className='md:hidden text-xl mb-16'>
                We are a passionate collective of students at IIT Delhi, dedicated to exploring and advancing the frontier of blockchain technology.
                </div>
                <div className='hidden md:block text-xl mb-16'>
                We are a passionate collective of students at IIT Delhi, dedicated to exploring and advancing the frontier of blockchain technology. Our society serves as a hub for learning and collaboration where we dive deep into the decentralized world, build projects, and foster a community that’s at the cutting edge of blockchain and Web3 development.
                </div>
            </div>
        </div>
        <div className='w-[80vw] flex wrap flex-col mb-8 md:flex-row items-start justify-start space-x-4 md:mb-32 '>
            <div className=' flex wrap  w-auto  mb-16 text-white '>
                <div className='w-auto' data-aos="fade-right" data-aos-delay="300">
                    <div className='text-5xl mb-2 text-bold'>
                        Our mission
                    </div>
                    <div className='md:hidden text-xl'>
                    Our mission is to foster a deep understanding of blockchain technology and its applications. We aim to provide resources and organize events to empower our members.                    
                    </div>
                    <div className='hidden md:block text-xl'>
                    Our mission is to foster a deep understanding of blockchain technology and its applications. We aim to provide resources, organize events, and create opportunities for hands-on experience to empower our members to become leaders in the blockchain revolution.
                    </div>
                </div>
            </div>
            <div className=' flex wrap align-center justify-center w-auto mb-16 text-white '>
                <div className='w-auto' data-aos="fade-left" data-aos-delay="500">
                    <div className='text-5xl mb-2 text-bold'>
                        Get Involved
                    </div>
                    <div className='md:hidden text-xl'>
                    We are always open to collaborations. Whether you are a beginner or an expert, there is a place for you in our community.                   
                    </div>
                    <div className='hidden md:block text-xl'>
                    We are always open to collaborations. Whether you are a beginner or an expert, there is a place for you in our community. Join us to learn, collaborate, and contribute to the future of blockchain technology.
                    </div>
                </div>
            </div>
        </div>

      </section>


      {/* Third Part: Flexbox Grid of Rounded Rectangles */}
      <section className="bg-transparent flex items-start justify-start relative ml-2">

        {/* ------------------------------------------------- Third part: LARGE and MEDIUM screens ------------------------------------------ */}
        {/* ------------------------------------------------- Third part: LARGE and MEDIUM screens ------------------------------------------ */}
        {/* ------------------------------------------------- Third part: LARGE and MEDIUM screens ------------------------------------------ */}
        {/* ------------------------------------------------- Third part: LARGE and MEDIUM screens ------------------------------------------ */}
        {/* ------------------------------------------------- Third part: LARGE and MEDIUM screens ------------------------------------------ */}
        {/* ------------------------------------------------- Third part: LARGE and MEDIUM screens ------------------------------------------ */}
        {/* ------------------------------------------------- Third part: LARGE and MEDIUM screens ------------------------------------------ */}
        {/* ------------------------------------------------- Third part: LARGE and MEDIUM screens ------------------------------------------ */}

        <div className="hidden md:flex flex-col justify-center items-center">
          <div className="flex flex-wrap w-full h-full">
            {/* First row */}
            <div className="border-2 border-neonBlue rounded-3xl flex items-center justify-center overflow-hidden bg-cover bg-center" 
            style={{ width: '36vw', height: '50vh'}}
            data-aos="fade-right" data-aos-delay="200"
            >
              <Image src={image1} alt="Block-5" className="w-full h-full object-cover" />
            </div>
            <div className="flex flex-col" style={{ width: '12vw' }}>
              <div className="border-2 border-neonBlue bg-white rounded-3xl flex items-center justify-center overflow-hidden bg-cover bg-center" 
              data-aos="fade-up" data-aos-delay="350"
              style={{ width: '12vw', height: '25vh'}}>
                <Image src={logo} alt="Logo" className="floating-logo w-[12vh] h-[12vh]" />
              </div>
              <div className="border-2 border-neonBlue bg-white rounded-3xl flex items-center justify-center overflow-hidden bg-cover bg-center" 
              data-aos="fade-up" data-aos-delay="200"
              style={{width: '12vw', height: '25vh'}}>
                <Image src={image5} alt="Logo" className="floating-logo w-[10vw] h-[10vw]" />
              </div>
            </div>
            
            <div className="border-2 border-neonBlue rounded-3xl flex items-center justify-center overflow-hidden bg-cover bg-center" 
            data-aos="fade-left" data-aos-delay="200"
            style={{ width: '48vw', height: '50vh' }}>
              <div className="text-white m-4 mx-8 text-4xl text-center ">
              <AnimatedText quote = "A team of innovative minds, building a network of composable solutions, stronger together in every block." />
              </div>
            </div>
          </div>

          <div className="flex w-full h-full">
            
            {/* Second row */}
            <div className='flex flex-col'>
              <div className='flex'>
                <div className="border-2 border-neonBlue rounded-3xl flex items-center justify-center overflow-hidden bg-cover bg-center" 
                data-aos="zoom-in" data-aos-delay="100"
                style={{ width: '45vw', height: '25vh'}}>
                  <Image src={BTP} alt="BTP" className="w-full h-full object-cover" />
                </div>
                <div className="border-2 border-neonBlue rounded-3xl flex items-center justify-center overflow-hidden bg-cover bg-center" 
                data-aos="fade-up" data-aos-delay="150"
                style={{ width: '12vw', height: '25vh'}}>
                  <Image src={image7} alt="Block-10" className="w-full h-full object-cover" />
                </div>
              </div>
              <div className="border-2 border-neonBlue rounded-3xl flex items-center justify-center overflow-hidden bg-cover bg-center" 
              data-aos="slide-right" data-aos-delay="150"
              style={{ width: '57vw', height: '50vh' }}>
              <p className="text-white m-4 text-2xl text-center ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque perspiciatis possimus consequatur tempora dolores ex suscipit magnam, quisquam eum saepe itaque error beatae qui, sed provident numquam, labore officiis facilis.
              </p>
              </div>
            </div>
            <div className='flex flex-col'>
              <div className="flex">
                <div className="border-2 border-neonBlue rounded-3xl flex items-center justify-center overflow-hidden bg-cover bg-center" 
                data-aos="fade-left" data-aos-delay="200"
                style={{ width: '39vw', height: '50vh'}}>
                  <Image src={image2} alt="Block-9" className="w-full h-full object-cover" />
                </div>
              </div>
              <div className="border-2 border-neonBlue rounded-3xl flex items-center justify-center overflow-hidden bg-cover bg-center" 
              data-aos="slide-up" data-aos-delay="10"
              style={{ width: '39vw', height: '25vh' }}>
              <p className="text-white m-4 text-md text-center" >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque perspiciatis possimus consequatur tempora dolores ex suscipit magnam, quisquam eum saepe itaque error beatae qui, sed provident numquam, labore officiis facilis.
              </p>
              </div>
            </div>
          </div>
        </div>

        {/*----------------------------------------------- Third part: SMALL screens ---------------------------------------------------------*/}
        {/*----------------------------------------------- Third part: SMALL screens ---------------------------------------------------------*/}
        {/*----------------------------------------------- Third part: SMALL screens ---------------------------------------------------------*/}
        {/*----------------------------------------------- Third part: SMALL screens ---------------------------------------------------------*/}
        {/*----------------------------------------------- Third part: SMALL screens ---------------------------------------------------------*/}
        {/*----------------------------------------------- Third part: SMALL screens ---------------------------------------------------------*/}
        {/*----------------------------------------------- Third part: SMALL screens ---------------------------------------------------------*/}
        {/*----------------------------------------------- Third part: SMALL screens ---------------------------------------------------------*/}



        <div className="md:hidden flex flex-col min-h-screen justify-start">
          <div className="flex flex-wrap w-full h-full">
            {/* First row */}
            <div className="border-2 border-neonBlue rounded-3xl flex items-center justify-center overflow-hidden bg-cover bg-center" 
            data-aos="fade-up" data-aos-delay="100"
            style={{ width: '95vw', height: '50vw'}}>
              <div className="text-white m-4 mx-8 text-4xl text-center ">
              <AnimatedText quote = "A team of innovative minds, building a network of composable solutions, stronger together in every block." />
              </div>
            </div>
          </div>
          <div className="flex flex-wrap w-full h-full">
            {/* Second row */}
            <div className="border-2 border-neonBlue bg-white rounded-3xl flex items-center justify-center overflow-hidden bg-cover bg-center" 
            data-aos="slide-right" data-aos-delay="100"
            style={{width: '20vw', height: '20vw'}}>
              <Image src={logo} alt="Logo" className="floating-logo w-[10vw] h-[10vw]" />
            </div>
            <div className="border-2 border-neonBlue rounded-3xl flex items-center justify-center overflow-hidden bg-cover bg-center" 
            data-aos="zoom-in" data-aos-delay="200"
            style={{ width: '55vw', height: '20vw'}}>
              <Image src={BTP} alt="Believe" className="w-full h-full object-cover"/>
            </div>
            <div className="border-2 border-neonBlue bg-white rounded-3xl flex items-center justify-center overflow-hidden bg-cover bg-center" 
            data-aos="slide-left" data-aos-delay="100"
            style={{width: '20vw', height: '20vw'}}>
              <Image src={image5} alt="Logo" className="floating-logo w-[15vw] h-[15vw]" />
            </div>
          </div>
          <div className="flex flex-wrap w-full h-full">
            {/* Third row */}
            <div className="border-2 border-neonBlue rounded-3xl flex items-center justify-center overflow-hidden bg-cover bg-center" 
            data-aos="slide-left" data-aos-delay="200"
            style={{ width: '95vw', height: '40vw'}}>
              <Image src={image1} alt="Block-1" className="w-full h-full object-cover" />
            </div>
          </div>
          <div className="flex flex-wrap w-full h-full">
            {/* Forth row */}
            <div className="flex flex-col" style={{ width: '20vw' }}>
              <div className="border-2 border-neonBlue rounded-3xl flex items-center justify-center overflow-hidden bg-cover bg-center" 
              data-aos="slide-right" data-aos-delay="150"              
              style={{ width: '20vw', height: '20vw'}}>
                <p className="text-white"></p>
              </div>
              <div className="border-2 border-neonBlue rounded-3xl flex items-center justify-center overflow-hidden bg-cover bg-center" 
              data-aos="slide-right" data-aos-delay="150"
              style={{ width: '20vw', height: '20vw'}}>
              <Image src={image7} alt="Block-9" className="w-full h-full object-cover" />
              </div>
            </div>
            <div className="border-2 border-neonBlue rounded-3xl flex items-center justify-center overflow-hidden bg-cover bg-center" 
            data-aos="slide-up" data-aos-delay="150"
            style={{ width: '55vw', height: '40vw'}}>
              <Image src={image10} alt="Block-6" className="w-full h-full object-cover" />
            </div>
            <div className="flex flex-col" style={{ width: '20vw' }}>
              <div className="border-2 border-neonBlue rounded-3xl flex items-center justify-center overflow-hidden bg-cover bg-center" 
              data-aos="slide-left" data-aos-delay="150"
              style={{ width: '20vw', height: '20vw'}}>
                <Image src={image6} alt="Block-10" className="w-full h-full object-cover" />
              </div>
              <div className="border-2 border-neonBlue rounded-3xl flex items-center justify-center overflow-hidden bg-cover bg-center" 
              data-aos="slide-left" data-aos-delay="150"
              style={{ width: '20vw', height: '20vw'}}>
                <p className="text-white"></p>
              </div>
            </div>
            <div className="border-2 border-neonBlue rounded-3xl flex items-center justify-center overflow-hidden bg-cover bg-center" 
            data-aos="fade-up" data-aos-delay="150"
            style={{ width: '95vw', height: '50vw'}}>
              <Image src={image2} alt="Block-9" className="w-full h-full object-cover" />
            </div>
            <div className="border-2 border-neonBlue rounded-3xl flex items-center justify-center overflow-hidden bg-cover bg-center" 
            data-aos="fade-up" data-aos-delay="150"
            style={{ width: '95vw', height: '50vw'}}>
              <p className="text-white m-4 text-xl text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque perspiciatis possimus consequatur tempora dolores ex suscipit magnam, quisquam eum saepe itaque error beatae qui, sed provident numquam, labore officiis facilis.</p>
            </div>
            
          </div>
        </div>
      </section>

      {/* Third Part: To be added later */}
      <section className="w-screen h-48 bg-transparent flex items-center justify-center">
        <p className="text-white">Content for the third part will be added here.</p>
      </section>
    </div>
  );
};

export default Home;
