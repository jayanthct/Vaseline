import React from 'react'
import icon from '../assets/Icons/cardicon.svg'

function BuyButton() {
  return (
    <>
    <button className="cardbutton flex text-[white] gap-[16px] text-[24px] w-full h-[62px] justify-center font-lexend items-center px-[48px] py-[16px] bg-gray rounded-[12px]"><img src={icon} alt="icon" />Add to Cart</button>
    </>
  )
}

export default BuyButton