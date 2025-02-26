import About from "./About";
import LowerBanner from "./LowerBanner";
import ProductHighlights from "./ProductHighlights";
import ShopCategories from "./ShopCategories";
import { usePopupContext } from "../../context/PopupContext";
import useFadeInAnimation from "../../hooks/useFadeInAnimation";
import MainBanner from "./MainBanner";

const Homepage = ({ handleImageLoad, isImageLoaded }) => {
  const { setShowSlider } = usePopupContext();
  const homePageFade = useFadeInAnimation();

  const openSlider = () => setShowSlider(true);

  return (
    <div className="w-full">
      <div
        className={`${
          !isImageLoaded ? "hidden" : homePageFade
        } flex-col gap-0 w-full items-center
          
        `}
      >
        <MainBanner handleImageLoad={handleImageLoad} />
        <ProductHighlights />
        <About />
        <ShopCategories />
        <LowerBanner />
      </div>
    </div>
  );
};

export default Homepage;
