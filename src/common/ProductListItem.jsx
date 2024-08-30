const ProductListItem = ({ product }) => {
  const { name, price, originalPrice, discount, newProduct, imageSrc } =
    product;

  return (
    <div className=" h-[356px] py-5 w-[300px] inline-flex flex-col justify-between items-center">
      <div className="image w-full inline-flex justify-center h-52">
        <img className="object-contain" src={`/src/assets/${imageSrc}`} />
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
