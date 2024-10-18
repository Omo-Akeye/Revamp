import Link from "next/link";



export default function Login() {
  return (
    <div className="max-w-[1440px] mx-auto"> 
        <nav  className="flex justify-between mt-[52px] md:w-[90%] w-[80%] mx-auto" >
        <Link href="/" className="text-2xl font-extrabold text-bime-blue w-[231px]">
        Bime
      </Link>
        <div className="flex items-center gap-x-6 max-lg:hidden">
            <p className="text-xs">Don’t have an account?</p>
            <Link href='/signup' className='border-[0.4px] border-bime-blue py-[10px] px-6 rounded-[10px] text-bime-blue'>
                Create account 
            </Link>
         
        </div>
        <div className='lg:hidden cursor-pointer'>
          <img src='/images/Hamburger Menu.svg' alt="hamburger menu" />
        </div>
        </nav>
        <div className="flex items-center justify-center max-[340px]:h-full h-[80vh]">
        <div className="md:w-full w-[80%] mx-auto max-w-lg max-[330px]:mt-7">
        <h2 className="mb-10 md:text-2xl text-xl md:text-center text-gray-500  md:w-[50%] w-[70%] max-[340px]:w-[80%] md:mx-auto"> <span className="font-semibold text-black">Log in </span>with your details to continue</h2>
        <form >
         
            <input
             placeholder="Business/Staff ID *"
              type="text"
              className="block w-full px-3 py-[10px]  border border-gray-400 rounded-md shadow-sm focus:outline-none focus:ring-bime-blue focus:border-bime-blue sm:text-sm"
            />
       
        
            <input
            placeholder="Password *"
              type="password"
              className="block w-full px-3 py-[10px] md:mt-10 mt-[30px] border border-gray-400 rounded-md shadow-sm focus:outline-none focus:ring-bime-blue focus:border-bime-blue sm:text-sm"
            />
          <div className="flex items-center justify-end mt-[11px] mb-[22px]">
            <a href="#" className="text-sm text-bime-blue hover:underline font-semibold">Forgot password?</a>
          </div>
          <button
            type="submit"
            className="w-full px-[18px] py-3 font-semibold text-white bg-[#329ACF] rounded-md hover:opacity-90"
          >
            Log in
          </button>
        </form>
        <div className="mt-5 text-center">
          Don’t have an account? <Link href='/signup'   className="font-medium text-bime-blue hover:underline">Create account</Link>
        </div>
      </div>
    </div>

    </div>

  )
}