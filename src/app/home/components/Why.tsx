import lonely from '../../../../public/images/lonely-3d-render-icon-illustration-png 1.png'
import growth from '../../../../public/images/growth-graph-banner.png'
import Image from 'next/image'
export default function Why() {
  return (
    <div className='md:mt-24 mt-14'>
       
       <div className='md:w-[40%] w-[60%] mx-auto text-center md:mb-24 mb-[72px]'>
         
       <p className='text-[#0E0F0F99] text-opacity-60 uppercase max-md:text-xs text-xl mb-3 font-medium'>WHO SAID DATA MUST BE MESSY?</p>
        <p className='md:text-2xl font-semibold text-sm max-md:mt-[6px]'>As your business starts to grow you need a system that can help in accelerating its growth</p>
       </div>
        <div className='flex gap-x-10 w-[85%] mx-auto max-lg:gap-y-8 justify-center max-lg:flex-col max-lg:items-center'>
            <section className="bg-[#F7F7F7] rounded-[20px]   max-w-[569px] md:pl-12 pl-[27px] md:pr-20 pr-5 md:py-14 py-10 w-full">
                <h1 className='md:text-3xl text-2xl font-semibold mb-5'>Without Bime</h1>
                <ul className="md:text-xl md:gap-y-3 gap-4 list-inside list-disc">
                    <li>Fraustrating messy data takes forever to get refined</li>
                    <li>Scaling seem impossible at the absence of accurate data</li>
                    <li>Delay in service delivery to customers</li>
                </ul>
                <div className='w-full mt-11 justify-end flex'>
                <Image src={lonely} alt="img"  />
                </div>
               
            </section>
            <section className="bg-bime-blue rounded-[20px] max-w-[569px] md:pl-12 pl-[27px]  pr-10 md:py-14 py-10 w-full">
  <h1 className="text-3xl font-semibold mb-5">With Bime</h1>
  <li className="md:text-xl list-inside list-disc">
    Your business finances are properly managed and crystal clear, giving you more time to grow and potentially scale your business
  </li>
  
  <div className="inline-flex max-md:flex-col md:items-end items-start gap-4 mt-5">
    <Image src={growth} alt="growth" />

    <button className="md:px-10 px-6 text-sm font-medium bg-white py-[10px] rounded-[10px] inline-block">
      Get started
    </button>
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