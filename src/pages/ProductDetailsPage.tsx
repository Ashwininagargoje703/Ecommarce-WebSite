import React from "react";
import ProductDetails from "../components/ProductDetails";
import BestSellingProducts from "../components/BestSellingProducts";
import SearchBox from "../components/SearchBar";
import { Button } from "flowbite-react";
import Filter from "../components/Filter";
import Sort from "../components/Product/Sort";
import SubNavigation from "../components/SubNav";
import { useMediaQuery } from "@react-hook/media-query";

const ProdunctDetailsPage: React.FC = () => {
  const isMobile = useMediaQuery("(max-width: 640px)");

  return (
    <div className="container mx-auto mt-4">
      <div className={`justify-between ${isMobile ? "grid" : "flex"}`}>
        <SearchBox />
      </div>
      <SubNavigation />
      <ProductDetails />
      <BestSellingProducts />
    </div>
  );
};

export default ProdunctDetailsPage;
