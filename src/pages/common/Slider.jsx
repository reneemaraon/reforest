import Icon from "./Icon";
import { CloseIcon } from "./IconSvg";

const Slider = ({ children, showModal, setShowModal }) => {
  return (
    <div
      onClick={() => setShowModal(false)}
      className={`${
        showModal ? "inline-flex" : "hidden"
      }  overflow-clip bg-black/10 bg-opacity-20 backdrop-blur-[1px] fixed top-0 right-0 left-0 z-[80] w-full md:inset-0 h-full`}
    >
      <div className="relative w-full h-full">
        <div
          onClick={(e) => e.stopPropagation()}
          className="absolute right-0 top-0 h-full w-full max-w-[500px] bg-white shadow"
        >
          <button
            type="button"
            onClick={() => setShowModal(false)}
            className="my-4 mx-2 absolute top-3 end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center"
            data-modal-hide="popup-modal"
          >
            <Icon>
              <CloseIcon />
            </Icon>
            <span className="sr-only">Close modal</span>
          </button>
          {children}
        </div>
      </div>
    </div>
  );
};

export default Slider;
