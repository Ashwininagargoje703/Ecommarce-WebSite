import React, { useState } from "react";
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
import { Spinner } from "@material-tailwind/react";
import SerchingForPage from "../components/Serchingfor";

const SearchPage: React.FC = () => {
  const { loading, error, data } = useSelector((store: any) => store.search);
  let { term } = useParams();

  const isMobile = useMediaQuery("(max-width: 640px)");

  const [showGoToTop, setShowGoToTop] = useState(false);

  // Function to handle scrolling to the top
  const handleGoToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Function to check scroll position and toggle visibility of the Go To Top button
  const checkScrollTop = () => {
    if (!showGoToTop && window.pageYOffset > 400) {
      setShowGoToTop(true);
    } else if (showGoToTop && window.pageYOffset <= 400) {
      setShowGoToTop(false);
    }
  };

  // Add scroll event listener when component mounts
  React.useEffect(() => {
    window.addEventListener("scroll", checkScrollTop);
    return () => {
      window.removeEventListener("scroll", checkScrollTop);
    };
  }, [showGoToTop]);

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

          <div className="flex gap-10 mr-4">
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
      <p className="m-4 font-semibold">Results for "{term}"</p>
      {loading && (
        <p className="text-blue-300">
          <Spinner className="h-10 w-10" color="teal" />
        </p>
      )}
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
      <SerchingForPage />

      {showGoToTop && (
        <Button
          className="fixed bottom-4 right-4 md:bottom-8 md:right-8 z-50"
          onClick={handleGoToTop}
          style={{
            backgroundColor: "#009688",
            color: "#fff",
            borderRadius: "50%",
            width: "50px",
            height: "50px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
          }}
        >
          ↑
        </Button>
      )}
    </div>
  );
};

export default SearchPage;
