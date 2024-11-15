import React from "react";
import ProductClick from "./Components/ProductClick";
import Navbar from "./Components/Navbar";
import HeroSection from "./Components/HeroSection";


function App() {
  return (
    <>
      <Navbar></Navbar>
      <HeroSection></HeroSection>
      <ProductClick
        pname="Rejuvenating"
        pprice="399"
        para="A revitalizing eye serum that reduces the appearance of dark circles and puffiness. With caffeine and green tea extract, it brightens and refreshes the delicate skin around your eyes."
      ></ProductClick>
    </>
  );
}

export default App;
