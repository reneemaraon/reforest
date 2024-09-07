import { Routes, Route } from "react-router-dom";
import Navbar from "./pages/Navbar";
import Homepage from "./pages/Homepage/Homepage";
import Footer from "./pages/common/Footer";
import MockupDisclaimerPopup from "./pages/common/MockupPopup";

function App() {
  return (
    <div className="bg-white w-full relative font-inter leading-[117%] text-text-dark flex-col inline-flex">
      <MockupDisclaimerPopup />
      <Navbar />
      <Routes>
        <Route index element={<Homepage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
