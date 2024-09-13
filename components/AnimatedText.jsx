import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const AnimatedText = ({ quote }) => {

  useEffect (() => {
    AOS.init({
        duration: 1000, // You can customize the duration here
        once: false,
      });
    }, []);

  return (
    <div className="center-text font-bold">
      {quote.split(" ").map((word, index) => (
        <span
          key={index}
          className='inline-block' 
          data-aos="fade-up" 
          data-aos-delay={index*100}
        >
          {word}&nbsp;
        </span>
      ))}
    </div>
  );
};

export default AnimatedText;
