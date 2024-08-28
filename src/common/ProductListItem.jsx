const ProductListItem = () => {
  return (
    <div className="border-l-lighter-brown border-r-lighter-brown border border-t-0 border-b-0 h-[356px] py-5 inline-flex flex-col justify-between items-center">
      <div className="image w-full h-52">
        <img className="object-contain" src="/src/assets/sampletree.png" />
      </div>
      <div className="bottom items-center gap-4 inline-flex flex-col">
        <div className="tag-small font-inter text-xxs">NEW</div>
        <div className="items-center flex flex-col gap-1">
          <p className="text-sm text-text-darker">Prunus Africana</p>
          <div className="text-base font-lora inline-flex  gap-1">
            <p className="">$22.00</p>
            <p className="text-light-brown line-through">$22.00</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductListItem;
