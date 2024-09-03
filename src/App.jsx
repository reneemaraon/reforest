import { Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Homepage from './pages/Homepage/Homepage';
import Footer from './common/Footer';

function App() {
  return (
    <div className="bg-white w-full relative font-inter leading-[117%] text-text-dark flex-col inline-flex">
      <Navbar />
      <Routes>
        <Route index element={<Homepage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
