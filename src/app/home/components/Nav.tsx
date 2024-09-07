
import Link from 'next/link'
// import gift from '/images/gift-box-4027302-3328590 2.svg'
// import hamburger from '../assets/Hamburger Menu.svg'

export default function Nav() {
  return (
    <nav className="flex justify-between md:mt-[52px] mt-9 w-[90%] mx-auto">
        <Link href='/' className='text-2xl font-extrabold text-bime-blue'>Bime</Link>

        <ul className="flex items-center text-sm font-semibold text-gray-400 gap-7 max-md:hidden">
            <li className='flex items-center gap-x-[6px]'>Discount offer <span className="bg-[#CCEEFF] text-bime-blue px-2 py-1 rounded-md flex text-[10px] font-bold"><img src='/images/gift-box-4027302-3328590 2.svg' alt="gift" />30% off</span></li>
            <li>Pricing</li>
            <li>About us</li>
            <li className="flex gap-3 font-bold">
                <Link href='/login' className="text-bime-blue border-[0.3px] border-bime-blue px-8 py-2 rounded-[10px]">
                Log in
                </Link>
                <Link href='/'  className="px-10 py-2 text-white rounded-[10px] bg-bime-blue hover:bg-[#329ACF]">
                Get started
                </Link>
            </li>
        </ul>

        <div className='md:hidden cursor-pointer'>
          <img src='/images/Hamburger Menu.svg' alt="gift" />
        </div>
    </nav>
  )
}