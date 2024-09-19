import { usePopupContext } from '../../context/PopupContext';
import useScrollAnimation from '../../hooks/useScrollAnimation';
import CustomButton from '../common/Button';
import Icon from '../common/Icon';
import { CartIcon, ProfileIcon } from '../common/IconSvg';

const Navbar = () => {
  const { openSlider } = usePopupContext();
  const seedlingsRef = useScrollAnimation(undefined, undefined, '400ms');
  const logoRef = useScrollAnimation(undefined, undefined, '200ms');
  const profileRef = useScrollAnimation(undefined, undefined, '300ms');
  const cartRef = useScrollAnimation(undefined, undefined, '600ms');
  const joinRef = useScrollAnimation(undefined, undefined, '600ms');

  document.addEventListener('scroll', function () {
    const navbar = document.getElementById('navbar');

    if (window.scrollY > 100) {
      // Adjust the scroll distance as needed
      navbar.classList.remove('bg-transparent');
      navbar.classList.remove('h-32');
      navbar.classList.add('h-20');
      navbar.classList.add('bg-text-dark');
    } else {
      navbar.classList.remove('bg-text-dark');
      navbar.classList.remove('h-20');
      navbar.classList.add('h-32');
      navbar.classList.add('bg-transparent');
    }
  });

  return (
    <div
      id="navbar"
      className="transition-all ease-in-out duration-200 text-white bg-transparent text-xs fixed z-20 top-0 w-full inline-flex px-12 items-center justify-between h-32"
    >
      <div className="flex w-1/3">
        <div
          onClick={openSlider}
          ref={seedlingsRef}
          className="opacity-0 button-transition p-3 rounded-md hover:bg-theme-base/15 cursor-pointer"
        >
          <p>SEEDLINGS</p>
        </div>
      </div>

      <div className="w-1/3 flex items-center justify-center">
        <p ref={logoRef} className="opacity-0 font-belle text-3xl">
          re:forest
        </p>
      </div>
      <div className="inline-flex items-center justify-end gap-5 w-1/3">
        <div className="inline-flex items-center gap-2">
          <div
            onClick={openSlider}
            ref={profileRef}
            className="opacity-0 p-3 hover:bg-theme-base/20 cursor-pointer rounded-md button-transition"
          >
            <Icon sizeRules="w-5 h-5" fill="fill-white">
              <ProfileIcon />
            </Icon>
          </div>
          <div
            onClick={openSlider}
            ref={cartRef}
            className="opacity-0 p-3 hover:bg-theme-base/20 cursor-pointer rounded-md button-transition"
          >
            <Icon
              sizeRules="w-5 h-5"
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
