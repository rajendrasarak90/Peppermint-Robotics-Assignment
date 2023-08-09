import { Routes, Route } from "react-router-dom";
import IndexPage from "./pages/IndexPage";
import CareerPage from "./pages/CareerPage";

export default function App() {
  return (
    <div className="text-center p-4">
      <div className="flex mb-5 justify-center gap-2">
        <img
          className="w-14 h-14"
          src="https://getpeppermint.co/wp-content/uploads/2022/02/cropped-icon_fa1-removebg-preview.png"
        />
        <h1 className="text-4xl">Peppermint Robotics</h1>
      </div>
      <Routes>
        <Route path="/" element={<IndexPage />} />
        <Route path="/careers" element={<CareerPage />} />
      </Routes>
    </div>
  );
}
