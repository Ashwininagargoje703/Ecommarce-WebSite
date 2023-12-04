import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProductAPI } from "../../store/product/product.actions";
import { ProductCard } from "./ProductCard";

interface Product {
  name: string;
  // Other properties of the product
}

const Product: React.FC = () => {
  const dispatch = useDispatch<any>();
  const [showAll, setShowAll] = useState(false);
  const initialDisplayCount = 15;

  useEffect(() => {
    dispatch(getProductAPI(1));
  }, [dispatch]);

  const { data } = useSelector((store: any) => store.products);

  const toggleShowAll = () => {
    setShowAll(!showAll);
  };

  const visibleProducts = showAll
    ? data?.browse?.products || []
    : data?.browse?.products?.slice(0, initialDisplayCount) || [];

  return (
    <div>
      {/* <h2>Products</h2> */}
      {(data?.browse?.products?.length || 0) > initialDisplayCount && (
        <div className="text-right mb-4">
          <button
            onClick={toggleShowAll}
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            {showAll ? "Show Less" : "Show More"}
          </button>
        </div>
      )}
      <div
        className={`grid grid-cols-2 gap-4 sm:grid-cols-5 sm:gap-6  bg-white rounded-lg shadow-md p-4 m-4`}
      >
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
