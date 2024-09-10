
"use client"
import  { useState, useEffect } from 'react';


export default function Hero() {
  const words = ["daily", "monthly", "per annum"];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [displayedWord, setDisplayedWord] = useState(words[0]);

  useEffect(() => {
    let timeoutIds: ReturnType<typeof setTimeout>[] = [];

    const currentWord = words[currentWordIndex];
   
    currentWord.split("").reverse().forEach((_, index) => {
      timeoutIds.push(setTimeout(() => {
        setDisplayedWord((prev) => prev.slice(0, prev.length - 1));
      }, index * 100));
    });

   
    timeoutIds.push(setTimeout(() => {
      const nextWordIndex = (currentWordIndex + 1) % words.length;
      const nextWord = words[nextWordIndex];
      nextWord.split("").forEach((char, index) => {
        timeoutIds.push(setTimeout(() => {
          setDisplayedWord((prev) => prev + char);
        }, index * 100));
      });

      setTimeout(() => {
        setCurrentWordIndex(nextWordIndex);
      }, nextWord.length * 200 + 1000); 
    }, currentWord.length * 100 + 500)); 

    return () => {
      timeoutIds.forEach((id) => clearTimeout(id));
    };
  }, [currentWordIndex]);

  return (
    <>
      <img src='images/Group 30.svg' alt="group1" className="absolute lg:left-[10%] md:left-[5%] md:top-[50%] top-[30%] max-md:w-11" />
      <img src='/images/Group 31.svg' alt="group2" className="absolute right-[10%] top-[15%] max-md:w-11" />
      <div className="text-center xl:w-[55%] m-auto lg:w-[70%] max-md:mt-24 w-[85%]">
        <h1 className="font-bold md:text-[64px] text-[28px] md:leading-[80px] text-center">
          Know your business output{" "}
          <span className="text-bime-blue inline-block  text-left">
            {displayedWord}
          </span>
        </h1>
        <p className="text-gray-400 mt-9 mb-7  md:px-[10%] max-md:text-sm text-xl">Intelligent business built right into the heart you add sales and expenses you view profit and revenue generated daily, monthly per annum</p>
        <div className="flex justify-center md:gap-5 gap-3 font-bold">
          <button className="text-white bg-black  md:px-[30px] px-5 md:py-[10px] py-2 rounded-[10px] hover:bg-[#329ACF] ease-in-out max-md:text-xs">Start free trial</button>
          <button className="text-[#282829] border-[#282829] border-[0.3px] md:px-10 px-[28px] md:py-[10px] py-2 rounded-[10px]">Learn more</button>
        </div>
      </div>
    </>
  );
}
