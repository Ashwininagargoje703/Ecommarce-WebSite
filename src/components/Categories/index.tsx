import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProductCategoryAPI } from "../../store/product/product.actions";
import CategoriesCard from "./CategoriesCard";

const Categories: React.FC = () => {
  const dispatch = useDispatch<any>();

  useEffect(() => {
    dispatch(getProductCategoryAPI(1));
  }, []);

  const { data } = useSelector((store: any) => store.categories);
  console.log("getProductCategoryAPI", data);
  const firstFiveCategories = data ? data.slice(0, 5) : [];

  return (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-5 sm:gap-6 m-15 bg-white rounded-lg shadow-md p-4 m-4">
      {firstFiveCategories.map((category: any) => (
        <div key={category.id}>
          <CategoriesCard category={category} />
        </div>
      ))}
    </div>
  );
};

export default Categories;
