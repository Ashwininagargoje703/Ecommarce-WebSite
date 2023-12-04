import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProductCategoryAPI } from "../store/product/product.actions";
import { IoIosArrowDown } from "react-icons/io";

const SubNavigation: React.FC = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const dispatch = useDispatch<any>();

  useEffect(() => {
    dispatch(getProductCategoryAPI(1));
  }, [dispatch]);

  const { data } = useSelector((store: any) => store.categories);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const closeDropdown = () => {
    setShowDropdown(false);
  };

  return (
    <nav className="bg-white py-4 border border-gray-300">
      <ul className="flex items-center container mx-auto">
        <li
          className="relative"
          onMouseEnter={toggleDropdown}
          onMouseLeave={closeDropdown}
        >
          <a
            href="#"
            className="text-gray-800 hover:font-semibold"
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
                  <p key={category.id}>{category.displayName}</p>
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
    </nav>
  );
};

export default SubNavigation;
