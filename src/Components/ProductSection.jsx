import React from 'react'
import PrimaryButton from './PrimaryButton'
import ProductCard from './ProductCard'
import pimg1 from '../assets/Images/Productimage1.png'
import pimg2 from '../assets/Images/Productimage2.png'
import pimg3 from '../assets/Images/Productimage3.png'

function ProductSection() {
    return (
        <>
            <section className="productsection flex flex-col gap-[36px] justify-center items-center px-[10%] py-[2%] w-full">
                <div className="heading flex justify-between w-full items-center gap-[4px]">
                    <div className="info">
                        <p className="secondaryheading text-gray font-[400] text-[32px]">Our Catalogue</p>
                        <p className="primaryheading text-gray font-lexend font-[200] text-[72px]">Our SkinCare Products</p>
                    </div>
                    <PrimaryButton content={"View All"}></PrimaryButton>
                </div>

                <div className="cardgrid grid grid-cols-3 gap-[24px] w-full">
                    <ProductCard pname={"Rejuvenating"} pprice={" 369"} pimg={pimg1}></ProductCard>
                    <ProductCard pname={"Brightening"} pprice={" 599"} pimg={pimg2}></ProductCard>
                    <ProductCard pname={"Detoxifying"} pprice={" 229"} pimg={pimg3}></ProductCard>
                </div>

            
            </section>
        </>
    )
}

export default ProductSection