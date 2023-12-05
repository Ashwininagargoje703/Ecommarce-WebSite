import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  getProductAPI,
  getProductCategoryAPI,
  updateProductOptions,
} from "../../store/product/product.actions";
import CategoriesCard from "./CategoriesCard";
import { Typography } from "@material-tailwind/react";

const Categories: React.FC = () => {
  const images = [
    "https://www.insaraf.com/cdn/shop/products/1304856603SC-1731.jpeg?v=1529680864",
    "https://img1.10bestmedia.com/Images/Photos/323494/p-TampaPremiumOutlets4_55_660x440.jpg",
    "https://images.wsj.net/im-707213?width=620&height=413",
    "https://st.depositphotos.com/2389277/3803/i/450/depositphotos_38032529-stock-photo-stack-of-rugs.jpg",
  ];

  const dispatch = useDispatch<any>();

  useEffect(() => {
    dispatch(getProductCategoryAPI());
  }, []);

  const changeCategory = (id: string) => {
    dispatch(updateProductOptions({ categoryId: id }));
    dispatch(getProductAPI());
  };

  const { data } = useSelector((store: any) => store.categories);
  const firstFiveCategories = data ? data.slice(0, 4) : [];

  return (
    <div className="bg-white rounded-lg shadow-md p-4 m-4">
      <Typography style={{ fontWeight: 600 }}>BEST SELLING ITEMS</Typography>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 sm:gap-6 m-15 mt-4">
        {firstFiveCategories.map((category: any, index: number) => (
          <div
            key={category.categoryId}
            onClick={() => changeCategory(category.categoryId)}
          >
            {/* Use index to access the corresponding image URL */}
            <CategoriesCard category={category} image={images[index]} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
