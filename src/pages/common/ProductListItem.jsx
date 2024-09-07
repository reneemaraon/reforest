import { DiscountBadge } from "./IconSvg";
import Icon from "./Icon";

const Discount = ({ discount }) => (
  <div className="relative w-full h-full">
    <div className="absolute top-4 right-6">
      <div className="rotate-[-20deg] relative w-[50px] h-[50px] inline-flex items-center justify-center">
        <p className="text-white text-xs z-10 font-lora">-{discount * 100}%</p>
        <Icon
          sizeRules="absolute top-0 left-0 w-[50px] h-[50px]"
          fill="text-primary-green"
        >
          <DiscountBadge />
        </Icon>
      </div>
    </div>
  </div>
);

const ProductListItem = ({ product }) => {
  const { name, price, originalPrice, discount, newProduct, imageSrc } =
    product;

  return (
    <div className="group/item cursor-pointer relative h-[356px] py-5 w-[300px] inline-flex flex-col justify-between items-center">
      <div className="absolute top-0 right-0 z-[10] w-full h-full button-transition group-hover/item:bg-lighter-brown/10">
        {discount > 0 && <Discount discount={discount} />}
      </div>
      <div className="image w-full inline-flex justify-center h-52">
        <img
          className="group-hover/item:scale-105 transition-transform duration-300 ease-in-out object-contain"
          src={`/src/assets/${imageSrc}`}
        />
      </div>
      <div className="bottom items-center gap-4 inline-flex flex-col">
        {newProduct && <div className="tag-small font-inter text-xxs">NEW</div>}
        <div className="items-center flex flex-col gap-1">
          <p className="text-sm text-text-darker">{name}</p>
          <div className="text-base font-lora inline-flex  gap-1">
            <p className="">{`$${price.toFixed(2)}`}</p>
            {discount > 0 && (
              <p className="text-light-brown line-through">{`$${originalPrice.toFixed(
                2
              )}`}</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductListItem;
