import lonely from '../../../../public/images/lonely-3d-render-icon-illustration-png 1.png'
import growth from '../../../../public/images/growth-graph-banner-in-hand-4512579-3738698 2 (4).png'
import Image from 'next/image'
export default function Why() {
  return (
    <div className='md:mt-24 mt-14'>
       
       <div className='w-[60%] mx-auto text-center mb-24'>
         
       <p className='text-gray-400 uppercase max-md:text-xs text-xl mb-3'>Why you should use bime for your business</p>
        <p className='md:text-2xl font-semibold text-sm max-md:mt-[6px]'>As your business starts to grow you need a system that can help in accelerating its growth</p>
       </div>
        <div className='grid md:grid-cols-2 gap-10 w-[85%] mx-auto max-md:gap-y-8'>
            <section className="bg-[#F7F7F7] rounded-[20px] md:py-14 py-11 md:pl-14 pl-7 md:pr-20 pr-14 max-w-[569px]">
                <h1 className='md:text-3xl text-2xl font-semibold mb-5'>Without Bime</h1>
                <ul className="list-disc md:text-xl md:gap-y-3 gap-4">
                    <li>You can’t see the total revenue generated daily</li>
                    <li>To determine the growth of your business monthly, quarterly or for the whole year is not possible</li>
                </ul>
                <div className='w-full flex justify-end mt-10'>
                <Image src={lonely} alt="img"  />
                </div>
               
            </section>
            <section className="bg-bime-blue rounded-[20px] md:pl-11 pl-6  md:py-14 py-11 max-w-[569px] max-md:pr-1">
                <h1 className='text-3xl font-semibold mb-5'>With Bime</h1>
                <p className='text-xl md:pr-28'>One - App for Businesses to Get Started and Scale Fast and Easily</p>
               <div className='flex max-md:flex-col md:items-end  mr-8 md:justify-between items-start'>
               <Image src={growth} alt="growth" width={280}/>
               <span className='flex justify-end'>
               <button className='md:px-10 px-6 text-sm font-medium bg-white py-[10px] rounded-[10px] max-w-40'>Get started</button>
               </span>
               </div>
            </section>
        </div>

        <div className='w-[60%] mx-auto text-center md:mt-28 mt-14'>
         
         <p className='text-gray-400 uppercase max-md:text-xs text-xl mb-3'>Smart Business Plartform </p>
          <p className='md:text-2xl font-semibold text-sm max-md:mt-[6px]'>Powered by innovative technology, Fully Secured. </p>
         </div>
    </div>
  )
}