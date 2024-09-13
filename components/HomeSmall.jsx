import Image from 'next/image';
import logo from '@public/assets/ethereumLogo.svg';
import image1 from '@public/assets/image1.jpg'; 
import image2 from '@public/assets/image2.jpg';
import image11 from '@public/assets/image11.png';
import BTP from '@public/assets/BelieveTheProcess.png';
import image7 from '@public/assets/image7.jpg'
import image6 from '@public/assets/image6.jpg';
import image10 from '@public/assets/image10.jpg';

import AnimatedText from '@components/AnimatedText';
import '@/styles/prismBackground.scss';         
import '@/styles/card.css'
import '@/styles/glitch.css'

const HomeSmall = () => {
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
          <div className='flex flex-col items-center '>
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
          <div className='flex flex-col items-center '>
            <span className="text-4xl font-bold scrollReveal" 
                    data-text="Indian_Institute_of_Technology,Delhi">
                Indian_Institute_of_Technology,Delhi
            </span>
          </div>
        </div>
      </section>
            {/* Second Part:  */}
      <section className='w-screen h-auto flex flex-col items-center justify-center text-white my-12'> 
        <div className='w-[80vw] flex flex-col justify-center items-center' data-aos="fade-up">
                <div className='text-6xl mb-2 font-bold'>
                    Who are we ?
                </div>
                <div className='text-2xl mb-16'>
                We are a passionate collective of students at IIT Delhi, dedicated to exploring and advancing the frontier of blockchain technology. Our society serves as a hub for learning and collaboration where we dive deep into the decentralized world, build projects, and foster a community that’s at the cutting edge of blockchain and Web3 development.
                </div>
            </div>
        <div className='w-[80vw] flex flex-col items-center' data-aos="fade-up">
            <div className='text-6xl mb-4 font-bold'>
            Our mission
            </div>
            <div className='text-2xl mb-16'>
            Our mission is to foster a deep understanding of blockchain technology and its applications. We aim to provide resources, organize events, and create opportunities for hands-on experience to empower our members to become leaders in the blockchain revolution.
            </div>
        </div>
      </section>

      {/* Third Part: Flexbox Grid of Rounded Rectangles */}
      <section className="bg-transparent flex items-start justify-start relative ml-2 mb-16">
        <div className=" flex flex-col min-h-screen space-y-2 justify-start">
          <div className="flex flex-wrap w-full h-full">
            {/* First row */}
            <div className="card1 " 
            style={{ width: '95vw'}}>
              <div className="text-white m-4 mx-8 text-5xl text-center my-16">
              <AnimatedText quote = "A team of innovative minds, building a network of composable solutions, stronger together in every block." />
              </div>
            </div>
          </div>
          <div className="flex flex-wrap w-full h-full space-x-1">
            {/* Second row */}
            <div className="border-2 border-neonBlue rounded-3xl flex items-center justify-center overflow-hidden bg-cover bg-center" 
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
            <div className="border-2 border-neonBlue rounded-3xl flex items-center justify-center overflow-hidden bg-cover bg-center" 
            style={{width: '20vw', height: '20vw'}}>
              <Image src={image11} alt="Logo" className="floating-logo w-[15vw] h-[15vw]" />
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
              <p className="text-white m-4 text-2xl mx-8 my-8 text-center">
                At the BlocSoc, we are dedicated to exploring and advancing the world of blockchain technology. Our community consists of enthusiasts, developers, and researchers who are passionate about crypto, DeFi, Web3.0, and ZK proofs. We believe in the transformative power of blockchain and its potential to revolutionize various industries
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
    </div>
  )
}

export default HomeSmall