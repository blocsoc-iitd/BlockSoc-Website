"use client"
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import HomeLarge from '@components/HomeLarge';
import HomeMedium from '@components/HomeMedium';
import HomeSmall from '@components/HomeSmall';
const Home = () => {

    useEffect (() => {
        AOS.init({
            duration: 1000, // You can customize the duration here
            once: true, // Whether animation should happen only once - while scrolling down
          });
        }, []);

        
  return (
    <div>
      <div className='hidden lg:block'>
        <HomeLarge/> 
      </div>
      <div className='hidden md:block lg:hidden'>
        <HomeMedium/>
      </div>
      <div className='sm:block md:hidden lg:hidden'>
        <HomeSmall/>
      </div>
    </div>
    
  )
};

export default Home;
