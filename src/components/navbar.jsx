
import { HambergerMenu, CloseCircle } from 'iconsax-react'
import logo from '../assets/image/logo.png'
import { useState } from 'react'


const Navbar = () => {
  const [click, setClick] = useState(false);  

  


  return (
    <header className='bg-white shadow-md flex justify-between items-center z-50 py-4 md:px-10 px-6  font-[eudoxus sans] w-full fixed left-0 right-0'>
          <a href='#hero' className="text-[26px] font-[Audiowide] cursor-pointer font-bold"><p className="text-[#096DA7] hover:text-[#07E9E9]">CTX-<span className="text-[#07E9E9] hover:text-[#355d99]">I</span>ON</p>
          </a>
            <ul className="md:flex hidden gap-x-[32px] text-[18px] font-semibold leading-5 items-center text-[#65676f] cursor-pointer mt-2">
              
              <li>
                <a href="#about" className="text-[#65676f] hover:text-[#096DA7]">About</a>
              </li>
              <li>
                <a href="#what-we-do" className="text-[#65676f] hover:text-[#096DA7]">What We Do</a>
              </li>
              <li>
                <a href="#services" className="text-[#65676f] hover:text-[#096DA7]">Services</a>
              </li>
              <li>
                <a href="#testimonials" className="text-[#65676f] hover:text-[#096DA7]">Testimonials</a>
              </li>
            </ul>
          <button className="bg-[#096da7] rounded-[28px] px-3 py-1.5 hover:bg-[#f3faff] hover:text-sky-500 text-base font-medium text-white md:flex hidden ">
            Contact Us
          </button>
        
        <div className='md:hidden block'>
          {
            click ? 
            <button onClick={() => setClick(false)}>
            <CloseCircle size="26" color="#096DA7" />
              </button> :
              <button onClick={() => setClick(true)}>
            <HambergerMenu size="26" color="#096DA7" />
          </button>
          }
        </div>
        
        {click && <div className="lg:hidden  block absolute top-16 w-full left-0 bg-[#096DA7] transition text-white">
            <ul className="text-center text-[24px] p-16 h-sc">
                <li className="hover:underline">About</li>

              <li className="hover:underline">What We do</li>

              <li className="hover:underline">Our Services</li>

              <li className=" hover:underline">Contact Us</li>
            </ul>
          </div>}
      
    </header>
  )
}


export default Navbar