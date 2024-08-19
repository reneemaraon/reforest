import CustomButton from "../common/Button";
import Icon from "../common/Icon";
import { CartIcon, ProfileIcon } from "../common/IconSvg";

const Navbar = () => {
  return (
    <div className="text-white text-xs fixed z-20 top-0 w-full inline-flex px-12 items-center justify-between h-32">
      <div>
        <p>SEEDLINGS</p>
      </div>

      <div>
        <p className="font-belle text-3xl">re:forest</p>
      </div>
      <div className="inline-flex items-center gap-8">
        <Icon sizeRules="w-5 h-5" fill="fill-white">
          <ProfileIcon />
        </Icon>
        <Icon sizeRules="w-5 h-5" fill="stroke-white stroke-[2.5px] fill-white">
          <CartIcon />
        </Icon>
        <CustomButton styleSet="secondary">JOIN THE PROJECT</CustomButton>
      </div>
    </div>
  );
};

export default Navbar;
