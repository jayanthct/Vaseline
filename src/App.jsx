import React from "react";
import ProductClick from "./Components/ProductClick";
import Navbar from "./Components/Navbar";
import HeroSection from "./Components/HeroSection";
import FeatureSection from "./Components/FeatureSection";
import BottomNavbar from "./Components/BottomNavbar";

import ProductSection from "./Components/ProductSection";
import AboutUsSection from "./Components/AboutUsSection";
import BlogSection from "./Components/BlogSection";
import BannerSection from "./Components/BannerSection";
import ProductExperienceSection from "./Components/ProductExperienceSection";
import FeatureAccordian from "./Components/FeatureAccordian";

import CustomCursor from "./Components/CustomCursor";
import CustomCursorround from "./Components/CustomCursorround";

function App() {
  return (
    <>
    {/* <CustomCursor></CustomCursor>
    <CustomCursorround></CustomCursorround> */}
      <Navbar></Navbar>
      <HeroSection></HeroSection>

      <ProductSection></ProductSection>
      {/* <ProductClick
        pname="Rejuvenating"
        pprice="399"
        para="A revitalizing eye serum that reduces the appearance of dark circles and puffiness. With caffeine and green tea extract, it brightens and refreshes the delicate skin around your eyes."
      ></ProductClick> */}
      <AboutUsSection></AboutUsSection>
      <FeatureSection></FeatureSection>
      <ProductExperienceSection></ProductExperienceSection>
      <BannerSection></BannerSection>
      <BlogSection></BlogSection>

      <BottomNavbar></BottomNavbar>
    </>
  );
}

export default App;
