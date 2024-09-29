"use client"
import Button from "./Button";

export default function Hero() {


  return (
    <>
      <img src='images/Group 30.svg' alt="group1" className="absolute lg:left-[10%] left-[5%] md:left-[5%] md:top-[50%] top-[30%] max-md:w-11" />
      <img src='/images/Group 31.svg' alt="group2" className="absolute right-[20%] md:top-[15%] top-[15%] max-md:w-11" />
      <img src="/images/Group 1000002780.png" alt="finance" className="absolute w-[73px] h-[73px] md:right-[15%] right-[7%] md:bottom-[35%] max-md:top-[30%] max-md:w-11 max-md:h-11" />
      <img src="/images/Group 1000002779.png" alt="finance"  className="absolute w-[52px] h-[52px] left-[25%] md:top-[20%] top-[15%] max-md:w-11 max-md:h-11 "/>
      <div className="text-center xl:w-[45%] m-auto  max-md:mt-24 w-[75%] sm:w-[55%] md:w-[75%]">
      {/* <div className="text-center xl:w-[45%] m-auto lg:w-[70%] max-md:mt-24 w-[65%] md:w-[75%]"> */}
        <h1 className="font-bold md:text-[64px] text-[28px] md:leading-[80px] text-center hero1">
       <span className="text-bime-blue">
       Automate
        </span> Your 
        Boring Finances
        </h1>
        <p className="bime-black md:mt-9 mt-6 mb-14  md:px-[10%] max-md:text-sm text-xl">
        Control full access to reliable, easy-to-use and automated bookkeeping for your business
        </p>
        <div className="inline-flex justify-center items-center md:gap-x-7 gap-x-3">
       <Button
            label="Start free trial"
            width="auto"
            height="auto"
            bgColor="#329ACF"
            hoverBgColor="#38BCFF" 
            textColor="white"         
        />
        <Button
          label="Learn more"
          width="auto"
          height="auto"
          bgColor="transparent"
          textColor="#282829"
          border="0.3px solid #282829"
          hoverBgColor="#EAEAEA"
        />
        </div>
      </div>
    </>
  );
}
