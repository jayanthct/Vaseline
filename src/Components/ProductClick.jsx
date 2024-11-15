import React from "react";
import arrow from "../assets/Icons/arrow45.svg";
import box from "../assets/Icons/box.svg";
import plus from "../assets/Icons/pluscircle.svg";
import pimg1 from "../assets/Images/Productimage1.png";
import lock from "../assets/Icons/lock.svg";

function ProductClick({ pname, pprice, para, pimg }) {
  return (
    <>
      <section className="productclick flex gap-[36px] justify-start items-start px-[10%] py-[2%] w-full">
        <div className="image w-full h-full rounded-[16px]">
          <img className="rounded-[8px]" src={pimg1} alt="" />
        </div>
        <div className="productpagedetails flex flex-col gap-[24px] justify-start">
          <div className="productdetails bg-[#F1F1F1] flex justify-between p-[24px] rounded-[12px] items-center w-full">
            <div className="details flex gap-2 items-center">
              <h3 className="text-gray font-[200] text-[20px]">Vaseline®</h3>
              <h1 className="text-secondary font-bold text-[28px]">{pname}</h1>
            </div>
            <div className="price px-[12px] bg-[white] py-[4px] border-gray border-[2px] rounded-full flex gap-[4px] justify-center items-center">
              <p className="text-gray">₹{pprice}</p>
              <img src={arrow} alt="Price Arrow" className="arrow" />
            </div>
          </div>

          <div className="description w-full">
            <p className="title text-[24px] font-semibold text-gray ">
              Description
            </p>
            <p className="text text-[16px] font-regular text-[#2c2c2ca5]">
              {para}
            </p>
          </div>

          <article className="paymentbox flex flex-col w-full gap-[24px]">
            <div className="delivery flex gap-[12px]">
              <img src={box} alt="" className="box" />
              <p className="deliverydetails text-[28px]">
                Express Delivery with in 48Hrs
              </p>
            </div>
            <div className="buttons flex justify-between gap-[2%]">
              <button className="addtocart gap-4 py-2 border-gray border-2 text-gray flex justify-center items-center w-[50%] rounded-[6px] text-[24px]">
                <img src={plus} alt="" />
                Add to Cart
              </button>

              <button className="buynow py-2 bg-gray text-[white] flex justify-center items-center w-[50%] rounded-[6px] text-[24px]">
                Buy Now
              </button>
            </div>
          </article>
          <div className="secure flex gap-4 w-full justify-center items-center text-gray">
            <img src={lock} alt="" />
            <p>Secure Payment</p>
            <img src={lock} alt="" />
          </div>
        </div>
      </section>
    </>
  );
}

export default ProductClick;
