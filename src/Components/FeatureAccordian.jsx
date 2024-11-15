import React from 'react';
import arrow135 from '../assets/Icons/accordianarrow.svg';

function FeatureAccordian({ number, title, description }) {
    return (
        <article className="accordian group py-4 gap-[24px] flex cursor-pointer justify-center items-center w-full border-b-[2.5px] border-b-gray transform transition-all duration-300 ease-out hover:scale-[1.02]">
            <div className="accordiandetails px-8 flex justify-between items-center w-full">
                <div className="details flex justify-center items-center gap-[240px]">
                    <p className="number font-bold text-[20px]">{number}</p>
                    <p className="title font-[200] text-[36px]">{title}</p>
                </div>
                <img
                    src={arrow135}
                    alt="Expand"
                    className="arrow transform transition-transform duration-500 ease-out group-hover:rotate-90"
                />
            </div>
            <p className="description font-[300] text-[16px] hidden group-hover:block transition-opacity duration-500 delay-300 ease-out opacity-0 group-hover:opacity-100 max-w-xs break-words">
                {description}
            </p>
        </article>
    );
}

export default FeatureAccordian;
