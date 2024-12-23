"use client";
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './swiper.css';

import { Navigation } from 'swiper/modules';
import Button from './Button';

const slidesData = [
  {
    title: 'Profit and Loss Accumulation',
    description: 'View the daily, monthly, yearly profit and lost balance with accumulated from your sales record',
    buttonText: 'Get started',
    imgSrc: '/images/8894264 1.png',
  },
  {
    title: 'Business Transaction Record',
    description: 'View the daily, monthly, yearly profit and lost balance with accumulated from your sales record',
    buttonText: 'Get started',
    imgSrc: '/images/estimated-profit-10823830-8689199 1.png',
  },
];

export default function ImageSlider() {
  return (
    <Swiper
      loop={true}
      navigation={true}
      modules={[Navigation]}
      className="mySwiper md:w-[60%] max-sm:px-5 mx-auto"
    >
      {slidesData.map((slide, index) => (
        <SwiperSlide key={index}>
          <div className="flex flex-col items-center justify-center text-center p-6 w-[80%] mx-auto">
            <h1 className="md:text-5xl text-[28px] font-medium">{slide.title}</h1>
            <p className="mb-8 mt-4 max-sm:text-xs">
              {slide.description}
            </p>
            <Button
            label={slide.buttonText}
            width="auto"
            height="auto"
            bgColor="#329ACF"
            hoverBgColor="#38BCFF" 
            textColor="white"         
        />
           
            <img src={slide.imgSrc} alt={`Slide ${index + 1}`} />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
