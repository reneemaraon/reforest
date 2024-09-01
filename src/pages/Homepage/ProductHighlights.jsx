import CustomButton from "../../common/Button";
import ProductListItem from "../../common/ProductListItem";
import { products } from "../../assets/products";
import { useState } from "react";

const newSeedlings = [products[0], products[4], products[22], products[20]];
const bestSellers = [products[5], products[7], products[15], products[18]];
const reforestPicks = [products[2], products[6], products[10], products[12]];

const ProductHighlights = () => {
  const [activeTab, setActiveTab] = useState("newSeedlings");

  const getProductList = () => {
    switch (activeTab) {
      case "newSeedlings":
        return newSeedlings;
      case "bestSellers":
        return bestSellers;
      case "reforestPicks":
        return reforestPicks;
      default:
        return [];
    }
  };

  const renderTab = (tabName, tabVal) => {
    return (
      <p
        className={`transition-colors duration-500 ease-in-out hover:text-text-darker ${
          activeTab === tabVal ? "text-text-dark" : "text-light-brown"
        }`}
        onClick={() => setActiveTab(tabVal)}
      >
        {tabName}
      </p>
    );
  };

  return (
    <div className="py-12 bg-light-white inline-flex flex-col w-full items-center">
      <div className="flex gap-10 text-base font-lora cursor-pointer">
        {renderTab("New Seedlings", "newSeedlings")}
        {renderTab("Best Sellers", "bestSellers")}
        {renderTab("re:forest picks", "reforestPicks")}
      </div>

      <div className="py-12 divide-x inline-flex">
        {getProductList().map((product) => (
          <ProductListItem key={product.id} product={product} />
        ))}
      </div>

      <div className="py-4">
        <CustomButton styleSet="inverse">VIEW ALL PRODUCTS</CustomButton>
      </div>
    </div>
  );
};

export default ProductHighlights;
