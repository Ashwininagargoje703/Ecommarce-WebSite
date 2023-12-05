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
      <div className={` justify-between mb-3 ${isMobile ? "grid" : "flex"}`}>
        <SearchBox />
        <div className="flex gap-10">
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
      <ProductDetails />
      <BestSellingProducts />
    </div>
  );
};

export default ProdunctDetailsPage;
