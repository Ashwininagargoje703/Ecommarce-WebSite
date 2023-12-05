import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { ProductCard } from "../components/Product/ProductCard";
import ProductListing from "../components/ProductList";
import Filter from "../components/Filter";
import Sort from "../components/Product/Sort";
import SubNavigation from "../components/SubNav";
import { Button } from "flowbite-react";
import SearchBox from "../components/SearchBar";
import { useMediaQuery } from "@react-hook/media-query";

interface Product {
  name: string;
  // Other properties of the product
}
const ProductListingPage: React.FC = () => {
  const isMobile = useMediaQuery("(max-width: 640px)");

  return (
    <div>
      <div
        className={` justify-between mb-3 pl-4 pr-4 ${
          isMobile ? "grid" : "flex"
        }`}
      >
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
      <ProductListing />
    </div>
  );
};

export default ProductListingPage;
