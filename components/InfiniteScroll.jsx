"use client";
import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import scroll1 from '@public/assets/scroll1.jpg';
import scroll2 from '@public/assets/scroll2.jpg';
import scroll3 from '@public/assets/scroll3.jpg';
import scroll4 from '@public/assets/scroll4.jpg';
import scroll5 from '@public/assets/scroll5.jpg';
import scroll6 from '@public/assets/scroll6.jpg';
import scroll7 from '@public/assets/scroll7.jpg';

const InfiniteScrollLogos = () => {
  const logosRef = useRef(null);

  useEffect(() => {
    const ul = logosRef.current;
    if (ul) {
      ul.insertAdjacentHTML('afterend', ul.outerHTML);
      ul.nextSibling.setAttribute('aria-hidden', 'true');
    }
  }, []);

  return (
    <div className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
      <ul ref={logosRef} className="flex items-center justify-center md:justify-start [&_li]:mx-8 animate-infinite-scroll">
        <li>
          <Image 
            src={scroll1} 
            alt="Image-1" 
            width={300}  // Set the width here
            height={300} // Set the height here
            className="object-cover" 
          />
        </li>
        <li>
          <Image 
            src={scroll2} 
            alt="Image-2" 
            width={300}  
            height={300} 
            className="object-cover" 
          />
        </li>
        <li>
          <Image 
            src={scroll3} 
            alt="Image-3" 
            width={300}  
            height={300} 
            className="object-cover" 
          />
        </li>
        <li>
          <Image 
            src={scroll4} 
            alt="Image-4" 
            width={300}  
            height={300} 
            className="object-cover" 
          />
        </li>
        <li>
          <Image 
            src={scroll5} 
            alt="Image-5" 
            width={300}  
            height={300} 
            className="object-cover" 
          />
        </li>
        <li>
          <Image 
            src={scroll6} 
            alt="Image-6" 
            width={300}  
            height={300} 
            className="object-cover" 
          />
        </li>
        <li>
          <Image 
            src={scroll7} 
            alt="Image-7" 
            width={300}  
            height={300} 
            className="object-cover" 
          />
        </li>
      </ul>                
    </div>
  );
};

export default InfiniteScrollLogos;
