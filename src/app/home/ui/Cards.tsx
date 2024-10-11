"use client";

import { useState, useEffect } from 'react';

const cards = [
  {
    heading: 'For Online Vendors',
    src: '/images/frame-card.png',
    hoverSrc: '/images/shopping-app-6.png',
    description: [
     ' Record your transaction flows',
'Generate receipts for swift  payments',
'Access and track updated',
   '  inventory in real time'
    ],
  },
  {
    heading: 'For Retailers',
    src: '/images/shopping-store-4809880-3997871 1.png',
    hoverSrc: '/images/shopping-store.png',
    description: [
 'Record sales transactions',
 'Track inventory',
    'Issue receipts to clients',
    'Update daily transaction flows'
     ],
  },
  {
    heading: 'For Business firms',
    src: '/images/office-building-5560711-4632487 1.png',
    hoverSrc: '/images/office-buildin.png',
    description:   [
      'Allows you effectively and easily track company’s finances',
 'Helps you make decisions',
 'using clean and accurate data'
     ]
  },
];

export default function Cards() {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 780);
    };

    handleResize(); 
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleMouseEnter = (index: any) => {
    if (!isSmallScreen) {
      setHoveredIndex(index);
    }
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  return (
    <div className='flex max-lg:flex-col lg:justify-center  lg:w-[90%] w-[80%] mx-auto gap-x-10 mt-20 max-lg:gap-y-7 max-lg:items-center'>
      {cards.map((card, index) => (
        <div
          key={index}
          className='bg-[#F7F7F7] md:rounded-[20px] rounded-2xl md:px-[31px] px-[18px] py-12  transition-transform duration-300 ease-in-out transform hover:scale-105 cursor-pointer max-w-[385px] w-full'
          onMouseEnter={() => handleMouseEnter(index)}
          onMouseLeave={handleMouseLeave}
        >
            <h1 className='text-2xl font-medium text-center '>{card.heading}</h1>
          <img
            src={isSmallScreen ? card.hoverSrc : (hoveredIndex === index ? card.hoverSrc : card.src)}
            alt={card.heading}
            className='transition-opacity duration-300 ease-in-out max-md:w-52 mx-auto max-w-[220px]'
          />
           <ul className='md:text-base text-sm list-disc list-inside'>
            {card.description.map((des,index)=> (
              <li key={index} className=''>
                {des}
              </li>
            ))}
           </ul>
         
        </div>
      ))}
    </div>
  );
}
