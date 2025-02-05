import React from "react";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <div className="relative bg-[#e7e7e7]">
      <div className="flex justify-center sticky top-5 z-10">
        <Navbar />
      </div>
      <Home />
    </div>
  );
}

export default App;
