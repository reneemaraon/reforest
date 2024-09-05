import { useState } from "react";
import CustomButton from "../../common/Button";
import About from "./About";
import Advocacies from "./Advocacies";
import LowerBanner from "./LowerBanner";
import ProductHighlights from "./ProductHighlights";
import ShopCategories from "./ShopCategories";
import Slider from "../../common/Slider";

const Homepage = () => {
  const [showSlider, setShowSlider] = useState(false);

  const openSlider = () => setShowSlider(true);

  const renderSlider = () => (
    <Slider setShowModal={setShowSlider} showModal={showSlider}>
      <div className="flex flex-col px-4">
        <div className="px-4 pt-8 pb-5 border-b-1 border-opacity-50">
          <p className="font-lora text-2xl leading-[100%]">
            Mockup Site Disclaimer
          </p>
        </div>
        <div className="w-full gap-10 flex flex-col px-4 py-9">
          <p className="text-base decoration-primary-green">
            This is a dummy site created for example purposes. All navigation
            and interactive elements are non-functional and meant only for show.
            <br />
            <br />
            Curious to see more? Contact me via{" "}
            <a
              className="underline"
              href="mailto:reneemaraon@gmail.com"
              rel="noopener noreferrer"
              target="_blank"
            >
              email
            </a>{" "}
            or visit my{" "}
            <a
              className="underline"
              href="https://github.com/reneemaraon"
              rel="noopener noreferrer"
              target="_blank"
            >
              Github
            </a>{" "}
            for additional projects.
          </p>
          <div>
            <CustomButton
              onClick={() =>
                window.open("https://github.com/reneemaraon", "_blank")
              }
            >
              Contact Developer
            </CustomButton>
          </div>
        </div>
      </div>
    </Slider>
  );

  return (
    <div className="flex-col inline-flex gap-0 w-full items-center">
      {renderSlider()}
      <div className="bg-[#000207] relative overflow-clip w-full inline-flex flex-col items-center py-20 h-[720px]">
        <div className="absolute w-full top-0 max-w-[1500px] bg-red">
          <img
            className="w-[1120px] object-cover"
            src="/src/assets/homepage/treeBanner.png"
          />
        </div>
        <div className="w-full max-w-[1200px] py-40 px-20 h-720 relative inline-flex justify-end">
          <div className=" gap-7 items-center inline-flex flex-col">
            <p className="text-white font-lora text-5xl w-96 leading-[60px] text-center">
              Let’s grow a greener world together
            </p>
            <div className="inline-flex gap-2.5">
              <CustomButton onClick={openSlider}>
                {" "}
                BROWSE SEEDLINGS{" "}
              </CustomButton>
              <CustomButton onClick={openSlider} styleSet="secondary">
                {" "}
                LEARN MORE{" "}
              </CustomButton>
            </div>
          </div>
        </div>
      </div>
      <ProductHighlights />
      <About />
      <ShopCategories />
      <LowerBanner />
    </div>
  );
};

export default Homepage;
