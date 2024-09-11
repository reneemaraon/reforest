import { useEffect, useState } from "react";
import CustomButton from "../common/Button";
import { usePopupContext } from "../../context/PopupContext";
import ecosystemImg from "src/assets/homepage/boyjump.png";

const ITEMS = [
  {
    img: ecosystemImg,
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
      <div className="max-w-[1280px] min-w-[900px] inline-flex justify-between gap-5">
        <div className="w-full h-[600px] overflow-clip rounded-xl">
          {ITEMS.map((item, index) => (
            <img
              src={ITEMS[index].img}
              className={`${
                index == currentIndex
                  ? "animate-fade-in-short"
                  : "opacity-0 hidden"
              } object-cover w-[800px] h-[600px]`}
            />
          ))}
        </div>
        <div className="w-full h-[600px] bg-theme-base rounded-xl flex flex-col justify-between items-center p-10">
          <p className="text-xxs text-lighter-text">OUR ADVOCACIES</p>
          {ITEMS.map((item, index) => (
            <div
              key={index}
              className={`${
                index == currentIndex ? "animate-push-up" : "opacity-0 hidden"
              } gap-6 flex flex-col items-center`}
            >
              <p className="font-lora text-[36px] text-center leading-[117%]">
                {ITEMS[index].title}
              </p>
              <p className="text-xs text-text-dark font-light leading-[180%] text-center">
                {ITEMS[index].description}
              </p>
              <CustomButton onClick={openSlider} styleSet="inverse">
                LEARN MORE
              </CustomButton>
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
