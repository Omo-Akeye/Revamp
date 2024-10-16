"use client"
import Button from "./Button";

export default function Hero() {

  return (
    <>
      <img src='images/Group 30.svg' alt="group1" className="absolute lg:left-[10%] left-[2%] md:left-[5%] md:top-[50%] top-[30%] max-md:w-11" />
      <img src='/images/Group 31.svg' alt="group2" className="absolute right-[15%] md:top-[15%] top-[12%] max-md:w-11" />
      <img src="/images/Group 1000002780.png" alt="finance" className="absolute w-[73px] h-[73px] md:right-[15%] right-[3%] md:bottom-[35%] max-md:top-[30%] max-md:w-11 max-md:h-11" />
      <img src="/images/Group 1000002779.png" alt="finance"  className="absolute w-[52px] h-[52px] left-[15%] md:top-[15%] top-[12%] max-md:w-11 max-md:h-11 "/>
      <div className="text-center lg:w-[80%] xl:w-[70%] m-auto  max-md:mt-24 sm:w-[75%]  md:w-[80%] w-[85%]">
        <h1 className="font-bold lg:text-8xl sm:text-5xl text-4xl max-[365px]:text-3xl md:leading-[80px] text-center hero1 md:text-7xl">
       
       Automate
         Your 
        Boring Finances
        </h1>
        <p className="bime-black md:mt-9 mt-6 mb-14 max-md:text-sm sm:mx-[10%] md:mx-[20%] text-base lg:mx-[28%]">
        Control full access to reliable, easy-to-use and automated bookkeeping for your business
        </p>
        <div className="inline-flex justify-center items-center md:gap-x-4 gap-x-3">
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
