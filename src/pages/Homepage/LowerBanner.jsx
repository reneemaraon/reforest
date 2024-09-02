import CustomButton from '../../common/Button';

const LowerBanner = () => {
  return (
    <div className="relative flex flex-col items-center overflow-clip py-20 h-947 w-full">
      <div className="absolute z-10 top-0 w-full">
        <img
          src="/src/assets/homepage/bannerlow.jpg"
          className="object-cover"
        />
      </div>
      <div className="w-full max-w-[1180px] inline-flex z-10">
        <div className="bg-primary-green text-white  rounded-l-[20px] flex flex-col justify-between pr-24 pl-12 py-12 w-[628px] h-[787px]">
          <div className="inline-flex flex-col justify-start items-start  gap-5">
            <p className="text-xs">WE BELIEVE THAT</p>
            <p className="font-lora leading-[117%] text-[48px]">
              You and I can slow down the decay.
            </p>
          </div>
          <div className="inline-flex flex-col gap-4 w-full">
            <p className="font-light leading-[180%] text-xs">
              Our initiative connects passionate individuals and local groups to
              plant trees in urban and rural areas. Together, we can create
              greener, healthier environments for everyone. Our initiative
              connects passionate individuals and local groups to plant trees in
              urban and rural areas.
            </p>
            <div>
              <CustomButton styleSet="secondary">WHO WE ARE</CustomButton>
            </div>
          </div>
        </div>
        <div className="rounded-r-[20px] border-l-0 border-[0.5px]  border-white/50 w-[628px] h-[787px]"></div>
      </div>
    </div>
  );
};

export default LowerBanner;
