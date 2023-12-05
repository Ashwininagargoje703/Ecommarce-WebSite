import React, { useEffect, useState } from "react";
import { getProductAPI } from "../../store/product/product.actions";
import { ProductCard } from "./ProductCard";
import { useNavigate } from "react-router-dom";
import { Typography } from "@material-tailwind/react";
import { useDispatch, useSelector } from "react-redux";

interface Product {
  name: string;
  // Other properties of the product
}

const Product: React.FC = () => {
  const dispatch = useDispatch<any>();
  const [showAll, setShowAll] = useState(false);
  const navigate = useNavigate();
  const initialDisplayCount = 15;

  const navigateToProductListing = () => {
    navigate("/product-list"); // Use navigate to go to product listing
  };

  const { data, loading } = useSelector((store: any) => store.products);

  console.log(data, "data");

  const visibleProducts = showAll
    ? data?.browse?.products || []
    : data?.browse?.products?.slice(0, initialDisplayCount) || [];

  if (loading) {
    return (
      <div className="flex justify-center align-middle text-lg m-5">
        Loading...
      </div>
    );
  }

  return (
    <div className=" bg-white rounded-lg shadow-md p-4 m-4">
      {(data?.browse?.products?.length || 0) > initialDisplayCount && (
        <div className=" mb-4 justify-between flex">
          <Typography style={{ fontWeight: 600 }}>ALL ITEMS</Typography>

          <button onClick={navigateToProductListing} className=" text-blue">
            Show More
          </button>
        </div>
      )}
      <div className={`grid grid-cols-2 gap-4 sm:grid-cols-5 sm:gap-6 `}>
        {visibleProducts.length > 0 ? (
          visibleProducts.map((product: Product, index: number) => (
            <div key={index}>
              <ProductCard product={product} />
            </div>
          ))
        ) : (
          <p>No products available</p>
        )}
      </div>
    </div>
  );
};

export default Product;
