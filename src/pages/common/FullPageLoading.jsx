import LoadingAnimation from './LoadingAnimation';

const FullPageLoading = () => {
  return (
    <div className="w-full h-80 min-h-screen inline-flex justify-center items-center">
      <div className="w-44">
        <LoadingAnimation />
      </div>
    </div>
  );
};

export default FullPageLoading;
