export default function Hero() {


  return (
    <>
      <img src='images/Group 30.svg' alt="group1" className="absolute lg:left-[10%] md:left-[5%] md:top-[50%] top-[30%] max-md:w-11" />
      <img src='/images/Group 31.svg' alt="group2" className="absolute right-[20%] top-[15%] max-md:w-11" />
      <img src="/images/Group 1000002780.png" alt="finance" className="absolute w-[73px] h-[73px] right-[15%] bottom-[35%]" />
      <img src="/images/Group 1000002779.png" alt="finance"  className="absolute w-[52px] h-[52px] left-[25%] top-[20%] "/>
      <div className="text-center xl:w-[40%] m-auto lg:w-[70%] max-md:mt-24 w-[85%] ">
        <h1 className="font-bold md:text-[64px] text-[28px] md:leading-[80px] text-center">
       <span className="text-bime-blue">
       Automate
        </span> Your 
        Boring Finances
        </h1>
        <p className="bime-black mt-9 mb-7  md:px-[10%] max-md:text-sm text-xl">
        Control full access to reliable, easy-to-use and automated bookkeeping for your business
        </p>
        <div className="flex justify-center md:gap-5 gap-3 font-semibold">
          <button className="text-white  md:px-[28px] px-5 md:py-[18px] py-2 rounded-[10px] bg-[#329ACF] ease-in-out max-md:text-xs hover:bg-bime-blue">Start free trial</button>
          <button className="text-[#282829] border-[#282829] border-[0.3px] md:px-10 px-[28px] md:py-[18px] py-2 rounded-[10px]">Learn more</button>
        </div>
      </div>
    </>
  );
}
