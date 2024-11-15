import React from 'react';
import FeatureAccordian from './FeatureAccordian';

function FeatureSection() {
    return (
        <>
            <section className="feature h-full flex flex-col gap-[36px] justify-center items-center px-[10%] py-[2%] w-full">
                <div className="heading flex justify-between w-full items-center gap-[4px]">
                    <div className="info">
                        <p className="secondaryheading text-gray font-[400] text-[32px]">Our Features</p>
                        <p className="primaryheading text-gray font-lexend font-[200] text-[72px] leading-tight">
                            We Provide <span className="font-italianno text-primary">High Quality</span><br />
                            Skincare Products
                        </p>
                    </div>
                </div>
                <FeatureAccordian number={"01"} title={"Natural Ingredients"} description={"Vaseline products are formulated with the finest natural ingredients, carefully selected to vaseline and protect your skin without harsh chemicals"} />
                <FeatureAccordian number={"02"} title={"Innovative Formulations"} description={"Our advanced formulations combine the latest scientific research with nature’s best, delivering effective skincare solutions that address your skin’s unique needs."} />
                <FeatureAccordian number={"03"} title={"Eco-Friendly Packaging"} description={"We are committed to sustainability, using eco-friendly packaging that minimizes environmental impact while keeping your products fresh and effective."} />
                <FeatureAccordian number={"04"} title={"Dermatologist-Tested"} description={"All Nourish products are dermatologist-tested to ensure they are safe, gentle, and effective for all skin types, including sensitive skin."} />
            </section>
        </>
    );
}

export default FeatureSection;
