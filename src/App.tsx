import React, { useEffect } from "react";
import "tailwindcss/tailwind.css";
import Navbar from "./components/Navbar";
import SearchBox from "./components/SearchBar";
import Slider from "./components/Slider";
import { useDispatch, useSelector } from "react-redux";
import Product from "./components/Product";
import ProductList from "./components/ProductList";
import Filter from "./components/Filter";
import Sort from "./components/Product/Sort";
import Categories from "./components/Categories";
import SubNavigation from "./components/SubNav";
import Footer from "./components/Footer";
import BestSellingProducts from "./components/BestSellingProducts";

const App: React.FC = () => {
  const dispatch = useDispatch<any>();
  const { data } = useSelector((store: any) => store.products);

  return (
    <>
      {/* <Navbar />
      <SearchBox />
      <br />
      <SubNavigation /> */}
      {/* <Filter /> */}
      {/* <Categories /> */}
      <br />
      <br />
      {/* <Sort /> */}
      {/* <Slider />
      <Home /> */}

      {/* <Product />

      <ProductList />
      <Product /> */}

      {/* <SliderPage /> */}

      {/* <ProductDetails /> */}
    </>
  );
};

export default App;
