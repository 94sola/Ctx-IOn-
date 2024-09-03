import whatwedo from './whatwe'
import research from '../assets/image/research.png'
import analytical from '../assets/image/Analytical.png'
import testing from '../assets/image/testing.png'


const Whatwe = () => {

  return(
   <div id="what-we-do" className="min-h-screen bg-[#096DA7] ">
    <div className="px-4 py-8 md:px-10 md:py-12 lg:px-[62px] lg:py-[64px]">
      <h2 className="text-3xl md:text-4xl lg:text-[64px] font-bold text-white m-4 md:m-8">What We Do</h2>

    <div className="flex flex-col md:flex-row flex-wrap gap-4 justify-center items-center">
      
      <div className="bg-white rounded-[44px] p-6 w-full max-w-[410px] flex flex-col items-center">
        <div className="w-[70px] h-[81px] bg-[#f3faff] rounded-full flex items-center justify-center mb-4">
          <img src={research} alt="Research Icon" className="w-[40px] h-[40px]" />
        </div>
        <h5 className="text-black font-bold text-lg md:text-[22px] text-center mb-4">Research Support</h5>
        <p className="font-normal text-gray-500 text-center leading-6 md:leading-8">
          CTX-ION is primarily focused on bridging the educational gap in Nigerian academic institutions by providing industry standard analytical lab services to scientific researchers.
        </p>
      </div>

      <div className="bg-white rounded-[44px] p-6 w-full max-w-[420px] flex flex-col items-center">
        <div className="w-[70px] h-[81px] bg-[#f3faff] rounded-full flex items-center justify-center mb-4">
          <img src={analytical} alt="Analytical Icon" className="w-[40px] h-[40px]" />
        </div>
        <h5 className="text-black font-bold text-lg md:text-[22px] text-center mb-4">Analytical Testing Services</h5>
        <p className="font-normal text-gray-500 text-center leading-6 md:leading-8">
          We also collaborate with other companies in offering analytical testing services in the aspects of regulatory product testing and environmental compliance monitoring.
        </p>
      </div>

      
      <div className="bg-white rounded-[44px] p-6 w-full max-w-[420px] flex flex-col items-center">
        <div className="w-[70px] h-[81px] bg-[#f3faff] rounded-full flex items-center justify-center mb-4">
          <img src={testing} alt="Testing Icon" className="w-[40px] h-[40px]" />
        </div>
        <h5 className="text-black font-bold text-lg md:text-[22px] text-center mb-4">Third Party Testing</h5>
        <p className="font-normal text-gray-500 text-center leading-6 md:leading-8">
          We also collaborate with other companies in offering analytical testing services in the aspects of regulatory product testing and environmental compliance monitoring.
        </p>
      </div>
    </div>
  </div>
</div>



  )
}

export default Whatwe
