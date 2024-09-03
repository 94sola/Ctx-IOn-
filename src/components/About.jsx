import about from './About'
import picture from '../assets/image/about-frame.jpg'
import lasepa from '../assets/image/lasepa-logo.png'
import son from '../assets/image/SON-logo.png'
import nirma from '../assets/image/NIRMA logo.png'
import labwox from '../assets/image/labwox_logo.png'
import scientific from '../assets/image/ls_scientific logo.png'
import burea from '../assets/image/bureau_logo.png'

const About = () => {

  return (
    <div id='about' className="bg-[#fafafa] font-[eudoxus sans] px-6 md:px-12 py-8">
      
      <h2 className="font-bold text-[36px] sm:text-[48px] md:text-[64px] pt-6 text-start text-slate-900 pl-4 sm:pl-8 md:pl-[116px]">About Us</h2>
      
      
      <div className="flex flex-col sm:flex-row gap-5 md:gap-6 py-6 items-center">
        
        <div className="flex flex-col justify-start items-start px-4 sm:px-8 md:pl-[116px] space-y-6 max-w-full sm:max-w-[50%]">
        
          <h4 className="text-[22px] font-bold sm:text-[24px] md:text-[26px] text-start leading-[31.2px] text-black m-4">
            Who We Are
          </h4>
          <p className="text-[15px] sm:text-[17px] text-start font-normal leading-6 max-w-[463px] text-[#65676f]">
            CTX-ION Analytics is a privately owned provider of chemical testing services. Established in 2015 and based in Ikeja, Lagos, we have built strong and trusted customer relationships within our target domain.
          </p>

          <h4 className="text-[22px] font-bold sm:text-[24px] md:text-[26px] text-start leading-[31.2px] text-black m-4">
            Our Core Values
          </h4>
          <p className="text-[15px] sm:text-[17px] text-start font-normal leading-6 max-w-[463px] text-[#65676f]">
            Quality and timeliness are the hallmarks of our operation. Our team members are committed to the same goals, producing excellent results, and delivering value to the customer. Continuous improvement is our watchword, and we spare no efforts in staying at the cutting edge of analytical science.
          </p>
        </div>

        <div className="w-full sm:w-[50%] flex justify-center items-center px-4 sm:px-0">
          <div className="rounded-[28px] w-full max-w-[510px] overflow-hidden">
            <img src={picture} alt="About Us" className="w-full h-auto object-cover" />
          </div>
        </div>
      </div>

      
      <div className="text-center text-[24px] sm:text-[28px] md:text-[32px] font-medium py-8">
        <h2>These companies trust us with their analytical testing requirements.</h2>
      </div>

      
      <div className="flex flex-wrap justify-center gap-4 md:gap-8 px-4 md:px-16 py-4">
        <img src={lasepa} alt="Lasepa" className="h-auto" />
        <img src={son} alt="Son" className="w-[80px] h-auto md:w-[120px]" />
        <img src={nirma} alt="Nirma" className="w-[80px] h-auto md:w-[120px]" />
        <img src={labwox} alt="Labwox" className="w-[80px] h-auto md:w-[120px]" />
        <img src={scientific} alt="Scientific" className="w-[80px] h-auto md:w-[120px]" />
        <img src={burea} alt="Burea" className="w-[80px] h-auto md:w-[120px]" />
      </div>
    </div>
  )
}

export default About
