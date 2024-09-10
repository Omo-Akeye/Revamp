
import ImageSlider from './Slider'

export default function Features() {
  return (
    <div>
       <section className="md:w-[50%] w-[60%] mx-auto text-center mt-28 mb-20">
       <p className="md:text-xl text-xs text-gray-400 uppercase ">Productive features</p>
       <h1 className="md:text-2xl text-sm font-semibold mt-3 md:px-[20%]">Bime features are thoughtfully integrated into your business</h1>
       </section>



       <ImageSlider/>

       <section className="md:w-[50%] w-[60%] mx-auto text-center mt-24 mb-20">
       <p className="md:text-xl text-xs text-gray-400 uppercase max-md:mb-[6px] mb-3">Pricing that’s small business friendly</p>
       <h1 className="md:text-2xl text-sm font-semibold">Our pricing has emotions. We have a free forever plan and premium plan feels every moment in your business. </h1>
       </section>
    </div>
  )
}