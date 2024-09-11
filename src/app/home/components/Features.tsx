
import Review from './Review'
import ImageSlider from './Slider'

export default function Features() {
  return (
    <div>
       <section className="md:w-[50%] w-[60%] mx-auto text-center mt-28 mb-20">
       <h1 className="md:text-2xl text-sm font-semibold mt-3">
       Join thousands of businesses that are leveraging 
technology to keep track of their data and deliver
better services to their customers 
       </h1>
       </section>



       <ImageSlider/>

       <section className="md:w-[50%] w-[60%] mx-auto text-center mt-24 mb-20">
       <p className="md:text-xl text-xs text-[#0E0F0F99] text-opacity-60 uppercase max-md:mb-[6px] mb-3">BUILT TO IMPRESS</p>
       <h1 className="md:text-2xl text-sm font-semibold">Highly rated by global businesses</h1>
       </section>

       <Review/>
       <h1 className='text-2xl font-semibold text-center mb-14 mt-28'>Choose from the best prices in the market</h1>
    </div>
  )
}