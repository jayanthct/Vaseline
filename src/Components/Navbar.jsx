import React from 'react';
import logo from '../assets/Images/Logo.svg';
import cart from '../assets/Icons/cart.svg';

function Navbar() {
    return (
        <>
            <nav className="navbar bg-[white]  fixed top-0 w-screen z-[2] px-[10%] py-[1.2%] flex justify-between items-center border-b-[rgba(44,44,44,0.13)] border-b-2 ">
                <a href="#" className="flex items-center">
                    <img src={logo} alt="logo" className="logo" />
                </a>
                <div className="navbuttons flex items-center gap-[12px] lg:gap-[24px]">
                    <a href="#" className="navbutton text-gray border-gray border-2 rounded-full px-[18px] py-[8px] hover:bg-gray hover:text-[white] transition-all">Home</a>
                    <a href="#" className="navbutton text-gray border-gray border-2 rounded-full px-[18px] py-[8px] hover:bg-gray hover:text-[white] transition-all">Products</a>
                    <a href="#" className="navbutton text-gray border-gray border-2 rounded-full px-[18px] py-[8px] hover:bg-gray hover:text-[white] transition-all">About Us</a>
                    <a href="#" className="navbutton text-gray border-gray border-2 rounded-full px-[18px] py-[8px] hover:bg-gray hover:text-[white] transition-all">Contact Us</a>
                    <a href="#" className="navbutton text-gray border-gray border-2 rounded-full px-[18px] py-[8px] hover:bg-gray hover:text-[white] transition-all">Blog</a>
                </div>
                <div className="loginCart flex items-center gap-[8px] lg:gap-[12px]">
                    <a href="#" className="navbutton text-[white] bg-gray rounded-full px-[18px] py-[8px]">Login</a>
                    <a href="#" className="navbutton bg-[#F8F8F8] rounded-full px-[18px] py-[18px] relative">
                        <img src={cart} alt="cart" className="cart" />
                        <div className="counter w-[20px] h-[20px] text-[12px] flex justify-center items-center absolute text-[white] rounded-full bg-gray top-0 right-0">1</div>
                    </a>
                </div>
            </nav>
        </>
    );
}

export default Navbar;
