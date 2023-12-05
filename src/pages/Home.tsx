import React from "react";
import Navbar from "../components/Navbar";
import SearchBox from "../components/SearchBar";
import Filter from "../components/Filter";
import Sort from "../components/Product/Sort";
import Product from "../components/Product";
import Categories from "../components/Categories";
import BestSellingProducts from "../components/BestSellingProducts";
import SubNavigation from "../components/SubNav";
import TopSupplier from "../components/TopSupplier/TopSuppliers";
import { useMediaQuery } from "@react-hook/media-query";

import { Button, Footer } from "flowbite-react";
import Slider from "../components/Slider";

const Home: React.FC = () => {
  const isMobile = useMediaQuery("(max-width: 640px)");

  return (
    <div className="container mx-auto mt-4">
      <div className={`justify-between ${isMobile ? "grid" : "flex"}`}>
        <SearchBox />
        <div
          className="flex gap-10"
          style={{
            marginLeft: isMobile ? "16px" : "",
            marginTop: isMobile ? "10px" : "",
          }}
        >
          <Button
            className="hidden md:block"
            style={{
              border: "2px solid #009688",
              color: "#009688",
              fontWeight: 700,
              height: 40,
            }}
          >
            Upload
          </Button>

          <div className="flex gap-10 ">
            <div>
              <Filter />
            </div>
            <div>
              <Sort />
            </div>
          </div>
        </div>
      </div>
      <SubNavigation />
      <Slider />
      <Categories />
      <BestSellingProducts />
      <Product />
      <TopSupplier />
      <Footer />
    </div>
  );
};

export default Home;
