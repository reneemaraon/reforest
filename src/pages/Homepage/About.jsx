import CustomButton from "../common/Button";
import Advocacies from "./Advocacies";

const AboutItem = ({ children }) => (
  <div className="w-[300px] items-center flex flex-col gap-5">{children}</div>
);

const AboutHeader = ({ children }) => (
  <p className="font-lora text-base text-center"> {children}</p>
);

const Description = ({ children }) => (
  <p className="text-xs leading-[180%] text-center">{children}</p>
);

const AboutImageItem = ({ children }) => <div className="h-8">{children}</div>;

const About = () => {
  return (
    <div className="py-10 gap-8 bg-light-brown-bg inline-flex flex-col w-full items-center">
      <div className="inline-flex flex-col items-center gap-6">
        <p className="text-center font-inter text-xxs">ABOUT US</p>
        <p className="text-center max-w-[500px] font-lora leading-[117%] text-[50px]">
          Join the Movement to Plant a Greener Future
        </p>
      </div>
      <div className="inline-flex gap-12">
        <AboutItem>
          <AboutImageItem>
            <img className="object-fit" src="/src/assets/homepage/tree.png" />
          </AboutImageItem>
          <AboutHeader>Empowering Communities</AboutHeader>
          <Description>
            Our initiative connects passionate individuals and local groups to
            plant trees in urban and rural areas. Together, we can create
            greener, healthier environments for everyone.
          </Description>
        </AboutItem>
        <AboutItem>
          <AboutImageItem>
            <img className="object-fit" src="/src/assets/homepage/hand.png" />
          </AboutImageItem>
          <AboutHeader>Supporting Local Economies</AboutHeader>
          <Description>
            When you purchase a seedling, you’re not only helping the
            environment but also providing meaningful work for those in need,
            fostering economic growth and stability.
          </Description>
        </AboutItem>
        <AboutItem>
          <AboutImageItem>
            <img className="object-fit" src="/src/assets/homepage/earth.png" />
          </AboutImageItem>
          <AboutHeader>Fostering Environmental Stewardship</AboutHeader>
          <Description>
            Your investment in a seedling contributes to long-term climate
            solutions, allowing local communities to take ownership of their
            natural surroundings and ensure a sustainable future.
          </Description>
        </AboutItem>
      </div>
      <CustomButton>BROWSE SEEDLINGS</CustomButton>
      <Advocacies />
    </div>
  );
};

export default About;
