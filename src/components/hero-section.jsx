import { Convertshape } from 'iconsax-react'
import hero from './hero-section'
import landing from '../assets/image/landing-frame.jpg'

const Hero = () => {

  return(
    <div id='hero' className=" font-[eudoxus sans] sm:w-full md:w-full flex flex-col gap-y-10  items-center md:px-10 px-6 pt-[71px]">
     <h1 className="text-center lg:text-6xl sm:text-5xl text-[64px] font-bold mt-8">Precision, Accuracy, Discovery</h1>
    <p className="text-[#65676f] leading-[36px] text-[20px] font-[400] text-center pt-3 w-[50%]">Wecome to CTX-ION, where precision meets excellence in every analysis. We are a leading research focused laboratory dedicated to providing our customers quality data from every sample</p>
    <button className="font-bold text-base leading-[19.2px] border-[1px] border-[#096DA7] hover:bg-[#096DA7] hover:text-[#f3faff] px-6 py-3 rounded-[28px] w-fit">Learn more</button>
          
     

      
    <img src= {landing} className='mb-10' /> 
    </div>
  )
}

export default Hero