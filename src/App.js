import React from "react";
import Navbar from "./components/navbar/Navbar";
import Home from "./components/home/Home";
import Msg from "./components/massageForAll/Msg";
const App = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <Msg />
    </div>
  );
};

export default App;
