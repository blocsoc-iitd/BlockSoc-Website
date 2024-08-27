import React from 'react';
import backgroundVideo from '../assets/backgroundDark.mp4';
import logo from '../assets/ethereumLogo.svg';
import image1 from '../assets/image1.jpg'; 
import image2 from '../assets/image2.jpg';
import image5 from '../assets/image5.png';
import BTP from '../assets/BelieveTheProcess.png';
import image7 from '../assets/image7.jpg'
import image6 from '../assets/image6.jpg';
import image10 from '../assets/image10.jpg';

const Home = () => {
  return (
    <div>
      {/* First Part: Background Video and Welcome Text */}
      <section className="w-[100vw] h-[100vh] relative overflow-hidden">
        <video
          className="absolute inset-0 w-full h-full object-cover"
          src={backgroundVideo}
          autoPlay
          loop
          muted
        />
        <div className="absolute inset-0 flex flex-col pt-[25vh] text-white z-10 space-y-4 ml-4">
          <h1 className="text-8xl text-left font-bold animate-line-fade-in">Welcome to</h1>
          <h2 className="text-8xl text-left font-bold mb-2 " data-aos="fade-up">Blockchain Society</h2>
          <span className="text-4xl text-left w-128 scrollReveal" data-text="Indian_Institute_of_Technology,Delhi" >Indian_Institute_of_Technology,Delhi</span>
        </div>
      </section>

      {/* Second Part: Flexbox Grid of Rounded Rectangles */}
      <section className="bg-transparent flex items-start justify-start relative ml-2">

        {/* ------------------------------------------------- Second part: LARGE and MEDIUM screens ------------------------------------------ */}
        {/* ------------------------------------------------- Second part: LARGE and MEDIUM screens ------------------------------------------ */}
        {/* ------------------------------------------------- Second part: LARGE and MEDIUM screens ------------------------------------------ */}
        {/* ------------------------------------------------- Second part: LARGE and MEDIUM screens ------------------------------------------ */}
        {/* ------------------------------------------------- Second part: LARGE and MEDIUM screens ------------------------------------------ */}
        {/* ------------------------------------------------- Second part: LARGE and MEDIUM screens ------------------------------------------ */}
        {/* ------------------------------------------------- Second part: LARGE and MEDIUM screens ------------------------------------------ */}
        {/* ------------------------------------------------- Second part: LARGE and MEDIUM screens ------------------------------------------ */}

        <div className="hidden md:flex flex-col justify-center items-center">
          <div className="flex flex-wrap w-full h-full">
            {/* First row */}
            <div className="border-2 border-neonBlue rounded-3xl flex items-center justify-center overflow-hidden bg-cover bg-center" style={{ width: '36vw', height: '50vh'}}>
              <img src={image1} alt="Block-5" className="w-full h-full object-cover" />
            </div>
            <div className="flex flex-col" style={{ width: '12vw' }}>
              <div className="border-2 border-neonBlue bg-white rounded-3xl flex items-center justify-center overflow-hidden bg-cover bg-center" style={{ width: '12vw', height: '25vh'}}>
                <img src={logo} alt="Logo" className="floating-logo w-[12vh] h-[12vh]" />
              </div>
              <div className="border-2 border-neonBlue bg-white rounded-3xl flex items-center justify-center overflow-hidden bg-cover bg-center" style={{width: '12vw', height: '25vh'}}>
              <img src={image5} alt="Logo" className="floating-logo w-[10vw] h-[10vw]" />
            </div>
            </div>
            
            <div className="border-2 border-neonBlue rounded-3xl flex items-center justify-center overflow-hidden bg-cover bg-center" style={{ width: '48vw', height: '50vh' }}>
              <p className="text-white m-4 text-xl text-center " data-aos="fade-up">Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque perspiciatis possimus consequatur tempora dolores ex suscipit magnam, quisquam eum saepe itaque error beatae qui, sed provident numquam, labore officiis facilis.</p>
            </div>
          </div>

          <div className="flex w-full h-full">
            {/* Second row */}
            <div className='flex flex-col'>
              <div className='flex'>
                <div className="border-2 border-neonBlue rounded-3xl flex items-center justify-center overflow-hidden bg-cover bg-center" style={{ width: '45vw', height: '25vh'}}>
                  <img src={BTP} alt="BTP" className="w-full h-full object-cover" />
                </div>
                <div className="border-2 border-neonBlue rounded-3xl flex items-center justify-center overflow-hidden bg-cover bg-center" style={{ width: '12vw', height: '25vh'}}>
                  <img src={image7} alt="Block-10" className="w-full h-full object-cover" />
                </div>
              </div>
              <div className="border-2 border-neonBlue rounded-3xl flex items-center justify-center overflow-hidden bg-cover bg-center" style={{ width: '57vw', height: '50vh' }}>
              <p className="text-white m-4 text-2xl text-center " data-aos="fade-up">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque perspiciatis possimus consequatur tempora dolores ex suscipit magnam, quisquam eum saepe itaque error beatae qui, sed provident numquam, labore officiis facilis.
              </p>
              </div>
            </div>
            <div className='flex flex-col'>
              <div className="flex">
                <div className="border-2 border-neonBlue rounded-3xl flex items-center justify-center overflow-hidden bg-cover bg-center" style={{ width: '39vw', height: '50vh'}}>
                  <img src={image2} alt="Block-9" className="w-full h-full object-cover" />
                </div>
              </div>
              <div className="border-2 border-neonBlue rounded-3xl flex items-center justify-center overflow-hidden bg-cover bg-center" style={{ width: '39vw', height: '25vh' }}>
              <p className="text-white m-4 text-md text-center" data-aos="fade-up">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque perspiciatis possimus consequatur tempora dolores ex suscipit magnam, quisquam eum saepe itaque error beatae qui, sed provident numquam, labore officiis facilis.
              </p>
              </div>
            </div>
            
            
          </div>
        </div>

        {/*----------------------------------------------- Second part: SMALL screens ---------------------------------------------------------*/}
        {/*----------------------------------------------- Second part: SMALL screens ---------------------------------------------------------*/}
        {/*----------------------------------------------- Second part: SMALL screens ---------------------------------------------------------*/}
        {/*----------------------------------------------- Second part: SMALL screens ---------------------------------------------------------*/}
        {/*----------------------------------------------- Second part: SMALL screens ---------------------------------------------------------*/}
        {/*----------------------------------------------- Second part: SMALL screens ---------------------------------------------------------*/}
        {/*----------------------------------------------- Second part: SMALL screens ---------------------------------------------------------*/}
        {/*----------------------------------------------- Second part: SMALL screens ---------------------------------------------------------*/}



        <div className="md:hidden flex flex-col min-h-screen justify-start">
          <div className="flex flex-wrap w-full h-full">
            {/* First row */}
            <div className="border-2 border-neonBlue rounded-3xl flex items-center justify-center overflow-hidden bg-cover bg-center" style={{ width: '95vw', height: '50vw'}}>
              <p className="text-white m-4 text-xl text-center" data-aos="fade-up">Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque perspiciatis possimus consequatur tempora dolores ex suscipit magnam, quisquam eum saepe itaque error beatae qui, sed provident numquam, labore officiis facilis.</p>
            </div>
          </div>
          <div className="flex flex-wrap w-full h-full">
            {/* Second row */}
            <div className="border-2 border-neonBlue bg-white rounded-3xl flex items-center justify-center overflow-hidden bg-cover bg-center" style={{width: '20vw', height: '20vw'}}>
              <img src={logo} alt="Logo" className="floating-logo w-[10vw] h-[10vw]" />
            </div>
            <div className="border-2 border-neonBlue rounded-3xl flex items-center justify-center overflow-hidden bg-cover bg-center" style={{ width: '55vw', height: '20vw'}}>
              <img src={BTP} alt="Believe" className="w-full h-full object-cover"/>
            </div>
            <div className="border-2 border-neonBlue bg-white rounded-3xl flex items-center justify-center overflow-hidden bg-cover bg-center" style={{width: '20vw', height: '20vw'}}>
              <img src={image5} alt="Logo" className="floating-logo w-[15vw] h-[15vw]" />
            </div>
          </div>
          <div className="flex flex-wrap w-full h-full">
            {/* Third row */}
            <div className="border-2 border-neonBlue rounded-3xl flex items-center justify-center overflow-hidden bg-cover bg-center" style={{ width: '95vw', height: '40vw'}}>
              <img src={image1} alt="Block-1" className="w-full h-full object-cover" />
            </div>
          </div>
          <div className="flex flex-wrap w-full h-full">
            {/* Forth row */}
            <div className="flex flex-col" style={{ width: '20vw' }}>
              <div className="border-2 border-neonBlue rounded-3xl flex items-center justify-center overflow-hidden bg-cover bg-center" style={{ width: '20vw', height: '20vw'}}>
                <p className="text-white"></p>
              </div>
              <div className="border-2 border-neonBlue rounded-3xl flex items-center justify-center overflow-hidden bg-cover bg-center" style={{ width: '20vw', height: '20vw'}}>
              <img src={image7} alt="Block-9" className="w-full h-full object-cover" />
              </div>
            </div>
            <div className="border-2 border-neonBlue rounded-3xl flex items-center justify-center overflow-hidden bg-cover bg-center" style={{ width: '55vw', height: '40vw'}}>
              <img src={image10} alt="Block-6" className="w-full h-full object-cover" />
            </div>
            <div className="flex flex-col" style={{ width: '20vw' }}>
              <div className="border-2 border-neonBlue rounded-3xl flex items-center justify-center overflow-hidden bg-cover bg-center" style={{ width: '20vw', height: '20vw'}}>
                <img src={image6} alt="Block-10" className="w-full h-full object-cover" />
              </div>
              <div className="border-2 border-neonBlue rounded-3xl flex items-center justify-center overflow-hidden bg-cover bg-center" style={{ width: '20vw', height: '20vw'}}>
                <p className="text-white"></p>
              </div>
            </div>
            <div className="border-2 border-neonBlue rounded-3xl flex items-center justify-center overflow-hidden bg-cover bg-center" style={{ width: '95vw', height: '50vw'}}>
              <img src={image2} alt="Block-9" className="w-full h-full object-cover" />
            </div>
            <div className="border-2 border-neonBlue rounded-3xl flex items-center justify-center overflow-hidden bg-cover bg-center" style={{ width: '95vw', height: '50vw'}}>
              <p className="text-white m-4 text-xl text-center" data-aos="fade-up">Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque perspiciatis possimus consequatur tempora dolores ex suscipit magnam, quisquam eum saepe itaque error beatae qui, sed provident numquam, labore officiis facilis.</p>
            </div>
            
          </div>
        </div>
      </section>

      {/* Third Part: To be added later */}
      <section className="w-screen h-96 bg-transparent flex items-center justify-center">
        <p className="text-white">Content for the third part will be added here.</p>
      </section>
    </div>
  );
};

export default Home;
