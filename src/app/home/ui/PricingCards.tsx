"use client"

import React from 'react';
import Button from './Button';

interface PricingCardProps {
  title: string;
  price: string;
  description: string;
  features: string;
  buttonText: string;
  borderColor: string;
  bgColor: string;
  buttonColor: string;
  limit?: string;
  terms: string;
  textcolor: string;
  hoverBgColor: string;
}

export const PricingCard: React.FC<PricingCardProps> = ({
  title,
  price,
  description,
  features,
  buttonText,
  borderColor,
  bgColor,
  buttonColor,
  hoverBgColor,
  limit,
  terms,
  textcolor
}) => {
  return (
    <div
      className="flex flex-col justify-between max-w-[380px] w-full bg-white rounded-[20px] flex-grow"
      style={{ backgroundColor: bgColor, color: textcolor }}
    >
      <h2
        className="w-full py-10 text-xl text-center border-b-8"
        style={{ borderColor: borderColor }}
      >
        Bime <span className="font-semibold">{title}</span>
      </h2>
      <section className="flex flex-col justify-between pt-8 pb-8 md:px-[72px] px-[55px] flex-grow">
        <p className="md:mb-[60px] mb-[40px] text-sm text-center font-medium">{description}</p>
        <p className="flex flex-col mb-5 md:text-5xl text-4xl font-medium text-center">
          {price} <span className="font-light uppercase">{limit}</span>
        </p>
        <p className="text-center">{features}</p>
        <div className="md:mt-16 mt-9 flex-col justify-center items-center flex">
          <Button
            label={buttonText}
            bgColor={buttonColor}
            textColor="white"
            width="auto"
            height="auto"
            hoverBgColor={hoverBgColor}
          />
           <p className="mt-2 text-sm text-center max-sm:text-xs">{terms}</p>
        </div>
       
      </section>
    </div>
  );
};

const PricingCards: React.FC = () => {
  return (
    <div className="flex max-lg:flex-col justify-center md:w-[90%] w-[80%] mx-auto gap-x-7 max-lg:gap-5 max-lg:items-center">
      <PricingCard
        title="Free"
        price="FREE"
        description="You have access to bime features and can add 10 salesmen"
        features=""
        buttonText="Start Free Trial"
        borderColor="#38BCFF"
        bgColor="#F1FAFF"
        buttonColor="#0899CE"
        hoverBgColor="#38BCFF"
        terms="Terms and conditions apply"
        textcolor="#006CA2"
      />
      <PricingCard
        title="Regular"
        price="#1000.00"
        textcolor="#960030"
        description="You have access to all bime features and can create 20+ salesman and vendors"
        features="Total monthly deposits"
        buttonText="Get started"
        borderColor="#FA6292"
        bgColor="#FFF4F7"
        buttonColor="#CE2C60"
        hoverBgColor="#FA6292"
        terms="Our pricing adjusts with your monthly transactions"
      />
      <PricingCard
        title="Premium"
        price="#2500.00"
        textcolor="#006C54"
        limit="Unlimited"
        description="New features like QR Code generation for goods automating sales process"
        features="Total monthly deposits"
        buttonText="Get started"
        borderColor="#0DDFB0"
        bgColor="#F2FFFC"
        hoverBgColor="#0DDFB0"
        buttonColor="#0AB18C"
        terms="Our pricing adjusts with your monthly transactions"
      />
    </div>
  );
};

export default PricingCards;
