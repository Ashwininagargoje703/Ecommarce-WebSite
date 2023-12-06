import React, { useState } from "react";
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

  return (
    <div className="container mx-auto mt-4">
      <div className={`justify-between ${isMobile ? "grid" : "flex"}`}>
        <SearchBox />
      </div>
      <SubNavigation />
      <ProductDetails />
      <BestSellingProducts />

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

export default ProdunctDetailsPage;
