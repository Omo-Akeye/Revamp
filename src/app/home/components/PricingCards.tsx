import React from 'react';

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
  terms:string
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
  limit,
  terms
}) => {
  return (
    <div
      className="flex flex-col justify-between max-w-[400px] w-full bg-white rounded-[20px] flex-grow"
      style={{ backgroundColor: bgColor }}
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
        <p className="text-center text-gray-700">{features}</p>
        <button
          className="block px-[27px] py-2 text-white rounded-[10px] hover:opacity-90 md:mt-16 mt-9"
          style={{ backgroundColor: buttonColor, }}
        >
          {buttonText}
        </button>
        <p className="mt-2 text-sm text-center text-gray-500">
          {terms}
        </p>
      </section>
    </div>
  );
};

const PricingCards: React.FC = () => {
  return (
    <div className="flex max-md:flex-col justify-center md:w-[90%] w-[80%] mx-auto gap-x-7 max-md:gap-5">
      <PricingCard
        title="Free"
        price="FREE"
        description="You have access to bime features and can add 10 salesmen"
        features=""
        buttonText="Start free trial"
        borderColor="#38BCFF"
        bgColor="#F1FAFF"
        buttonColor="#00AFEF"
        terms='Terms and conditions apply'
       
        
      />
      <PricingCard
        title="Regular"
        price="#1000.00"
        description="You have access to all bime features and can create 20+ salesman and vendors"
        features="Total monthly deposits"
        buttonText="Get started"
        borderColor="#FA6292"
        bgColor="#FFF4F7"
        buttonColor="#FA6292"
        terms='Our pricing adjusts with your monthly transactions'
      />
      <PricingCard
        title="Premium"
        price="#2500.00"
        limit="Unlimited"
        description="New features like QR Code generation for goods automating sales process"
        features="Total monthly deposits"
        buttonText="Get started"
        borderColor="#0DDFB0"
        bgColor="#F2FFFC"
        buttonColor="#0DDFB0"
        terms='Our pricing adjusts with your monthly transactions'
      />
    </div>
  );
};

export default PricingCards;