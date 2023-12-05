import React from "react";
import { FaRegHeart } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import { FaRegBell } from "react-icons/fa";
import { HiOutlineCreditCard } from "react-icons/hi2";
import { FiMenu } from "react-icons/fi";
import { IoMdArrowDropdown } from "react-icons/io";
import { Avatar, Button } from "@material-tailwind/react";
import { CiSearch } from "react-icons/ci";
import { useMediaQuery } from "@react-hook/media-query";

const Navbar: React.FC = () => {
  const isMobile = useMediaQuery("(max-width: 640px)");

  return (
    <nav className="bg-white text-black p-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center flex-shrink-0 text-black mr-6">
          <a
            href="#"
            className="block mt-4 lg:inline-block lg:mt-0 text-black mr-4"
          >
            <FiMenu />
          </a>
          <img
            src="https://i.ibb.co/ynLNf5P/Whats-App-Image-2023-12-01-at-9-13-06-PM.jpg"
            alt="logo"
            className="w-8 h-8" // Set the width and height of the image
          />
          <span className="hidden lg:inline-block ml-4 text">Catalog</span>
          <span className="hidden lg:inline-block ml-4 text">BuyDesk</span>
          <span className="hidden lg:inline-block ml-4 text">History</span>
          <span className="hidden lg:inline-block ml-4 text">Dashboard</span>
        </div>

        <div>
          <div className="flex items-center">
            <div className="relative hidden lg:block">
              <input
                type="text"
                placeholder="Search"
                className="border border-gray-300 px-2 py-2 rounded-md focus:outline-none focus:border-blue-500"
              />
              <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none ">
                <CiSearch />
              </div>
            </div>
            <button
              className="border  text-#01caca  p-2 ml-4 text-xs mr-4 hidden lg:block "
              style={{
                borderRadius: "4px",
                border: "1px solid #01caca",
                color: "#01caca ",
              }}
            >
              Help
            </button>

            <a
              href="#"
              className="block mt-4 lg:inline-block lg:mt-0 text-black mr-4"
            >
              <HiOutlineCreditCard fontSize={24} color="#666666" />
            </a>

            <a
              href="#"
              className="block mt-4 lg:inline-block lg:mt-0 text-black mr-4"
            >
              <FaRegHeart fontSize={23} color="#666666" />
            </a>
            <a
              href="#"
              className="block mt-4 lg:inline-block lg:mt-0 text-black mr-4"
            >
              <IoCartOutline fontSize={24} color="#666666" />
            </a>
            <a
              href="#"
              className="block mt-4 lg:inline-block lg:mt-0 text-black"
            >
              <FaRegBell fontSize={22} color="#666666" />
            </a>

            <div
              className="flex"
              style={{
                marginTop: isMobile ? "10px" : "",
              }}
            >
              <Avatar
                src="https://docs.material-tailwind.com/img/face-2.jpg"
                alt="avatar"
                size="sm"
                className="ml-5"
              />
              <span
                className="text-sm text-#666666 ml-2 hidden lg:block"
                style={{
                  marginTop: isMobile ? "" : "10px",
                }}
              >
                Ashwini
              </span>
              <IoMdArrowDropdown
                fontSize={21}
                style={{ marginLeft: 4, marginTop: isMobile ? "8px" : "10px" }}
              />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
