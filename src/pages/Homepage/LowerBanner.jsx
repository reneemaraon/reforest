import { usePopupContext } from "../../context/PopupContext";
import useScrollAnimation from "../../hooks/useScrollAnimation";
import CustomButton from "../common/Button";
import bannerImg from "/src/assets/homepage/bannerlow.jpg";

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
    "400ms"
  );

  return (
    <div className="relative flex flex-col items-center overflow-clip max-[380px]:px-2 py-20 px-5 md:px-10  w-full">
      <div className="absolute z-10 top-0 w-full h-full min-w-[1080px]">
        <img src={bannerImg} className="object-cover w-full h-full" />
      </div>
      <div className="w-full max-w-[1180px] flex-col sm:flex-row flex z-10">
        <div className="min-w-[280px] bg-primary-green text-white  rounded-[20px] sm:rounded-l-[20px] flex flex-col justify-between gap-5 pr-10 sm:pr-16 md:pr-24 pl-6 sm:pl-10 md:pl-12 py-6 sm:py-10 md:py-12 w-full sm:w-[628px] min-h-[380px] sm:h-[650px] md:h-[787px]">
          <div className="inline-flex flex-col justify-start items-start  gap-5">
            <p
              ref={animateFirst}
              className="duration-300 opacity-0 text-xxs md:text-xs"
            >
              WE BELIEVE THAT
            </p>
            <p
              ref={animateSecond}
              className="duration-800 opacity-0 font-lora leading-[117%] max-[300px]:text-[24px] text-[30px] sm:text-[36px] md:text-[48px]"
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
        <div className="max-sm:hidden rounded-r-[20px] border-l-0 border-[0.5px]  border-white/50 w-[628px] h-[580px] sm:h-[650px] md:h-[787px]"></div>
      </div>
    </div>
  );
};

export default LowerBanner;
