import { usePopupContext } from "../../context/PopupContext";
import useScrollAnimation from "../../hooks/useScrollAnimation";
import CustomButton from "../common/Button";

const LowerBanner = () => {
  const { openSlider } = usePopupContext();
  const animateFirst = useScrollAnimation("animate-push-right");
  const animateSecond = useScrollAnimation(
    "animate-push-right",
    undefined,
    "300ms"
  );
  const animateThird = useScrollAnimation(
    "animate-push-right",
    undefined,
    "800ms"
  );

  return (
    <div className="relative flex flex-col items-center overflow-clip py-20 px-10 h-947 w-full">
      <div className="absolute z-10 top-0 w-full h-full min-w-[1080px]">
        <img
          src="/src/assets/homepage/bannerlow.jpg"
          className="object-cover w-full h-full"
        />
      </div>
      <div className="w-full min-w-[800px] max-w-[1180px] inline-flex z-10">
        <div className="bg-primary-green text-white  rounded-l-[20px] flex flex-col justify-between pr-24 pl-12 py-12 w-[628px] h-[787px]">
          <div className="inline-flex flex-col justify-start items-start  gap-5">
            <p ref={animateFirst} className="duration-300 opacity-0 text-xs">
              WE BELIEVE THAT
            </p>
            <p
              ref={animateSecond}
              className="duration-800 opacity-0 font-lora leading-[117%] text-[48px]"
            >
              You and I can slow down the decay.
            </p>
          </div>
          <div
            ref={animateThird}
            className="duration-1000 opacity-0 inline-flex flex-col gap-4 w-full"
          >
            <p className="font-light leading-[180%] text-xs">
              Our initiative connects passionate individuals and local groups to
              plant trees in urban and rural areas. Together, we can create
              greener, healthier environments for everyone. Our initiative
              connects passionate individuals and local groups to plant trees in
              urban and rural areas.
            </p>
            <div>
              <CustomButton onClick={openSlider} styleSet="secondary">
                WHO WE ARE
              </CustomButton>
            </div>
          </div>
        </div>
        <div className="rounded-r-[20px] border-l-0 border-[0.5px]  border-white/50 w-[628px] h-[787px]"></div>
      </div>
    </div>
  );
};

export default LowerBanner;
