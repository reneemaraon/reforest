import { usePopupContext } from "../../context/PopupContext";
import CustomButton from "./Button";
import Slider from "./Slider";

const MockupDisclaimerPopup = () => {
  const { showSlider, setShowSlider } = usePopupContext();

  return (
    <Slider setShowModal={setShowSlider} showModal={showSlider}>
      <div className="flex flex-col px-4">
        <div className="px-4 pt-8 pb-5 border-b-1 border-opacity-50">
          <p className="font-lora text-2xl leading-[100%]">
            Mockup Site Disclaimer
          </p>
        </div>
        <div className="w-full gap-10 flex flex-col px-4 py-9">
          <p className="text-base decoration-primary-green">
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
          <div>
            <CustomButton
              onClick={() =>
                window.open("https://github.com/reneemaraon", "_blank")
              }
            >
              Contact Developer
            </CustomButton>
          </div>
        </div>
      </div>
    </Slider>
  );
};

export default MockupDisclaimerPopup;
