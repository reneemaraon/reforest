import fbUrl from "/src/assets/homepage/fb.png";
import igUrl from "/src/assets/homepage/ig.png";
import twtUrl from "/src/assets/homepage/tw.png";

const Footer = () => {
  return (
    <div className="w-full bg-black text-xxs sm:text-xs md:text-sm font-light text-white">
      <div className="w-full inline-flex justify-between flex-wrap gap-6 px-4 sm:px-20 md:px-36 py-6 sm:py-12 md:py-20">
        <p className="cursor-pointer">re:forest</p>
        <div className="inline-flex gap-10 sm:gap-20 md:gap-44">
          <div className="flex flex-col gap-7">
            <p className="cursor-pointer hover:underline">About</p>
            <p className="cursor-pointer hover:underline">Docs</p>
            <p className="cursor-pointer hover:underline">FAQ</p>
          </div>
          <div className="flex flex-col gap-7">
            <p className="cursor-pointer hover:underline">Contact</p>
            <p className="cursor-pointer hover:underline">Privacy Policy</p>
            <p className="cursor-pointer hover:underline">Terms & Conditions</p>
          </div>
        </div>
        <div className="inline-flex max-[600px]:flex-col gap-4 sm:gap-6 md:gap-8">
          <img
            className="sm:h-5 sm:w-5 h-4 w-4 cursor-pointer"
            src={fbUrl}
            alt="facebook"
          />
          <img
            className="sm:h-5 sm:w-5 h-4 w-4 cursor-pointer"
            src={igUrl}
            alt="Instagram"
          />
          <img
            className="sm:h-5 sm:w-5 h-4 w-4 cursor-pointer"
            src={twtUrl}
            alt="Twitter/X"
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;
