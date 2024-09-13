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
import InfiniteScroll from '@components/InfiniteScroll';
import '@/styles/prismBackground.scss';         
import '@/styles/card.css'
import '@/styles/glitch.css'

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
      <section className="w-screen h-[70vh] md:h-[100vh] relative overflow-hidden">
        <div className="absolute inset-0 z-10"
        data-aos="fade-up" 
        data-aos-delay='600'>
          <div className="assembly top-[53vh] md:top-[60vh]">
            {Array.from({ length: 10 }).map((_, i) => (
              <div className="positioner" key={i}>
                <div className="prism">
                  {Array.from({ length: 6 }).map((_, j) => (
                    <div className="prism__face" key={j}></div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="relative z-20 flex flex-col items-center mt-32 text-white space-y-4">
          <h1 className="text-8xl font-bold" 
              data-aos="fade-left"
              data-aos-offset='300'>
            Welcome to
          </h1>
          <div className="hidden md:flex text-white text-8xl font-bold mb-2" 
              data-aos="fade-right" 
              data-aos-delay='300'
              data-aos-offset='300'>
            Blockchain Society
          </div>
          <div className='flex flex-col items-center md:hidden'>
            <h2 className="text-8xl font-bold mb-2" 
                data-aos="fade-right" 
                data-aos-delay='300'
                data-aos-offset='300'>
              Blockchain
            </h2>
            <h2 className="text-8xl font-bold mb-2" 
                data-aos="fade-left" 
                data-aos-delay='300'
                data-aos-offset='300'>
              Society
            </h2>
          </div>
          <span className="text-4xl w-128 font-bold scrollReveal" 
                data-text="Indian_Institute_of_Technology,Delhi">
            Indian_Institute_of_Technology,Delhi
          </span>
        </div>
      </section>

      {/* -----------------------------Second section-----------------------------  ;D*/}
      {/* -----------------------------Second section-----------------------------  ;D*/}
      {/* -----------------------------Second section-----------------------------  ;D*/}
      {/* -----------------------------Second section-----------------------------  ;D*/}
      {/* -----------------------------Second section-----------------------------  ;D*/}

      <section className='w-screen  flex flex-col items-center justufy-center mt-12'> 
        <div className=' flex align-center justify-center w-screen text-white md:mb-16'>
            <div className='w-[80vw]' data-aos="fade-up">
                <div className='text-6xl mb-2 text-bold'>
                    Who are we ?
                </div>
                <div className='md:hidden text-2xl mb-16'>
                We are a passionate collective of students at <strong>IIT Delhi</strong>, dedicated to exploring and advancing the frontier of blockchain technology.
                </div>
                <div className='hidden md:block text-2xl mb-16'>
                We are a passionate collective of students at IIT Delhi, dedicated to exploring and advancing the frontier of blockchain technology. Our society serves as a hub for learning and collaboration where we dive deep into the decentralized world, build projects, and foster a community that’s at the cutting edge of blockchain and Web3 development.
                </div>
            </div>
        </div>
        <div className='w-[80vw] flex wrap flex-col mb-8 md:flex-row items-start justify-start space-x-4 md:mb-32 '>
            <div className=' flex wrap  w-auto  mb-16 text-white '>
                <div className='w-auto' data-aos="fade-right" data-aos-delay="300">
                    <div className='text-6xl mb-2 text-bold'>
                        Our mission
                    </div>
                    <div className='md:hidden text-2xl'>
                    Our mission is to foster a deep understanding of blockchain technology and its applications. We aim to provide resources and organize events to empower our members.                    
                    </div>
                    <div className='hidden md:block text-2xl'>
                    Our mission is to foster a deep understanding of blockchain technology and its applications. We aim to provide resources, organize events, and create opportunities for hands-on experience to empower our members to become leaders in the blockchain revolution.
                    </div>
                </div>
            </div>
            <div className=' flex wrap align-center justify-center w-auto mb-16 text-white '>
                <div className='w-auto' data-aos="fade-left" data-aos-delay="500">
                    <div className='text-6xl mb-2 text-bold'>
                        Get Involved
                    </div>
                    <div className='md:hidden text-2xl'>
                    We are always open to collaborations. Whether you are a beginner or an expert, there is a place for you in our community.                   
                    </div>
                    <div className='hidden md:block text-2xl'>
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

        <div className="hidden md:flex flex-col justify-center items-center space-y-2">
          <div className="flex flex-wrap w-full h-full space-x-2">
            {/* First row */}
            <div className='card2 align-center' 
            style={{ width: '36vw', height: '50vh'}}
            >
              <Image src={image1} alt="Block-5" className="w-full h-full object-cover rounded-lg" />
            </div>
            <div className="flex flex-col space-y-0.5" style={{ width: '12vw' }}>
              <div className="border-2 border-neonBlue bg-white rounded-3xl flex items-center justify-center overflow-hidden bg-cover bg-center"  
              style={{ width: '12vw', height: '25vh'}}>
                <Image src={logo} alt="Logo" className="floating-logo w-[15vh] h-[15vh]" />
              </div>
              <div className="border-2 border-neonBlue bg-white rounded-3xl flex items-center justify-center overflow-hidden bg-cover bg-center" 
              style={{width: '12vw', height: '25vh'}}>
                <Image src={image5} alt="Logo" className="floating-logo w-[10vw] h-[10vw]" />
              </div>
            </div>
            
            <div className="card1 flex items-center" 
            style={{ width: '48vw', height: '50vh' }}>
              <div className="text-white mx-8 text-5xl">
              <AnimatedText quote = "A team of innovative minds, building a network of composable solutions, stronger together in every block." />
              </div>
            </div>
          </div>

          <div className="flex w-full h-full space-x-2">
            
            {/* Second row  */}
            {/* Second row  col1*/}
            <div className='flex flex-col space-y-1'>
              <div className='flex space-x-1'>
                <div className='flex items-center justify-center border-4 border-neonRed rounded-3xl'
                style={{ width: '45vw', height: '25vh'}}
                >
                  <div className=" flex items-center overflow-hidden bg-cover ">
                      <div class="font-bold hero glitch layers" data-text="Don't Trust, Verify"><span>Don't Trust, Verify</span></div>
                  </div>
                </div>
                <div className="border-2 border-neonBlue rounded-3xl flex items-center justify-center overflow-hidden bg-cover bg-center" 
                style={{ width: '12vw', height: '25vh'}}>
                  <Image src={image7} alt="Block-10" className="w-full h-full object-cover" />
                </div>
              </div>
              <div className="card1 flex items-center"
              style={{ width: '57vw', height: '50vh' }}>
              <p className="text-white m-4 text-3xl text-center ">
                At the Blockchain Society, we are dedicated to exploring and advancing the world of blockchain technology. Our community consists of enthusiasts, developers, and researchers who are passionate about crypto, DeFi, Web3.0, and ZK proofs. We believe in the transformative power of blockchain and its potential to revolutionize various industries              </p>
              </div>
            </div>
            {/* Second row  col2 */}
            <div className='flex flex-col space-y-2'>
              <div className="flex">
                <div className="card2"
                style={{ width: '39vw', height: '49vh'}}>
                  <Image src={image2} alt="Block-9" className="w-full h-full object-cover  rounded-lg" />
                </div>
              </div>
              <div className="card1"
              style={{ width: '39vw', height: '25vh' }}>
                <Image src={BTP} alt="BTP" className="w-full h-full object-cover" />
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



        <div className="md:hidden flex flex-col min-h-screen space-y-1 justify-start">
          <div className="flex flex-wrap w-full h-full">
            {/* First row */}
            <div className="card1 " 
            style={{ width: '95vw'}}>
              <div className="text-white m-4 mx-4 text-5xl text-center ">
              <AnimatedText quote = "A team of innovative minds, building a network of composable solutions, stronger together in every block." />
              </div>
            </div>
          </div>
          <div className="flex flex-wrap w-full h-full">
            {/* Second row */}
            <div className="border-2 border-neonBlue bg-white rounded-3xl flex items-center justify-center overflow-hidden bg-cover bg-center" 
            style={{width: '20vw', height: '20vw'}}>
              <Image src={logo} alt="Logo" className="floating-logo w-[10vw] h-[10vw]" />
            </div>
            <div className="border-4 border-neonRed rounded-3xl flex items-center justify-center overflow-hidden bg-cover " 
            style={{ width: '55vw', height: '20vw'}}>
              <div className=" flex flex-col space-y-2 items-center ">
                  <div class="font-bold  hero glitch layers" data-text="Don't Trust,"><span>Don't Trust,</span></div>
                  <div class="font-bold  hero glitch layers" data-text="Verify"><span>Verify</span></div>
              </div>            
            </div>
            <div className="border-2 border-neonBlue bg-white rounded-3xl flex items-center justify-center overflow-hidden bg-cover bg-center" 
            style={{width: '20vw', height: '20vw'}}>
              <Image src={image5} alt="Logo" className="floating-logo w-[15vw] h-[15vw]" />
            </div>
          </div>
          {/* Third row */}
          <div className="flex flex-wrap w-full h-full">
            
            <div className="card2" 
            style={{ width: '95vw', height: '40vw'}}>
              <Image src={image1} alt="Block-1" className="w-full h-full object-cover rounded-xl" />
            </div>
          </div>
          {/* Forth row */}
          <div className="card1"
            style={{ width: '95vw'}}>
              <p className="text-white m-4 text-xl text-center">
                At the Blockchain Society, we are dedicated to exploring and advancing the world of blockchain technology. Our community consists of enthusiasts, developers, and researchers who are passionate about crypto, DeFi, Web3.0, and ZK proofs. We believe in the transformative power of blockchain and its potential to revolutionize various industries
              </p>
          </div>
          {/*Fifth row */}
          <div className="card2" 
            style={{ width: '95vw', height: '50vw'}}>
              <Image src={image2} alt="Block-9" className="rounded-xl w-full h-full object-cover" />
          </div>
          {/* Sixth row*/}
          <div className="flex flex-wrap w-full h-full">
            <div className="flex flex-col" style={{ width: '20vw' }}>
              <div className="border-2 border-White rounded-3xl flex items-center justify-center overflow-hidden bg-cover bg-center" 
              style={{ width: '20vw', height: '20vw'}}>
                <p className="text-white"></p>
              </div>
              <div className="border-2 border-White rounded-3xl flex items-center justify-center overflow-hidden bg-cover bg-center" 
              style={{ width: '20vw', height: '20vw'}}>
              <Image src={image7} alt="Block-9" className="w-full h-full object-cover" />
              </div>
            </div>
            <div className="border-2 border-White rounded-3xl flex items-center justify-center overflow-hidden bg-cover bg-center" 
            style={{ width: '55vw', height: '40vw'}}>
              <Image src={image10} alt="Block-6" className="w-full h-full object-cover" />
            </div>
            <div className="flex flex-col" style={{ width: '20vw' }}>
              <div className="border-2 border-White rounded-3xl flex items-center justify-center overflow-hidden bg-cover bg-center" 
              style={{ width: '20vw', height: '20vw'}}>
                <Image src={image6} alt="Block-10" className="w-full h-full object-cover" />
              </div>
              <div className="border-2 border-White rounded-3xl flex items-center justify-center overflow-hidden bg-cover bg-center" 
              style={{ width: '20vw', height: '20vw'}}>
                <p className="text-white"></p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Third Part: To be added later */}
      <section className="w-screen h-48 bg-transparent flex items-center justify-center">
        <p className="text-white">If needed, content for the third part will be added here.</p>
      </section>
    </div>
  );
};

export default Home;
