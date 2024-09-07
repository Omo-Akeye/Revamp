
import Image from "next/image";
import Link from 'next/link'


export default function SignUp() {
  return (
    <div>
      <nav  className="flex justify-between mt-[52px] w-[90%] mx-auto" >
        <Link href={'/'} className='text-2xl font-extrabold text-bime-blue'>Bime</Link>
        <div className="flex items-center gap-x-6">
            <p className="text-sm">Don’t have an account?</p>
            <Link href={'/signup'} className='border-[0.4px] border-bime-blue py-[10px] px-6 rounded-[10px] text-bime-blue'>
                Create account 
            </Link>
        </div>
        </nav>

<div className="grid items-center grid-cols-2 w-[90%] mx-auto">
    <div className="relative"> 
        <img src='/images/Group 28.png' alt="green" className="absolute left-[16%] top-[5%] z-10"  />
        <img src='/images/Group 29.png' alt="pink" className="absolute right-[15%] bottom-[6%] z-20" />
        <img src='/images/Group 31.svg' alt="light" className="absolute top-[40%] left-[10%]" />
        <img src= '/images/Group 30.svg' alt="stats" className="absolute right-[10%] top-[20%]" />
        <img src='/images/Ellipse 34.png' alt="ellipse" className="absolute right-[28%] top-[18%] z-0" width={180} />
        <img src='/images/businessman-sitting-on-office-chair-2873063-2384315@0 1.png' alt="" className="relative z-10" />
    </div>
      <div className="w-full max-w-[545px]">
        <h2 className="mb-6 text-gray-500 text-[28px] w-[80%]"><span className="font-semibold text-black">Sign up</span> for free and take your business higher</h2>
        <form className="flex flex-col gap-y-9">
          

            <input
            placeholder="Business or Organization Name *"
              type="text"
              className="block w-full px-6 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-bime-blue focus:border-bime-blue sm:text-sm"
            />
       
         
         
            <input
            placeholder="Address *"
              type="text"
              className="block w-full px-6 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-bime-blue focus:border-bime-blue sm:text-sm"
            />
            <input
            placeholder="Email *"
              type="email"
              className="block w-full px-6 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-bime-blue focus:border-bime-blue sm:text-sm"
            />

            <input
            placeholder="Phone Number"
              type="text"
              className="block w-full px-6 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-bime-blue focus:border-bime-blue sm:text-sm"
            />
        
          <button
            type="submit"
            className="w-full px-4 py-3 text-white rounded-md bg-bime-blue hover:bg-opacity-90"
          >
            Create account
          </button>
        </form>
        <div className="mt-4 text-center text-gray-500">
          Have an account? <Link href='/login' className="font-semibold text-bime-blue hover:underline">Log in</Link>
        </div>
      </div>
    </div>
        
    </div>
  
  )
}