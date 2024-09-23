
import Review from './Review'
import ImageSlider from './Slider'

export default function Features() {
  return (
    <div>
       <section className="md:w-[50%] w-[60%] mx-auto text-center md:mt-28 mt-14 md:mb-20 mb-14">
       <h1 className="md:text-2xl text-sm font-semibold mt-3">
       Join thousands of businesses that are leveraging 
technology to keep track of their data and deliver
better services to their customers 
       </h1>
       </section>



       <ImageSlider/>

       <section className="md:w-[50%] w-[60%] mx-auto text-center md:mt-24 md:mb-20 mb-6">
       <p className="md:text-xl text-xs text-[#0E0F0F99] text-opacity-60 uppercase max-md:mb-[6px] mb-3 font-medium">BUILT TO IMPRESS</p>
       <h1 className="md:text-2xl text-sm font-semibold">Highly rated by global businesses</h1>
       </section>

       <Review/>
       <h1 className='text-2xl font-semibold text-center md:mb-14 md:mt-28 mt-16 mb-9 max-md:w-[50%] mx-auto max-md:text-sm'>Choose from the best prices in the market</h1>
    </div>
  )
}