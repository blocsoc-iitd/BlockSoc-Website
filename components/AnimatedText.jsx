import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const AnimatedText = ({ quote }) => {

  useEffect (() => {
    AOS.init({
        duration: 1000, // You can customize the duration here
        once: false, // Whether animation should happen only once - while scrolling down
      });
    }, []);

  return (
    <div className="text-center text-white font-bold">
      {quote.split(" ").map((word, index) => (
        <span
          key={index}
          className='inline-block' 
          data-aos="fade-up" 
          data-aos-delay={index*200}
        >
          {word}&nbsp;
        </span>
      ))}
    </div>
  );
};

export default AnimatedText;
