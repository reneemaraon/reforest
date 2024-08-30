import CustomButton from "../../common/Button";
import ProductListItem from "../../common/ProductListItem";

const ProductHighlights = () => {
  return (
    <div className="h-screen py-12 bg-light-white inline-flex flex-col w-full items-center">
      <div className="flex gap-10 text-base font-lora">
        <p className="text-text-dark">New Seedlings</p>
        <p className="text-light-brown">Best Sellers</p>
        <p className="text-light-brown">re:forest picks</p>
      </div>

      <div className="py-12 divide-x inline-flex">
        <ProductListItem />
        <ProductListItem />
        <ProductListItem />
        <ProductListItem />
        {/* border-l-lighter-brown border-r-lighter-brown border border-t-0 border-b-0 */}
      </div>
      <div className="py-4">
        <CustomButton styleSet="inverse">VIEW ALL PRODUCTS</CustomButton>
      </div>
    </div>
  );
};

export default ProductHighlights;
