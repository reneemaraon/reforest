import ProductListItem from "../../common/ProductListItem";

const ProductHighlights = () => {
  return (
    <div className="h-screen py-12 bg-light-white inline-flex flex-col w-full items-center">
      <div className="flex gap-10 text-base font-lora">
        <p className="text-text-dark">New Seedlings</p>
        <p className="text-light-brown">Best Sellers</p>
        <p className="text-light-brown">re:forest picks</p>
      </div>

      <div className="py-12 inline-flex">
        <ProductListItem />
      </div>
    </div>
  );
};

export default ProductHighlights;
