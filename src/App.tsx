import React, { useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/Home";
import "tailwindcss/tailwind.css";
import Navbar from "./components/Navbar";
import SearchBox from "./components/SearchBar";
import Slider from "./components/Slider";
import { useDispatch, useSelector } from "react-redux";
import {
  getProductAPI,
  getProductCategoryAPI,
} from "./store/product/product.actions";
// import Categories from "./components/Categories";
import Product from "./components/Product";
import ProductList from "./components/ProductList";
import SliderPage from "./components/SellingProducts";
import Filter from "./components/Filter";
import Categories from "./components/Categories";
import SubNavigation from "./components/SubNav";

const App: React.FC = () => {
  const dispatch = useDispatch<any>();
  const { data } = useSelector((store: any) => store.products);

  return (
    <>
      <Navbar />
      <SearchBox />
      <br />
      <SubNavigation />
      {/* <Filter /> */}
      {/* <Categories /> */}
      <br />
      <br />

      <Slider />
      <Home />

      {/* <Product /> */}
      {/* <ProductList /> */}

      {/* <SliderPage /> */}

      {/* <ProductDetails /> */}
    </>
  );
};

export default App;
