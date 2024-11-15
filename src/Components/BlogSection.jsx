import React from 'react';
import blogimage1 from '../assets/Images/blogimage1.png';
import blogimage2 from '../assets/Images/blogimage2.png';
import blogimage3 from '../assets/Images/blogimage3.png';
import blogimage4 from '../assets/Images/blogimage4.png';
import blogimage5 from '../assets/Images/blogimage5.png';

function BlogSection() {
    return (
        <section className="blogsection flex flex-col gap-[36px] justify-center items-center px-[10%] py-[2%] w-full bg-gray">
          <div className="heading flex justify-between w-full items-center">
                    <div className="info">
                        <p className="secondaryheading text-[white] font-[400] text-[32px]">Our Blog</p>
                        <p className="primaryheading text-[white] font-lexend font-[200] text-[72px]">Stories that Present Us</p>
                    </div>
                </div>


                <div className="grid grid-rows-6 grid-cols-3 gap-4 h-screen p-4 w-full">
                    <div
                        className="row-span-6 col-span-1 bg-cover bg-center rounded-lg p-4 text-[#FFF]"
                        style={{ backgroundImage: `url(${blogimage1})` }}
                    >

                    </div>

                    <div
                        className="row-span-2 col-span-1 bg-cover bg-center rounded-lg p-4 text-[#FFF]"
                        style={{ backgroundImage: `url(${blogimage3})` }}
                    >

                    </div>

                    <div
                        className="row-span-4 col-span-1 bg-cover bg-center rounded-lg p-4 text-[#FFF]"
                        style={{ backgroundImage: `url(${blogimage5})` }}
                    >

                    </div>

                    <div
                        className="row-span-4 col-span-1 bg-cover bg-center rounded-lg p-4 text-[#FFF]"
                        style={{ backgroundImage: `url(${blogimage4})` }}
                    >

                    </div>

                    <div
                        className="row-span-2 col-span-1 bg-cover bg-center rounded-lg p-4 text-[#FFF]"
                        style={{ backgroundImage: `url(${blogimage2})` }}
                    >

                    </div>
                </div>
    
        </section>
    );
}

export default BlogSection;
