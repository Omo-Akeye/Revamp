import Link from "next/link";



export default function Login() {
  return (
    <div className=""> 
        <nav  className="flex justify-between mt-[52px] w-[90%] mx-auto" >
        <Link href='/' className='text-2xl font-extrabold text-bime-blue'>Bime</Link>
        <div className="flex items-center gap-x-6">
            <p className="text-xs">Don’t have an account?</p>
            <Link href='/signup' className='border-[0.4px] border-bime-blue py-[10px] px-6 rounded-[10px] text-bime-blue'>
                Create account 
            </Link>
        </div>
        </nav>
        <div className="flex items-center justify-center h-[80vh]">
        <div className="w-full max-w-lg">
        <h2 className="mb-10 text-2xl text-center text-gray-500 w-[50%] mx-auto"> <span className="font-medium text-black">Log in </span>with your details to continue</h2>
        <form >
         
            <input
             placeholder="Business/Staff ID *"
              type="text"
              className="block w-full px-3 py-[10px]  border border-gray-400 rounded-md shadow-sm focus:outline-none focus:ring-bime-blue focus:border-bime-blue sm:text-sm"
            />
       
        
            <input
            placeholder="Password *"
              type="password"
              className="block w-full px-3 py-[10px] mt-10 border border-gray-400 rounded-md shadow-sm focus:outline-none focus:ring-bime-blue focus:border-bime-blue sm:text-sm"
            />
          <div className="flex items-center justify-end">
            <a href="#" className="text-sm text-bime-blue hover:underline">Forgot password?</a>
          </div>
          <button
            type="submit"
            className="w-full px-[18px] py-2 font-medium text-white bg-bime-blue rounded-md hover:opacity-90"
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