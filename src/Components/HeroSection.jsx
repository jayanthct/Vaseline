import React, { useState } from "react";
import { motion, AnimatePresence, transform } from "framer-motion";
import image1 from "../assets/Images/vaselinetube.png";
import image2 from "../assets/Images/vaselinebottle.png";
import image3 from "../assets/Images/vaselinejar.png";
import chevron from "../assets/Icons/chevron.svg";
import mouseicon from "../assets/Icons/mouseicon.svg";
import { SplitText } from "./SplitText";
import { BlurText } from "./Blurtext";



function HeroSection() {
  const nextSlide = () => {
    setIsVisible(false);
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      setIsVisible(true);
    }, 500);
  };

  const prevSlide = () => {
    setIsVisible(false);
    setTimeout(() => {
      setCurrentIndex(
        (prevIndex) => (prevIndex + images.length - 1) % images.length
      );
      setIsVisible(true);
    }, 500);
  };

  const images = [image1, image2, image3];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const sliderVariants = {
    initial: { opacity: 0, x: 300 },
    animate: {
      opacity: 1,
      x: 0,
      transition: { type: "spring", stiffness: 100 },
    },
    exit: { opacity: 0, x: -300, transition: { duration: 0.5 } },
  };

  const imageStyles = [
    {
      width: "32%",
      height: "auto",
      top: "-12px",
      left: "36%",
      filter: "brightness(1.1)",
    },
    {
      width: "32%",
      height: "auto",
      top: "0",
      left: "36%",
      filter: "brightness(1.1)",
    },
    {
      width: "32%",
      height: "auto",
      top: "-12px",
      left: "36%",
    },
  ];

  return (
    <>
      <section className="hero bg-white relative px-[10%] pb-[2%] mt-[8%] w-full h-screen flex flex-col justify-around items-center">
        <AnimatePresence>
          {isVisible && (
            <motion.img
              key={images[currentIndex]}
              src={images[currentIndex]}
              alt="Displayed Image"
              className="heroimage absolute z-[1] rotate-135"
              variants={sliderVariants}
              style={imageStyles[currentIndex]}
              initial="initial"
              animate="animate"
              exit="exit"
            />
          )}
        </AnimatePresence>

        <div className="flex flex-col items-center">
          <div
            className="firstline flex gap-[36px] text-center"
            style={{
              alignSelf: "flex-start",
              marginBottom: "-48px", // Adjust this value for desired overlap
            }}
          >

            <BlurText text="Vaseline" className="custom-class font-italianno text-[120px] text-primary" delay={200} />


            <SplitText
              text="Makes Your"
              className="custom-class text-[102px]"
              style={{
                background: "linear-gradient(40deg, #2D9EF7, #89CBFF)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
              delay={50}
            />
          </div>
          <SplitText
            text="Skin Enhance"
            className="custom-class text-[102px]"
            style={{
              background: "linear-gradient(40deg, #2D9EF7, #89CBFF)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              alignSelf: "center",
              marginBottom: "-40px",
            }}
            delay={50}
          />
          <div
            className="thirdline flex gap-[36px] text-center"
            style={{
              alignSelf: "flex-end",
            }}
          >
            <SplitText
              text="The"
              className="custom-class text-[102px]"
              style={{
                background: "linear-gradient(40deg, #2D9EF7, #89CBFF)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
              delay={50}
            />
            <BlurText text="Miracle" className="custom-class font-italianno text-[120px] text-primary" delay={200} />

          </div>
        </div>
        <div className="mouse flex flex-col gap-[4px] justify-center items-center">
          <img src={mouseicon} alt="" className="mouseicon" />
          <p className="mousescroll text-gray font-[300] text-[16px]">
            Scroll Down
          </p>
        </div>

        <button
          onClick={prevSlide}
          className="navbutton flex justify-center items-center bg-[#eeeeee] rounded-full px-[18px] py-[18px] absolute top-[220px] left-[120px] hover:scale-[1.2] transition-all"
        >
          <img src={chevron} alt="previous" className="rotate-180" />
        </button>
        <button
          onClick={nextSlide}
          className="navbutton flex justify-center items-center bg-[#eeeeee] rounded-full px-[18px] py-[18px] absolute top-[220px] right-[120px] hover:scale-[1.2] transition-all"
        >
          <img src={chevron} alt="next" />
        </button>
      </section>
    </>
  );
}

export default HeroSection;
