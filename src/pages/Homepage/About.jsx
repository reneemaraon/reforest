import { usePopupContext } from "../../context/PopupContext";
import useScrollAnimation from "../../hooks/useScrollAnimation";
import CustomButton from "../common/Button";
import Advocacies from "./Advocacies";

import treeImg from "/src/assets/homepage/tree.png";
import handImg from "/src/assets/homepage/hand.png";
import earthImg from "/src/assets/homepage/earth.png";

const AboutItem = ({ elementRef, children }) => {
  return (
    <div
      ref={elementRef}
      className="opacity-0 w-[250px] md:w-[300px] items-center flex flex-col gap-3 sm:gap-5"
    >
      {children}
    </div>
  );
};

const AboutHeader = ({ children }) => (
  <p className="font-lora text-xs sm:text-sm md:text-base text-center">
    {" "}
    {children}
  </p>
);

const Description = ({ children }) => (
  <p className="text-[10px] leading-[190%] sm:text-xs sm:leading-[180%] text-center">
    {children}
  </p>
);

const AboutImageItem = ({ children }) => <div className="h-8">{children}</div>;

const About = () => {
  const { openSlider } = usePopupContext();
  const aboutTextRef = useScrollAnimation();
  const headerRef = useScrollAnimation(undefined, undefined, "200ms");
  const aboutItemRefFirst = useScrollAnimation(undefined, undefined, "400ms");
  const aboutItemRefSecond = useScrollAnimation(undefined, undefined, "500ms");
  const aboutItemRefThird = useScrollAnimation(undefined, undefined, "600ms");
  const buttonRef = useScrollAnimation(undefined, undefined, "700ms");

  return (
    <div className="py-10 gap-8 bg-light-brown-bg inline-flex flex-col w-full items-center">
      <div className="inline-flex flex-col items-center gap-6">
        <p
          ref={aboutTextRef}
          className="opacity-0 text-center font-inter text-xxs"
        >
          ABOUT US
        </p>
        <p
          ref={headerRef}
          className="mx-6 opacity-0 text-center max-w-[500px] font-lora leading-[117%] text-[36px] sm:text-[42px] md:text-[50px]"
        >
          Join the Movement to Plant a Greener Future
        </p>
      </div>
      <div className="inline-flex w-full justify-center flex-wrap mx-6 sm:mx-4 md:mx-0 gap-12">
        <AboutItem elementRef={aboutItemRefFirst}>
          <AboutImageItem>
            <img className="object-fit" src={treeImg} />
          </AboutImageItem>
          <AboutHeader>Empowering Communities</AboutHeader>
          <Description>
            Our initiative connects passionate individuals and local groups to
            plant trees in urban and rural areas. Together, we can create
            greener, healthier environments for everyone.
          </Description>
        </AboutItem>
        <AboutItem elementRef={aboutItemRefSecond}>
          <AboutImageItem>
            <img className="object-fit" src={handImg} />
          </AboutImageItem>
          <AboutHeader>Supporting Local Economies</AboutHeader>
          <Description>
            When you purchase a seedling, you’re not only helping the
            environment but also providing meaningful work for those in need,
            fostering economic growth and stability.
          </Description>
        </AboutItem>
        <AboutItem elementRef={aboutItemRefThird}>
          <AboutImageItem>
            <img className="object-fit" src={earthImg} />
          </AboutImageItem>
          <AboutHeader>Fostering Environmental Stewardship</AboutHeader>
          <Description>
            Your investment in a seedling contributes to long-term climate
            solutions, allowing local communities to take ownership of their
            natural surroundings and ensure a sustainable future.
          </Description>
        </AboutItem>
      </div>
      <div className="opacity-0" ref={buttonRef}>
        <CustomButton onClick={openSlider}>BROWSE SEEDLINGS</CustomButton>
      </div>
      <Advocacies />
    </div>
  );
};

export default About;
