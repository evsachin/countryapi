import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Home from "./pages/Home";
import Countries from "./pages/Countries";
import IndianPlaces from "./pages/IndianPlaces";
import Sidebar from "./component/Sidebar";
import JavaScriptNotes from "./pages/JavaScriptNotes";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <BrowserRouter>
      <div className="flex min-h-screen">
        <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />

        <main className="flex-1 md:ml-72">
          {/* Mobile Navbar */}
          <div className="md:hidden flex items-center justify-between p-4 bg-slate-900 text-white">
            <h1 className="font-bold text-xl">
              🌍 Explorer
            </h1>

            <button
              onClick={() => setIsOpen(true)}
              className="text-3xl"
            >
              ☰
            </button>
          </div>

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/countries" element={<Countries />} />
            <Route path="/places" element={<IndianPlaces />} />
            <Route path="/javascript-notes" element={<JavaScriptNotes />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;