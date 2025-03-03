import React from "react";
import bannerImg from "/src/assets/homepage/treeBanner.png";
import CustomButton from "../common/Button";
import useScrollAnimation from "../../hooks/useScrollAnimation";
import { usePopupContext } from "../../context/PopupContext";

const MainBanner = ({ handleImageLoad }) => {
  const { setShowSlider } = usePopupContext();

  const imageZoomout = useScrollAnimation("animate-zoom-out");
  const headlineRef = useScrollAnimation();
  const openSlider = () => setShowSlider(true);

  return (
    <div className="bg-[#000207] relative overflow-clip w-full inline-flex flex-col items-center pt-20 h-[580px] sm:h-[650px] md:h-[720px]">
      <div className="absolute w-full top-0 max-h-screen opacity-60 max-w-[1500px] bg-red">
        <img
          className={`w-[1220px] sm:opacity-0 object-cover min-w-[900px] sm:min-w-[1120px]`}
          src={bannerImg}
          ref={imageZoomout}
          onLoad={handleImageLoad} // Image load handler
        />
      </div>
      <div className="w-full max-w-[1200px] py-32 sm:py-36  md:py-40 px-8 sm:px-16 md:px-20 h-720 relative inline-flex justify-center min-[980px]:justify-end">
        <div
          ref={headlineRef}
          className="opacity-0 gap-4 w-full sm:gap-6 md:gap-7 items-center inline-flex flex-col"
        >
          <p className="w-full text-white font-lora text-4xl sm:text-[42px] md:text-5xl max-w-96 leading-[50px] md:leading-[60px] text-center">
            Let's grow a greener world together
          </p>
          <div className="inline-flex w-full justify-center flex-wrap gap-2.5">
            <CustomButton onClick={openSlider}>BROWSE SEEDLINGS</CustomButton>
            <CustomButton onClick={openSlider} styleSet="secondary">
              LEARN MORE
            </CustomButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainBanner;
