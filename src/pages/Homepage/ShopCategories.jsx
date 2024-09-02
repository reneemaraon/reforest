import {
  FloweringTreeLeaf,
  FruitTreeLeaf,
  HardwoodTreeLeaf,
  MedicinalPlantLeaf,
  ShadeTreeLeaf,
} from '../../common/IconSvg';

const Category = ({ icon, name }) => (
  <div className="category inline-flex gap-5 items-center w-32">
    <div className="w-10 h-10 p-1.5 flex items-center justify-center rounded-full bg-light-brown-bg">
      <div className="fill-light-brown w-full stroke-1 stroke-light-brown h-full">
        {icon}
      </div>
    </div>
    <p className="text-xs">{name}</p>
  </div>
);

const ShopCategories = () => {
  return (
    <div className="w-full flex flex-col py-20 items-center">
      <div className="max-w-[1120px] w-full flex items-start justify-between">
        <p className="font-lora text-[36px] mt-4">Shop by Category</p>
        <div className="flex-wrap flex max-w-[550px] items-center gap-y-10 gap-20">
          <Category icon={<FloweringTreeLeaf />} name="Flowering" />
          <Category icon={<MedicinalPlantLeaf />} name="Medicinal" />
          <Category icon={<FruitTreeLeaf />} name="Fruit Trees" />
          <Category icon={<ShadeTreeLeaf />} name="Shade" />
          <Category icon={<HardwoodTreeLeaf />} name="Hardwood" />
        </div>
      </div>
    </div>
  );
};

export default ShopCategories;
