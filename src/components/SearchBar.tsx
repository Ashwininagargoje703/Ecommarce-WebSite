import { button } from "@material-tailwind/react";
import React from "react";
import { FaSearch } from "react-icons/fa";

const SearchBox: React.FC = () => {
  return (
    <div className="flex">
      <div className="flex items-center border border-1 border-gray-400 py-1 ">
        <input
          className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-1 leading-tight focus:outline-none"
          type="text"
          placeholder="Search..."
          aria-label="Search"
        />
      </div>

      <button
        className="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-6"
        type="button"
        // Adjust the height as needed
      >
        <FaSearch />
      </button>
    </div>
  );
};

export default SearchBox;
