import slack from '../../src/assets/slack.png'
import amazon from '../../src/assets/amazon.png'
import woocommerce from '../../src/assets/woocommerce.png'
import meundies from '../../src/assets/meundies.png'
import sitepoint from '../../src/assets/sitepoint.png'
import Marquee from 'react-fast-marquee'


const Partner = () => {
  const logos = [slack, amazon, woocommerce, meundies, sitepoint];

  return (
    <div className="w-full container mx-auto py-12 md:py-16 overflow-hidden flex  flex-col sm:flex-row sm:items-center items-start ">
      <div className="w-[300px] shrink-0 px-8 border-l-4 border-lime-500 bg-white py-2 z-10 text-xl font-semibold sm:text-left  mb-8 sm:mb-0">
        Proud partner at <br /> Battle ground Segment
      </div>
      <Marquee pauseOnHover={true} speed={50} className='space-x-10'>
      <div className="flex animate-marquee whitespace-nowrap">
        {logos.map((logo, index) => (
          <img
            key={index}
            src={logo}
            alt={`Company Logo ${index + 1}`}
            className="mx-12 h-8 w-36 object-contain grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all"
          />
        ))}
        {/* Duplicate logos for seamless loop */}
        {logos.map((logo, index) => (
          <img
            key={`duplicate-${index}`}
            src={logo}
            alt={`Company Logo ${index + 1}`}
            className="mx-12 h-8 w-36 object-contain grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all"
          />
        ))}
      </div>
      </Marquee>
    </div>
  );
};

export default Partner; 