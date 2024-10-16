"use client"


import Button from "./Button";

export default function GoodBye() {
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', 
    });
  };
  return (
    <>
      <div className="footer-bg w-full items-center md:py-36 mt-28 text-center">
        <div className="xl:w-[50%] mx-auto w-[85%]">
          <h1 className="md:text-[64px] text-2xl font-semibold  md:leading-[81px]">
            <span className="font-rage md:text-[117px] text-4xl font-normal">Say goodbye</span> to messy accounting!
          </h1>
          <p className="md:text-xl my-9 md:w-[70%] mx-auto font-medium">
            Bime was built and continuously updated to help you run a hassle-free business
          </p> 
        
          <Button
              label="Create an account"
              href="/signup"
              bgColor="#329ACF"
              textColor="white"
              width="auto"
              height="auto"
              hoverBgColor="#38BCFF"
            />
 
          <section className="flex max-md:flex-col  justify-center gap-x-8 mt-11 max-md:gap-y-2  mx-auto">
            <span className="flex gap-x-[10px] items-center justify-center">

            <img src="/images/star.jpg" alt="vector" className="max-sm:w-5" />
            <p className="md:text-xl font-medium text-xs">4.7 on G2.com</p>
            <img src="/images/footergroup.png" alt="footer" />
            </span>

            <span className="flex gap-x-[10px] items-center justify-center">
            <img src="/images/star.jpg" alt="vector" className="max-sm:w-5" />
            <p className="md:text-xl text-xs font-medium">4.7 on Capterra</p>
            <img src="/images/footergroup1.png" alt="footer" />
            </span>

          </section>
         
        
        </div>
      </div>

      <footer className="md:w-full w-[90%] mx-auto md:px-24 md:py-20 pb-10 md:-mt-11 mt-24 flex justify-between">
        <h1 className="md:text-6xl font-bold text-bime-blue cursor-pointer" onClick={handleScrollToTop}>
        Bime
        </h1>
        <div className="flex gap-x-2 items-center">
          <img src="/images/bluerounded.png" alt="indicator" className="w-6 h-6" />
          <h2 className="font-medium md:text-xl text-xs">All services are operational</h2>
        </div>
      </footer>
    </>
  );
}
