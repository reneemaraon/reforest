import { Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Homepage from "./pages/Homepage/Homepage";

function App() {
  return (
    <div className="bg-white w-full relative font-inter flex-col inline-flex">
      <Navbar />
      <Routes>
        <Route index element={<Homepage />} />
      </Routes>
    </div>
  );
}

export default App;
