import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { ProductCard } from "../components/Product/ProductCard";
import { Spinner, Typography } from "@material-tailwind/react";

interface Product {
  name: string;
  // Other properties of the product
}
const ProductListing: React.FC = () => {
  const dispatch = useDispatch();
  const { data, loading } = useSelector((store: any) => store.products);

  if (loading) {
    return (
      <div>
        <Spinner className="h-10 w-10" color="teal" />
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow-md p-4 m-4">
      <Typography style={{ fontWeight: 600 }}>All Products</Typography>
      <br />
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-5 sm:gap-6 ">
        {data?.browse?.products.length > 0 ? (
          data?.browse?.products.map((product: Product, index: number) => (
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

export default ProductListing;
