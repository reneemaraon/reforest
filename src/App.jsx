import { Routes, Route } from 'react-router-dom';
import Navbar from './pages/Navbar';
import Homepage from './pages/Homepage/Homepage';
import Footer from './pages/common/Footer';
import FullPageLoading from './pages/common/FullPageLoading';
import MockupDisclaimerPopup from './pages/common/MockupPopup';
import { useState } from 'react';

function App() {
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  const handleImageLoad = () => {
    setIsImageLoaded(true); // Set image loaded to true once it's done
  };

  return (
    <div className="bg-white w-full relative font-inter leading-[117%] text-text-dark flex-col inline-flex">
      <MockupDisclaimerPopup />
      {!isImageLoaded && <FullPageLoading />}
      {isImageLoaded && <Navbar />}
      <Routes>
        <Route
          index
          element={
            <Homepage
              isImageLoaded={isImageLoaded}
              handleImageLoad={handleImageLoad}
            />
          }
        />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
