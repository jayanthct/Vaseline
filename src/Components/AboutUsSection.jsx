import React from 'react'
import PrimaryButton from './PrimaryButton'

function AboutUsSection() {
    return (
        <>
            <section className="aboutus flex flex-col bg-gray gap-[36px] justify-end items-end px-[10%] py-[2%] w-full">
                <div className="heading flex justify-between w-full items-center gap-[4px]">
                    <div className="info">
                        <p className="secondaryheading text-[white] font-[400] text-[32px]">Our Catalogue</p>
                        <p className="primaryheading text-[white] font-lexend font-[200] text-[72px]">The Power Of Nature For</p>
                        <p className="primaryheading text-[white] font-italianno text-[98px] -mt-8">Glowing Skin</p>

                    </div>
                </div>
                <p className="secondaryheading text-[white] font-[300] text-[28px] text-right">At Vaseline, we believe that true beauty begins with healthy, radiant skin. Our mission is to create skincare products that not only enhance your natural beauty but also nurture and protect your skin with the finest ingredients. Every product we craft is a blend of nature’s best with cutting-edge science, designed to bring out the best in your skin. Join us on a journey to discover the transformative power of care and nourishment—because your skin deserves nothing less.</p>
                <PrimaryButton content={"View All"}></PrimaryButton>

            </section>

        </>
    )
}

export default AboutUsSection