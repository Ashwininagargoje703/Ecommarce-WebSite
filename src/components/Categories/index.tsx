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
  const dispatch = useDispatch<any>();

  useEffect(() => {
    dispatch(getProductCategoryAPI());
  }, []);

  const changeCategory = (id: string) => {
    dispatch(updateProductOptions({ categoryId: id }));
    dispatch(getProductAPI());
  };

  const { data } = useSelector((store: any) => store.categories);
  const firstFiveCategories = data ? data.slice(0, 5) : [];

  return (
    <div className=" bg-white rounded-lg shadow-md p-4 m-4">
      <Typography style={{ fontWeight: 600 }}>BEST SELLING ITEMS</Typography>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-5 sm:gap-6 m-15 mt-4">
        {firstFiveCategories.map((category: any) => (
          <div
            key={category.categoryId}
            onClick={() => changeCategory(category.categoryId)}
          >
            <CategoriesCard category={category} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
