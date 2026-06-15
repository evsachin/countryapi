import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Countries from "./pages/Countries";
import IndianPlaces from "./pages/IndianPlaces";
import Sidebar from "./component/Sidebar";

function App() {
  return (
    <BrowserRouter>
      <div className="flex">
        <Sidebar />

        <main className="ml-72 w-full">
          <Routes>{/* Routes */}</Routes>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/countries" element={<Countries />} />
            <Route path="/places" element={<IndianPlaces />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
