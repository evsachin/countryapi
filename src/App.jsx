import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Countries from "./pages/Countries";
import IndianPlaces from "./pages/IndianPlaces";
import Sidebar from "./component/Sidebar";

function App() {
  return (
    <BrowserRouter>
      <div className="flex min-h-screen">
        <Sidebar />

        <main className="w-full md:ml-72">
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