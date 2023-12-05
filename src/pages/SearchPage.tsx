import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router";
import { SearchProductCard } from "../components/Product/SearchProductCard";
import SearchBox from "../components/SearchBar";
import Filter from "../components/Filter";
import Sort from "../components/Product/Sort";
import SubNavigation from "../components/SubNav";
import Navbar from "../components/Navbar";
import { Button } from "flowbite-react";
import { useMediaQuery } from "@react-hook/media-query";

const SearchPage: React.FC = () => {
  const { loading, error, data } = useSelector((store: any) => store.search);
  let { term } = useParams();

  const isMobile = useMediaQuery("(max-width: 640px)");

  const dataExtractor = (obj: any) => {
    return {
      name: obj.name,
      price: obj.sale_price,
      image_url: obj.image_url,
      sku: obj.sku,
    };
  };

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
      <p className="my-5">Results for "{term}"</p>
      {loading && <p className="text-blue-300">loading...</p>}
      {error && (
        <p className="text-red-300">something went wrong while fetching data</p>
      )}
      <div
        className={`grid grid-cols-2 gap-4 sm:grid-cols-5 sm:gap-6  bg-white rounded-lg shadow-md p-4 m-4`}
      >
        {!loading &&
          !error &&
          data?.product_collection?.map((item: any, idx: number) => (
            <SearchProductCard key={idx} product={dataExtractor(item)} />
          ))}
      </div>
    </div>
  );
};

export default SearchPage;
