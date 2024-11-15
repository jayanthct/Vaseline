import React from 'react'
import bottomlogo from '../assets/Images/BottomLogo.svg'
import women from '../assets/Images/ContactWomen.png'
import FB from '../assets/Icons/facebook.svg'
import Insta from '../assets/Icons/instagram.svg'
import Twitter from '../assets/Icons/twitter.svg'
import PrimaryButton from './PrimaryButton'


function BottomNavbar() {
    return (

        <>

            <footer className="footersection flex flex-col gap-[36px] justify-center items-center px-[10%] py-[2%] w-full">


                <article className="contact flex bg-[#959B99] gap-[36px] justify-between items-center  rounded-[12px] px-[64px] w-full">
                    <img className='image w-[30%] h-full' src={women} alt="" />
                    <div className="py-[24px] contactdetails flex flex-col justify-center items-center gap-[48px]">
                        <div className="heading flex flex-col justify-end w-full items-end gap-[12px]">

                            <p className="primaryheading text-[white] font-lexend font-[200] text-[72px] text-right">Get In Touch With Us</p>

                            <p className="secondaryheading text-[white] font-[300] text-[18px] text-right">We'd love to hear from you! Whether you have a question about our products, need assistance with your order, or just want to share your feedback, our team is here to help.</p>
                        </div>


                        <div className='flex flex-row-reverse justify-between items-end w-full'>
                            <div className="infor text-[white] text-[18px]">
                                <p>Nourish Skincare123 Skincare Avenue, Suite 100</p>
                                <p> Wellness City, ST 12345</p>
                            </div>
                            <div className="socialmedia flex justify-center items-center gap-4">
                                <img src={FB} alt="" className="social" />
                                <img src={Insta} alt="" className="social" />
                                <img src={Twitter} alt="" className="social" />
                            </div>
                        </div>
                    </div>

                </article>

                <nav className="bottomnavbar flex bg-gray gap-[36px] justify-between items-center px-[4%] rounded-[12px] py-[4%] w-full ">
                    <a href="#" className='flex justify-center items-center'><img src={bottomlogo} alt="" className="logo" /></a>
                    <div className="navbuttons flex justify-center items-center gap-[24px]">
                        <a href='#' className="navbutton text-[white] border-[white] border-2 rounded-full px-[18px] py-[8px] hover:bg-[white] hover:text-gray transition-all">Home</a>
                        <a href='#' className="navbutton text-[white]  border-[white] border-2 rounded-full px-[18px] py-[8px]  hover:bg-[white] hover:text-gray transition-all">Products</a>
                        <a href='#' className="navbutton text-[white] border-[white] border-2 rounded-full px-[18px] py-[8px]  hover:bg-[white] hover:text-gray transition-all">About Us</a>
                        <a href='#' className="navbutton text-[white] border-[white] border-2 rounded-full px-[18px] py-[8px]  hover:bg-[white] hover:text-gray transition-all">Contact Us</a>
                        <a href='#' className="navbutton text-[white] border-[white] border-2 rounded-full px-[18px] py-[8px]  hover:bg-[white] hover:text-gray transition-all">Blog</a>
                    </div>
                    <div className="text-[white] text-[18px] hover:underline transition-all font-semibold flex-col flex justify-end items-end gap-[4px]">
                        <a href="#">Terms & Conditions</a>
                        <a href="#">Privacy Policy</a>
                    </div>
                </nav>

                <p className='text-center font-semibold'>All Rights Reserved © 2024 - Designed & Developed by JayanthCT</p>
            </footer>
        </>
    )
}

export default BottomNavbar