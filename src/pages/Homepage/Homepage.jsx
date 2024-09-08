import CustomButton from "../common/Button";
import About from "./About";
import LowerBanner from "./LowerBanner";
import ProductHighlights from "./ProductHighlights";
import ShopCategories from "./ShopCategories";
import { usePopupContext } from "../../context/PopupContext";
import useScrollAnimation from "../../hooks/useScrollAnimation";
import useFadeInAnimation from "../../hooks/useFadeInAnimation";

const Homepage = () => {
  const { setShowSlider } = usePopupContext();
  const headlineRef = useScrollAnimation();
  const imageAnimation = useFadeInAnimation();

  const openSlider = () => setShowSlider(true);

  return (
    <div className="flex-col inline-flex gap-0 w-full items-center">
      <div className="bg-[#000207] relative overflow-clip w-full inline-flex flex-col items-center pt-20 h-[720px]">
        <div className="absolute w-full top-0 max-w-[1500px] bg-red">
          <img
            className={`${imageAnimation} w-[1220px] object-cover min-w-[1120px]`}
            src="/src/assets/homepage/treeBanner.png"
          />
        </div>
        <div className="w-full max-w-[1200px] py-40 px-20 h-720 relative inline-flex justify-end">
          <div
            ref={headlineRef}
            className=" gap-7 items-center inline-flex flex-col"
          >
            <p className="text-white font-lora text-5xl w-96 leading-[60px] text-center">
              Let's grow a greener world together
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
