import { useEffect, useState } from "react";
import CustomButton from "../common/Button";
import { usePopupContext } from "../../context/PopupContext";
import useScrollAnimation from "../../hooks/useScrollAnimation";

const ITEMS = [
  {
    img: "https://images.pexels.com/photos/722629/pexels-photo-722629.jpeg",
    title: "Restoring Ecosystems",
    description:
      "Through the Reforesting Rural Landscapes project, we partner with \
              farmers to integrate tree planting into their land management \
              practices. Planting trees on farmlands helps prevent soil erosion, \
              enhances water retention, and increases biodiversity. This \
              initiative supports sustainable agriculture and boosts the \
              resilience of rural communities against climate change.",
  },
  {
    img: "https://images.pexels.com/photos/13035525/pexels-photo-13035525.jpeg",
    title: "Coastal Mangrove Restoration",
    description:
      "Our Coastal Mangrove Restoration project aims to rehabilitate mangrove forests along vulnerable coastlines. Mangroves play a crucial role in protecting shorelines from erosion and storm surges, while also providing habitat for diverse marine life. By restoring these vital ecosystems, we help safeguard coastal communities and promote environmental sustainability.",
  },
  {
    img: "https://images.pexels.com/photos/27453971/pexels-photo-27453971/free-photo-of-a-wooden-staircase-leading-to-a-forest.jpeg",
    title: "Urban Oasis Initiative",
    description:
      "Our Urban Oasis Initiative focuses on transforming neglected city parks into lush, green sanctuaries. By planting diverse native tree species, we aim to improve air quality and provide shade and recreational spaces for local communities. This project not only beautifies urban areas but also fosters a deeper connection between residents and nature.",
  },
];

const Advocacies = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { openSlider } = usePopupContext();
  const titleRef = [
    useScrollAnimation(),
    useScrollAnimation(),
    useScrollAnimation(),
  ];
  const descriptionRef = [
    useScrollAnimation(undefined, undefined, "100ms"),
    useScrollAnimation(undefined, undefined, "100ms"),
    useScrollAnimation(undefined, undefined, "100ms"),
  ];
  const buttonRef = [
    useScrollAnimation(undefined, undefined, "200ms"),
    useScrollAnimation(undefined, undefined, "200ms"),
    useScrollAnimation(undefined, undefined, "200ms"),
  ];
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === ITEMS.length - 1 ? 0 : prevIndex + 1
      );
    }, 8000); // 3 seconds delay

    return () => clearInterval(intervalId); // Cleanup on unmount
  }, [ITEMS.length]);

  return (
    <div className="py-10 px-4 gap-8  bg-light-brown-bg inline-flex flex-col w-full items-center">
      <div className="w-full max-w-[1280px] flex-col sm:flex-row flex justify-between sm:gap-5">
        <div className="w-full h-[240px] sm:h-[400px] md:h-[600px] overflow-clip relative rounded-t-xl sm:rounded-xl">
          {ITEMS.map((item, index) => (
            <img
              src={ITEMS[index].img}
              key={index}
              className={`${
                index == currentIndex
                  ? "opacity-100 scale-[1.02]"
                  : "opacity-0 scale-1"
              } object-cover absolute transition-all ease-out duration-[1500ms] w-[800px] h-[600px]`}
            />
          ))}
        </div>
        <div className="w-full h-[360px] sm:h-[500px] md:h-[600px] bg-theme-base rounded-b-xl sm:rounded-xl flex flex-col justify-between items-center px-2 py-8 md:p-10">
          <p className="max-sm:hidden text-xxs text-lighter-text">
            OUR ADVOCACIES
          </p>
          {ITEMS.map((item, index) => (
            <div
              key={index}
              className={`${
                index == currentIndex ? "animate-push-up" : "opacity-0 hidden"
              } gap-6 flex flex-col items-center`}
            >
              <p
                ref={titleRef[index]}
                className="opacity-0 font-lora text-[24px] sm:text-[28px] md:text-[36px] text-center leading-[117%]"
              >
                {ITEMS[index].title}
              </p>
              <p
                ref={descriptionRef[index]}
                className="opacity-0  text-xs text-text-dark font-light leading-[180%] text-center"
              >
                {ITEMS[index].description}
              </p>
              <div className="opacity-0" ref={buttonRef[index]}>
                <CustomButton onClick={openSlider} styleSet="inverse">
                  LEARN MORE
                </CustomButton>
              </div>
            </div>
          ))}
          <div className="flex gap-2">
            {ITEMS.map((item, index) => (
              <div key={index} className="w-9 h-1 rounded-xl bg-lighter-brown">
                {index === currentIndex && (
                  <div className="w-9 h-1 animate-progress rounded-xl bg-primary-green" />
                )}
                {index < currentIndex && (
                  <div className="w-9 h-1 rounded-xl bg-primary-green" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Advocacies;
