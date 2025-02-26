import { useState } from "react";
import { usePopupContext } from "../../context/PopupContext";
import useScrollAnimation from "../../hooks/useScrollAnimation";
import CustomButton from "../common/Button";
import Icon from "../common/Icon";
import { CartIcon, OptionsIcon, ProfileIcon } from "../common/IconSvg";
import Slider from "../common/Slider";
import Sidebar from "./Sidebar";

const Navbar = () => {
  const { openSlider } = usePopupContext();
  const seedlingsRef = useScrollAnimation(undefined, undefined, "400ms");
  const [showModal, setShowModal] = useState(false);
  const logoRef = useScrollAnimation(undefined, undefined, "200ms");
  const profileRef = useScrollAnimation(undefined, undefined, "300ms");
  const optionsRef = useScrollAnimation(undefined, undefined, "100ms");
  const cartRef = useScrollAnimation(undefined, undefined, "600ms");
  const joinRef = useScrollAnimation(undefined, undefined, "600ms");

  document.addEventListener("scroll", function () {
    const navbar = document.getElementById("navbar");

    if (window.scrollY > 100) {
      // Adjust the scroll distance as needed
      navbar.classList.remove("bg-transparent");
      navbar.classList.remove("md:h-32");
      navbar.classList.remove("sm:h-24");
      navbar.classList.remove("h-20");
      navbar.classList.add("md:h-20");
      navbar.classList.add("sm:h-16");
      navbar.classList.add("h-12");
      navbar.classList.add("bg-text-dark");
    } else {
      navbar.classList.remove("bg-text-dark");
      navbar.classList.remove("md:h-20");
      navbar.classList.remove("sm:h-16");
      navbar.classList.remove("h-12");
      navbar.classList.add("md:h-32");
      navbar.classList.add("sm:h-24");
      navbar.classList.add("h-20");
      navbar.classList.add("bg-transparent");
    }
  });

  const toggleSlider = () => setShowModal(true);

  return (
    <div
      id="navbar"
      className="transition-all ease-in-out duration-200 text-white bg-transparent text-xs fixed z-20 top-0 w-full inline-flex sm:px-6 md:px-12 px-4 items-center justify-between sm:h-24 md:h-32 h-20"
    >
      <Sidebar showModal={showModal} setShowModal={setShowModal} />
      <div className="w-1/3 flex">
        <div className="sm:hidden flex">
          <div
            ref={optionsRef}
            onClick={toggleSlider}
            className="cursor-pointer opacity-0 p-2.5 hover:bg-theme-base/20  rounded-md button-transition"
          >
            <Icon sizeRules="w-5 h-5" fill=" stroke-[2px] fill-white">
              <OptionsIcon />
            </Icon>
          </div>
        </div>
        <div
          onClick={openSlider}
          ref={seedlingsRef}
          className="hidden sm:flex opacity-0 button-transition p-3 rounded-md hover:bg-theme-base/15 cursor-pointer"
        >
          <p>SEEDLINGS</p>
        </div>
      </div>

      <div className="w-1/3 flex items-center justify-center">
        <p
          ref={logoRef}
          className="opacity-0 font-belle text-xl sm:text-2xl mr-4 md:text-3xl"
        >
          re:forest
        </p>
      </div>
      <div className="inline-flex items-center justify-end gap-3 md:gap-5 w-1/3">
        <div className="hidden sm:inline-flex items-center gap-1 md:gap-2">
          <div
            onClick={openSlider}
            ref={profileRef}
            className="opacity-0 p-2.5 md:p-3 hover:bg-theme-base/20 cursor-pointer rounded-md button-transition"
          >
            <Icon sizeRules="w-4 h-4 md:w-5 md:h-5" fill="fill-white">
              <ProfileIcon />
            </Icon>
          </div>
          <div
            onClick={openSlider}
            ref={cartRef}
            className="opacity-0 p-2.5 md:p-3 hover:bg-theme-base/20 cursor-pointer rounded-md button-transition"
          >
            <Icon
              sizeRules="w-4 h-4 md:w-5 md:h-5"
              fill="stroke-white stroke-[2.5px] fill-white"
            >
              <CartIcon />
            </Icon>
          </div>
        </div>
        <div ref={joinRef} className="opacity-0">
          <CustomButton onClick={openSlider} styleSet="secondary">
            JOIN THE PROJECT
          </CustomButton>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
