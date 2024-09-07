import CustomButton from "../common/Button";

const Advocacies = () => {
  return (
    <div className="py-10 gap-8 bg-light-brown-bg inline-flex flex-col w-full items-center">
      <div className="max-w-[1280px] inline-flex justify-between gap-5">
        <div className="w-[580px] h-[600px] overflow-clip rounded-xl">
          <img
            src="src/assets/homepage/boyjump.png"
            className="object-cover w-[800px] h-[600px]"
          />
        </div>
        <div className="w-[580px] h-[600px] bg-theme-base rounded-xl flex flex-col justify-between items-center p-10">
          <p className="text-xxs text-lighter-text">OUR ADVOCACIES</p>
          <div className="gap-6 flex flex-col items-center">
            <p className="font-lora text-[36px] leading-[117%]">
              Restoring Ecosystems
            </p>
            <p className="text-xs text-text-dark font-light leading-[180%] text-center">
              Through the Reforesting Rural Landscapes project, we partner with
              farmers to integrate tree planting into their land management
              practices. Planting trees on farmlands helps prevent soil erosion,
              enhances water retention, and increases biodiversity. This
              initiative supports sustainable agriculture and boosts the
              resilience of rural communities against climate change.
            </p>
            <CustomButton styleSet="inverse">LEARN MORE</CustomButton>
          </div>
          <div className="flex gap-2">
            <div className="w-9 h-1 rounded-xl bg-primary-green" />
            <div className="w-9 h-1 rounded-xl bg-primary-green" />
            <div className="w-9 h-1 rounded-xl bg-lighter-brown" />
            <div className="w-9 h-1 rounded-xl bg-lighter-brown" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Advocacies;
