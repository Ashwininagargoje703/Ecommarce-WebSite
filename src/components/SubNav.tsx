import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getProductAPI,
  getProductCategoryAPI,
  updateProductOptions,
} from "../store/product/product.actions";
import { IoIosArrowDown } from "react-icons/io";

const SubNavigation: React.FC = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [showMobileDropdown, setShowMobileDropdown] = useState(false);
  const dispatch = useDispatch<any>();

  useEffect(() => {
    dispatch(getProductCategoryAPI());
  }, [dispatch]);

  const { data } = useSelector((store: any) => store.categories);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const toggleMobileDropdown = () => {
    setShowMobileDropdown(!showMobileDropdown);
  };

  const closeDropdown = () => {
    setShowDropdown(false);
  };

  const changeCategory = (id: string) => {
    console.log("id:", id);
    dispatch(updateProductOptions({ categoryId: id }));
    dispatch(getProductAPI());
    closeDropdown();
  };

  return (
    <nav
      className="bg-white py-3 border border-gray-300 m-4"
      style={{
        borderRadius: 4,
      }}
    >
      <ul className="flex items-center pl-6 container mx-auto hidden md:flex">
        <li
          className="relative"
          // onMouseEnter={toggleDropdown}
          // onMouseLeave={closeDropdown}
        >
          <a
            href="#"
            className="text-gray-800 hover:font-semibold "
            onClick={(e) => {
              e.preventDefault();
              toggleDropdown();
            }}
          >
            <p className="flex">
              {" "}
              All Categories{" "}
              <IoIosArrowDown style={{ marginLeft: 10, marginTop: 5 }} />{" "}
            </p>
          </a>

          {showDropdown && (
            <div
              className="absolute border border-gray-300 mt-5 z-10 bg-white  grid grid-cols-4 p-5 gap-2"
              style={{ width: 900 }}
            >
              {data &&
                data.map((category: any) => (
                  <p
                    className="cursor-pointer font-normal hover:font-semibold hover:text-teal-500"
                    key={category.id}
                    onClick={() => changeCategory(category.categoryId)}
                  >
                    {category.displayName}
                  </p>
                ))}
            </div>
          )}
        </li>

        <li className="flex gap-8 ml-6">
          <a href="#" className="text-gray-800 hover:font-semibold">
            <p className="flex">
              {" "}
              Food <IoIosArrowDown style={{ marginLeft: 10, marginTop: 5 }} />
            </p>
          </a>
          <a href="#" className="text-gray-800 hover:font-semibold">
            <p className="flex">
              Vegitables{" "}
              <IoIosArrowDown style={{ marginLeft: 10, marginTop: 5 }} />
            </p>
          </a>
          <a href="#" className="text-gray-800 hover:font-semibold">
            <p className="flex">
              Bed & Bath{" "}
              <IoIosArrowDown style={{ marginLeft: 10, marginTop: 5 }} />
            </p>
          </a>
          <a href="#" className="text-gray-800 hover:font-semibold">
            <p className="flex">
              Out Doors{" "}
              <IoIosArrowDown style={{ marginLeft: 10, marginTop: 5 }} />
            </p>
          </a>
          <a href="#" className="text-gray-800 hover:font-semibold">
            <p className="flex">
              Decore & Pillows{" "}
              <IoIosArrowDown style={{ marginLeft: 10, marginTop: 5 }} />
            </p>
          </a>

          <a href="#" className="text-gray-800 hover:font-semibold">
            <p className="flex">
              Appliances{" "}
              <IoIosArrowDown style={{ marginLeft: 10, marginTop: 5 }} />
            </p>
          </a>
        </li>
      </ul>

      <div className="md:hidden">
        <a
          href="#"
          className="text-gray-800 hover:font-semibold"
          onClick={(e) => {
            e.preventDefault();
            toggleMobileDropdown();
          }}
        >
          <p className="flex justify-between pl-5 pr-5">
            {" "}
            All Categories{" "}
            <IoIosArrowDown style={{ marginLeft: 10, marginTop: 5 }} />{" "}
          </p>
        </a>
        {showMobileDropdown && (
          <div
            className="border border-gray-300 mt-5 bg-white p-3"
            style={{ width: "100%" }}
          >
            {data &&
              data.map((category: any) => (
                <p key={category.id}>{category.displayName}</p>
              ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default SubNavigation;
