import { useState } from 'react';
import pexpimgl1 from '../assets/Images/pexpimgl1.png';
import pexpimgr1 from '../assets/Images/Productimage2.png';
import pexpimgl2 from '../assets/Images/pexpimgl2.png';
import pexpimgr2 from '../assets/Images/Productimage1.png';
import pexpimgl3 from '../assets/Images/pexpimgl3.png';
import pexpimgr3 from '../assets/Images/Productimage3.png';
import arrow from '../assets/Icons/arrowleft.svg';
import arrow45 from '../assets/Icons/arrow45.svg';

function ProductExperienceSection() {
  const Productnames = ["Brightening", "Rejuvenating", "Detoxifying"];
  const Productprices = [499, 529, 239];
  const Productimageleft = [pexpimgl1,pexpimgl2,pexpimgl3];
  const Productimageright = [pexpimgr1,pexpimgr2,pexpimgr3];

  const [index, setIndex] = useState(0);

  const handleLeftButton = () => {
    const newIndex = index === 0 ? Productnames.length - 1 : index - 1;
    setIndex(newIndex);
  };

  const handleRightButton = () => {
    const newIndex = index === Productnames.length - 1 ? 0 : index + 1;
    setIndex(newIndex);
  };

  return (
    <>
      <section className="productsection flex flex-col gap-[36px] justify-center items-center px-[10%] py-[2%] w-full">
        <div className="heading flex justify-between w-full items-center gap-[4px]">
          <div className="info">
            <p className="secondaryheading text-gray font-[400] text-[32px]">The Product Experience</p>
            <p className="primaryheading text-gray font-lexend font-[200] text-[72px]">Soft, Nourish & Tender</p>
          </div>
        </div>

        <div className="pexpcards w-full flex gap-[24px]">
  
          <div className="card1 w-[50%] h-[582px] overflow-hidden rounded-[8px]">
            <img src={Productimageleft[index]} alt="Product Experience Left" className="w-full h-full object-cover" />
          </div>

    
          <div className="card2 w-[50%] h-[582px] relative overflow-hidden rounded-[8px]">
            <div className="left-[24px] top-[24px] absolute name flex flex-col gap-0 justify-start items-start">
              <h3 className='text-gray font-[200] text-[20px]'>Vaseline®</h3>
              <h1 className='text-secondary font-bold text-[28px]'>{Productnames[index]}</h1>
            </div>

            <div className="bg-[white] bottom-[24px] left-[24px] absolute price px-[12px] py-[4px] border-gray border-[2px] rounded-full flex gap-[4px] justify-center items-center">
              <p className='text-gray'>₹ {Productprices[index]}</p>
              <img src={arrow45} alt="" className="arrow" />
            </div>

          
            <button className='absolute top-[42%] left-[24px] w-[72px] h-[72px] bg-[white] rounded-full flex justify-center items-center' onClick={handleLeftButton}>
              <img src={arrow} alt="Left Arrow" />
            </button>
            <img src={Productimageright[index]} alt="Product Experience Right" className="w-full h-full object-cover" />
            <button className='absolute top-[42%] rotate-180 right-[24px] w-[72px] h-[72px] bg-[white] rounded-full flex justify-center items-center' onClick={handleRightButton}>
              <img src={arrow} alt="Right Arrow" />
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

export default ProductExperienceSection;
