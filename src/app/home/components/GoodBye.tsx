

export default function GoodBye() {
  return (
    <>
     <div className="bg-[#282829] w-full rounded-[40px] text-white items-center md:py-36 py-16 mt-28 text-center">
     
         <div className="md:w-[60%] mx-auto w-[70%]">
             
         <h1 className='md:text-5xl text-2xl font-semibold text-white'><span className="font-rage md:text-[89px] text-4xl">Say goodbye</span> to messy business</h1>
            <p className='md:text-xl text-white my-9 md:w-[50%] mx-auto'>Bime features are built to assist you in managing your business efficiently.</p>
            <button className="px-10 py-[10px] text-white rounded-[10px] bg-[#329ACF] transition hover:bg-[#38BCFF]">
             Get started
         </button>
         </div>

    </div>

    <footer className='w-full px-24 py-20 bg-black -mt-11 flex justify-between max-md:flex-col'>
        <h1 className='text-6xl font-bold text-[#D9D9D9]'>Bime</h1>
        <div className="flex gap-x-2 items-center">
          <img src="/images/indicator.png" alt="indicator" className="w-6 h-6"/>
        <h2 className="text-white font-medium text-xl">All services are operational</h2>
        </div>
       
    </footer>
    </>
   
  )
}