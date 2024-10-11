

export default function Why() {
  return (
    <div className='md:mt-16 mt-14'>
      
        <div className='flex gap-x-10 w-[85%] mx-auto max-lg:gap-y-8 justify-center max-lg:flex-col max-lg:items-center'>
            <section className="max-w-[569px] w-full flex justify-between flex-col">
            <div className='py-10 bg-[#F7F7F7] px-8  rounded-[20px] mb-5 relative'>
              <img src="images/idea-3d.png" alt="idea" className="absolute right-[5%] top-[5%]" />
            <p className='max-md:text-xs text-xl mb-3 font-medium'>Who said data must be messy?</p>
            <p className='md:text-base  text-sm max-md:mt-[6px] '>As your business starts to grow you need a system that can help in accelerating its growth</p>
            </div>
            <div className='bg-[#F7F7F7] rounded-[20px] pt-[72px] pb-[52px] pl-10'>
            <h1 className='md:text-[32px] text-2xl font-semibold mb-5'>Without Bime</h1>
                <ul className="md:text-base md:gap-y-3 gap-4 list-inside list-disc">
                    <li>Fraustrating messy data takes forever to get refined</li>
                    <li>Scaling seem impossible at the absence of accurate data</li>
                    <li>Delay in service delivery to customers</li>
                </ul>
            </div>
              
               
            </section>
            <section className="rounded-[20px] max-w-[569px] pt-8 w-full border-[2px] border-[#F5F5F5] px-10 pb-12">
              <img src="images/free-bar.png" alt="bar" />
  <h1 className="text-3xl font-semibold mb-5">With Bime</h1>
  <li className="md:text-base list-inside list-disc">
    Your business finances are properly managed and crystal clear, giving you more time to grow and potentially scale your business
  </li>
  <div className="flex text-[#329ACF] font-semibold gap-x-[10px] mt-6 hover:gap-x-4 cursor-pointer transition items-center">
              <p>Get started</p>
              <img src= "/images/arrow_forward.png" alt="" width={18}/>
            </div>
</section>

        </div>

        <div className='md:w-[35%] w-[60%] mx-auto text-center md:mt-28 mt-14'>
         
         <p className='text-[#0E0F0F99] text-opacity-60 uppercase max-md:text-xs text-xl mb-3 font-medium'>Smart Business Plartform </p>
          <p className='md:text-2xl font-semibold text-sm max-md:mt-[6px]'>Switch to the Bime side, where you never have to worry about missing deadlines</p>
         </div>
    </div>
  )
}