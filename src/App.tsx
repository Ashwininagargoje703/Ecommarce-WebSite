import { useMediaQuery } from "@react-hook/media-query";
import React, { useEffect, useState } from "react";
import "tailwindcss/tailwind.css";
import SearchBox from "./components/SearchBar";
import { Button, Footer } from "flowbite-react";
import Filter from "./components/Filter";
import Sort from "./components/Product/Sort";
import Slider from "react-slick";
import SubNavigation from "./components/SubNav";
import Categories from "./components/Categories";
import BestSellingProducts from "./components/BestSellingProducts";
import Product from "./components/Product";
import TopSupplier from "./components/TopSupplier/TopSuppliers";
import SerchingForPage from "./components/Serchingfor";

const App: React.FC = () => {
  const isMobile = useMediaQuery("(max-width: 640px)");

  const [showGoToTop, setShowGoToTop] = useState(false);

  const handleGoToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const checkScrollTop = () => {
    if (!showGoToTop && window.pageYOffset > 400) {
      setShowGoToTop(true);
    } else if (showGoToTop && window.pageYOffset <= 400) {
      setShowGoToTop(false);
    }
  };

  React.useEffect(() => {
    window.addEventListener("scroll", checkScrollTop);
    return () => {
      window.removeEventListener("scroll", checkScrollTop);
    };
  }, [showGoToTop]);

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
      <Slider />
      <Categories />
      <BestSellingProducts />
      <Product />
      <TopSupplier />

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
      <Footer />
    </div>
  );
};
export default App;
