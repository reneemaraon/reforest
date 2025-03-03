import { usePopupContext } from "../../context/PopupContext";
import useScrollAnimation from "../../hooks/useScrollAnimation";
import {
  FloweringTreeLeaf,
  FruitTreeLeaf,
  HardwoodTreeLeaf,
  MedicinalPlantLeaf,
  ShadeTreeLeaf,
} from "../common/IconSvg";

const Category = ({ icon, name }) => {
  const { openSlider } = usePopupContext();

  return (
    <div
      onClick={openSlider}
      className="p-2 cursor-pointer group category inline-flex gap-5 items-center w-36"
    >
      <div className="min-w-10 h-10 py-2 flex items-center justify-center rounded-full group-hover:bg-primary-green bg-light-brown-bg">
        <div className=" group-hover:stroke-white group-hover:fill-white fill-light-brown w-full stroke-1 stroke-light-brown h-full">
          {icon}
        </div>
      </div>
      <p className="text-xs">{name}</p>
    </div>
  );
};

const ShopCategories = () => {
  const animateRef = useScrollAnimation();
  const headlineRef = useScrollAnimation("animate-push-right");
  return (
    <div className="w-full flex flex-col max-md:mb-20 py-12 sm:py-16 md:py-20 items-center">
      <div className="max-w-[1120px] min-[1130px]:px-0 px-4 w-full flex max-md:flex-wrap gap-y-10 gap-x-20 items-center md:items-start justify-center md:justify-between">
        <p
          ref={headlineRef}
          className="opacity-0 font-lora md:w-full leading-[100%] text-nowrap text-[24px] sm:text-[28px] md:text-[36px] mt-4"
        >
          Shop by Category
        </p>
        <div
          ref={animateRef}
          className="opacity-0 flex-wrap flex w-full items-center max-md:justify-center gap-y-10 gap-8"
        >
          <Category icon={<FloweringTreeLeaf />} name="Flowering" />
          <Category icon={<MedicinalPlantLeaf />} name="Medicinal" />
          <Category icon={<FruitTreeLeaf />} name="Fruit Trees" />
          <Category icon={<ShadeTreeLeaf />} name="Shade" />
          <Category icon={<HardwoodTreeLeaf />} name="Hardwood" />
        </div>
      </div>
    </div>
  );
};

export default ShopCategories;
