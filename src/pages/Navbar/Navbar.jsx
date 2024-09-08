import { usePopupContext } from "../../context/PopupContext";
import CustomButton from "../common/Button";
import Icon from "../common/Icon";
import { CartIcon, ProfileIcon } from "../common/IconSvg";

const Navbar = () => {
  const { openSlider } = usePopupContext();

  document.addEventListener("scroll", function () {
    const navbar = document.getElementById("navbar");

    if (window.scrollY > 100) {
      // Adjust the scroll distance as needed
      navbar.classList.remove("bg-transparent");
      navbar.classList.remove("h-32");
      navbar.classList.add("h-20");
      navbar.classList.add("bg-text-dark");
    } else {
      navbar.classList.remove("bg-text-dark");
      navbar.classList.remove("h-20");
      navbar.classList.add("h-32");
      navbar.classList.add("bg-transparent");
    }
  });

  return (
    <div
      id="navbar"
      className="transition-all ease-in-out duration-200 text-white bg-transparent text-xs fixed z-20 top-0 w-full inline-flex px-12 items-center justify-between h-32"
    >
      <div
        onClick={openSlider}
        className="button-transition p-3 rounded-md hover:bg-theme-base/15 cursor-pointer"
      >
        <p>SEEDLINGS</p>
      </div>

      <div>
        <p className="font-belle text-3xl">re:forest</p>
      </div>
      <div className="inline-flex items-center gap-5">
        <div className="inline-flex items-center gap-2">
          <div
            onClick={openSlider}
            className="p-3 hover:bg-theme-base/20 cursor-pointer rounded-md button-transition"
          >
            <Icon sizeRules="w-5 h-5" fill="fill-white">
              <ProfileIcon />
            </Icon>
          </div>
          <div
            onClick={openSlider}
            className="p-3 hover:bg-theme-base/20 cursor-pointer rounded-md button-transition"
          >
            <Icon
              sizeRules="w-5 h-5"
              fill="stroke-white stroke-[2.5px] fill-white"
            >
              <CartIcon />
            </Icon>
          </div>
        </div>
        <CustomButton onClick={openSlider} styleSet="secondary">
          JOIN THE PROJECT
        </CustomButton>
      </div>
    </div>
  );
};

export default Navbar;
