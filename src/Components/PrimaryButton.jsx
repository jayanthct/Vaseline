import React from 'react'

function PrimaryButton({content}) {
  return (
    <>
    <button className='h-[80px] flex text-[32px] items-center justify-center text-gray border-gray border-[4px] bg-[#FFFFFF] py-[12px] px-[32px] rounded-full'>{content}</button>
    </>
  )
}

export default PrimaryButton