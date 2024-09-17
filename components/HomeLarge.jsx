
import Image from 'next/image';
import logo from '@public/assets/home/ethereumLogo.svg';
import image1 from '@public/assets/home/image1.jpg'; 
import image2 from '@public/assets/home/image2.jpg';
import image11 from '@public/assets/home/image11.png';
import BTP from '@public/assets/home/BelieveTheProcess.png';
import image6 from '@public/assets/home/image6.jpg';

import AnimatedText from '@components/AnimatedText';
import '@/styles/prismBackground.scss';         
import '@/styles/card.css'
import '@/styles/glitch.css'
const HomeLarge = () => {
  return (
    <div className='w-screen overflow-x-hidden'>
      {/* First Part: Background Video and Welcome Text */}
      <section className="w-screen h-[100vh]  relative overflow-hidden">
        <div className="absolute inset-0 z-10"
        data-aos="fade-up" 
        data-aos-delay='600'>
          <div className="assembly top-[60vh]">
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
          <span className="text-4xl w-128 font-bold scrollReveal" 
                data-text="Indian_Institute_of_Technology,Delhi">
            Indian_Institute_of_Technology,Delhi
          </span>
        </div>
      </section>

      {/* -----------------------------Second section-----------------------------  ;D*/}
      <section className='w-screen  flex flex-col items-center justufy-center mt-12'> 
        <div className=' flex align-center justify-center w-screen text-white md:mb-16'>
            <div className='w-[80vw]' data-aos="fade-up">
                <div className='text-6xl mb-2 text-bold'>
                    Who are we ?
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
                    <div className='hidden md:block text-2xl'>
                    We are always open to collaborations. Whether you are a beginner or an expert, there is a place for you in our community. Join us to learn, collaborate, and contribute to the future of blockchain technology.
                    </div>
                </div>
            </div>
        </div>
      </section>

      {/* Third Part: Flexbox Grid of Rounded Rectangles */}
      <section className="bg-transparent flex items-start justify-start relative ml-2">
        <div className='hidden lg:block'>
          <div className="flex flex-col justify-center items-center space-y-2">
            <div className="flex flex-wrap w-full h-full space-x-2">
              {/* First row */}
              <div className='card2 align-center' 
              style={{ width: '36vw', height: '50vh'}}
              >
                <Image src={image1} alt="Block-5" className="w-full h-full object-cover rounded-lg" />
              </div>
              <div className="flex flex-col space-y-0.5" style={{ width: '12vw' }}>
                <div className="border-2 border-neonBlue rounded-3xl flex items-center justify-center overflow-hidden bg-cover bg-center"  
                style={{ width: '12vw', height: '25vh'}}>
                  <Image src={logo} alt="Logo" className="floating-logo w-[15vh] h-[15vh]" />
                </div>
                <div className="border-2 border-neonBlue rounded-3xl flex items-center justify-center overflow-hidden bg-cover bg-center" 
                style={{width: '12vw', height: '25vh'}}>
                  <Image src={image11} alt="Logo" className="floating-logo w-[10vw] h-[10vw]" />
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
                    <Image src={image6} alt="Block-10" className="w-full h-full object-cover" />
                  </div>
                </div>
                <div className="card1 flex items-center"
                style={{ width: '57vw', height: '50vh' }}>
                <p className="text-white m-4 text-3xl text-center ">
                  At BlocSoc, we are dedicated to exploring and advancing the world of blockchain technology. Our community consists of enthusiasts, developers, and researchers who are passionate about crypto, DeFi, Web3.0, and ZK proofs. We believe in the transformative power of blockchain and its potential to revolutionize various industries              </p>
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
        </div>
      </section>
    </div>
  )
}

export default HomeLarge