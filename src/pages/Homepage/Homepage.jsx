import CustomButton from "../../common/Button";
import ProductHighlights from "./ProductHighlights";

const Homepage = () => {
  return (
    <div className="flex-col inline-flex gap-0 w-full">
      <div className="bg-[#000207] relative overflow-clip w-full py-20 h-screen">
        <img
          className="w-[1080px] absolute left-0 bottom-0"
          src="/src/assets/tree.png"
        />
        <div className="absolute bottom-1/3 gap-7 items-center right-52 origin-center inline-flex flex-col">
          <p className="text-white font-lora text-5xl w-96 leading-[60px] text-center">
            Let’s grow a greener world together
          </p>
          <div className="inline-flex gap-2.5">
            <CustomButton> BROWSE SEEDLINGS </CustomButton>
            <CustomButton styleSet="secondary"> LEARN MORE </CustomButton>
          </div>
        </div>
      </div>
      <ProductHighlights />
    </div>
  );
};

export default Homepage;
