import React, { useState } from "react"; // Import useState here
import arrow from "../assets/Icons/arrow45.svg";
import BuyButton from "./BuyButton";
import customIcon from "../assets/Icons/arrow45.svg";
import CustomCursorround from "./CustomCursorround"; // Your custom cursor component

function ProductCard({ pname, pprice, pimg }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <>
      <CustomCursorround isVisible={isHovered} customIcon={customIcon} />
      <article className="productcard flex flex-col gap-[12px] items-center justify-between w-full h-[612px]">
        <div className="productdetails w-full flex justify-between items-center px-[18px] py-[20px] bg-[#F8F8F8] rounded-[12px]">
          <div className="name flex flex-col gap-0 justify-start items-start">
            <h3 className="text-gray font-[200] text-[20px]">Vaseline®</h3>
            <h1 className="text-secondary font-bold text-[28px]">{pname}</h1>
          </div>
          <div className="price px-[12px] py-[4px] border-gray border-[2px] rounded-full flex gap-[4px] justify-center items-center">
            <p className="text-gray">₹{pprice}</p>
            <img src={arrow} alt="Price Arrow" className="arrow" />
          </div>
        </div>
        <div
          className="productimage w-full"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <img
            className="w-full rounded-[12px]"
            src={pimg}
            alt={`${pname} Product`}
          />
        </div>
        <BuyButton />
      </article>
    </>
  );
}

export default ProductCard;
