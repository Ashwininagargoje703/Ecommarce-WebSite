import { button } from "@material-tailwind/react";
import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { searchProductAPI } from "../store/product/product.actions";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { useMediaQuery } from "@react-hook/media-query";

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
  const isMobile = useMediaQuery("(max-width: 640px)");

  return (
    <div
      className="flex items-center border border-1 border-gray-300 relative h-10 justify-between ml-4 mr-4 "
      style={{
        borderTopLeftRadius: 4,
        borderBottomLeftRadius: 4,
        width: isMobile ? "91vw" : "60vw",
        borderTopRightRadius: 4,
        borderBottomRightRadius: 4,
        height: 42,
      }}
    >
      <div>
        <input
          className="appearance-none bg-white border-none w-full text-gray-700 mr-3 py-1 px-1 leading-tight focus:outline-none border-spacing-4"
          type="text"
          placeholder="Search..."
          aria-label="Search"
          value={searchTerm}
          onChange={(e) => searchItemChange(e.target.value)}
        />
        {searchTerm.length > 0 && (
          <div className="absolute top-12 w-full h-50 overflow-auto z-20 border-gray-300 shadow-md rounded-lg bg-white">
            {searchStrings?.map((item: string, idx: number) => (
              <div
                key={idx}
                onClick={() => {
                  searchItemChange(item);
                }}
              >
                <li className="list-none px-2 mb-1 cursor-pointer pl-4 p-3 border-b border-blue-50">
                  {item}
                </li>
              </div>
            ))}
          </div>
        )}
      </div>
      <div
        style={{
          backgroundColor: "#009688",
          height: "100%",
          width: "90px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderTopRightRadius: 4,
          borderBottomRightRadius: 4,
        }}
        onClick={searchItem}
      >
        <FaSearch style={{ color: "white" }} />
      </div>
    </div>
  );
};

export default SearchBox;
