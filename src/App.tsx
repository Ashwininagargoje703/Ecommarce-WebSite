import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/Home";
import "tailwindcss/tailwind.css";
import Navbar from "./components/Navbar";
import SearchBox from "./components/SearchBar";
import Slider from "./components/Slider";
import Footer from "./components/Footer";
import { ProductCard } from "./components/ProductCard";
import { CategoriesCard } from "./components/Categories/Categories";

const App: React.FC = () => {
  return (
    <>
      {/* <Navbar />
      <SearchBox /> */}
      <br />
      <br />

      {/* <Slider /> */}
      <CategoriesCard />
      <br />
      <br />

      {/* <ProductCard />
      <Footer /> */}
    </>
  );
};

export default App;
