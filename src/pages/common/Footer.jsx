const Footer = () => {
  return (
    <div className="w-full bg-black text-sm font-light text-white">
      <div className="w-full inline-flex justify-between px-36 py-20">
        <p>re:forest</p>
        <div className="inline-flex gap-44">
          <div className="flex flex-col gap-7">
            <p>About</p>
            <p>Docs</p>
            <p>FAQ</p>
          </div>
          <div className="flex flex-col gap-7">
            <p>Contact</p>
            <p>Privacy Policy</p>
            <p>Terms & Conditions</p>
          </div>
        </div>
        <div className="inline-flex gap-8">
          <img
            className="h-5 w-5"
            src="/src/assets/homepage/fb.png"
            alt="facebook"
          />
          <img
            className="h-5 w-5"
            src="/src/assets/homepage/ig.png"
            alt="Instagram"
          />
          <img
            className="h-5 w-5"
            src="/src/assets/homepage/tw.png"
            alt="Twitter/X"
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;
