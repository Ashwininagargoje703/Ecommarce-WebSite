import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import "tailwindcss/tailwind.css";

const App: React.FC = () => {
  return (
    <>
      <Navbar />
      <Home />
    </>
  );
};

export default App;
