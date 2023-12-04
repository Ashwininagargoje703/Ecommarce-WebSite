import { button } from "@material-tailwind/react";
import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { searchProductAPI } from "../store/product/product.actions";
import { useNavigate } from "react-router";

const SearchBox: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const { searchStrings, data } = useSelector((store: any) => store.search);
  const dispatch = useDispatch<any>();
  const navigate = useNavigate();

  const searchItem = () => {
    if (searchTerm.length === 0) return;
    if (data.keyword !== searchTerm.trim()) {
      dispatch(searchProductAPI(searchTerm));
    }
    navigate(`/search/${searchTerm}`);
    setSearchTerm("");
  };

  const searchItemChange = (value: string) => {
    setSearchTerm(value);
  };

  return (
    <div className="flex">
      <div className="flex items-center border border-1 border-gray-400 py-1 relative">
        <input
          className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-1 leading-tight focus:outline-none"
          type="text"
          placeholder="Search..."
          aria-label="Search"
          value={searchTerm}
          onChange={(e) => searchItemChange(e.target.value)}
        />
        {searchTerm.length > 0 && (
          <div className="absolute top-9 bg-gray-50 w-full h-50 overflow-auto z-20">
            {searchStrings?.map((item: string, idx: number) => (
              <li
                key={idx}
                onClick={() => {
                  searchItemChange(item);
                }}
                className="list-none px-2 mb-1 cursor-pointer"
              >
                {item}
              </li>
            ))}
          </div>
        )}
      </div>

      <button
        className="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-6"
        type="button"
        onClick={searchItem}
      >
        <FaSearch />
      </button>
    </div>
  );
};

export default SearchBox;
