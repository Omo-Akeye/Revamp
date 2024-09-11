
import Link from 'next/link'
// import gift from '/images/gift-box-4027302-3328590 2.svg'
// import hamburger from '../assets/Hamburger Menu.svg'

export default function Nav() {
  return (
    <nav className="flex justify-between md:mt-[52px] mt-9 w-[90%] mx-auto items-center">
        <Link href='/' className='text-2xl font-extrabold text-bime-blue'>Bime</Link>


        <ul className="flex items-center text-lg text-[#282829] gap-x-7 max-lg:hidden">
        <li className='flex items-center gap-x-[6px]'>Discount offer <span className="bg-[#CCEEFF] text-bime-blue px-2 py-1 rounded-md flex text-[10px] font-bold"><img src='/images/gift-box-4027302-3328590 2.svg' alt="gift" />30% off</span></li>
            <li>Pricing</li>
            <li>About us</li>
        </ul>

        <ul className="flex items-center text-sm font-semibold gap-7 max-lg:hidden">
          
            <li className="flex gap-3 font-semibold">
                <Link href='/login' className=" border-[0.3px]  px-8 py-[18px] rounded-[10px] text-[#282829]">
                Log in
                </Link>
                <Link href='/'  className="px-[38px] py-[18px] text-white rounded-[10px] bg-[#329ACF] hover:bg-bime-blue">
                Get started
                </Link>
            </li>
        </ul>

        <div className='lg:hidden cursor-pointer'>
          <img src='/images/Hamburger Menu.svg' alt="gift" />
        </div>
    </nav>
  )
}