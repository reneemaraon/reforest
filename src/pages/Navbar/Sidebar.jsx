import React from "react";
import Slider from "../common/Slider";
import { usePopupContext } from "../../context/PopupContext";

const Sidebar = ({ showModal, setShowModal }) => {
  const { setShowSlider } = usePopupContext();

  const onLinkClick = () => {
    setShowModal(false);
    setShowSlider(true);
  };

  return (
    <Slider left showModal={showModal} setShowModal={setShowModal}>
      <div className="flex flex-col text-text-dark px-4 h-full">
        <div className="px-4 pt-8 pb-5 border-b-1 border-opacity-50">
          <p className="font-belle text-2xl leading-[100%]">re:forest</p>
        </div>
        <div
          onClick={onLinkClick}
          className="w-full gap-1 flex flex-col px-2 py-9"
        >
          <div className="rounded-md hover:bg-primary-green text-base hover:text-white p-4 cursor-pointer">
            <p>Seedlings</p>
          </div>
          <div className="rounded-md hover:bg-primary-green text-base hover:text-white p-4 cursor-pointer">
            <p>Profile</p>
          </div>
          <div className="rounded-md hover:bg-primary-green text-base hover:text-white p-4 cursor-pointer">
            <p>Cart</p>
          </div>
          <div></div>
        </div>
        <div className="h-full flex flex-col justify-end pb-8">
          <p className="text-xxs p-4 decoration-primary-green">
            This is a dummy site created for example purposes. All navigation
            and interactive elements are non-functional and meant only for show.
            <br />
            <br />
            Curious to see more? Contact me via{" "}
            <a
              className="underline"
              href="mailto:reneemaraon@gmail.com"
              rel="noopener noreferrer"
              target="_blank"
            >
              email
            </a>{" "}
            or visit my{" "}
            <a
              className="underline"
              href="https://github.com/reneemaraon"
              rel="noopener noreferrer"
              target="_blank"
            >
              Github
            </a>{" "}
            for additional projects.
          </p>
        </div>
      </div>
    </Slider>
  );
};

export default Sidebar;
