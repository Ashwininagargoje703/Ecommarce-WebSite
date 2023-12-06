import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProductAPI } from "../../store/product/product.actions";
import { Button } from "flowbite-react";
import { BiSortAlt2 } from "react-icons/bi";

export default function Sort() {
  const { data, loading } = useSelector((store: any) => store.products);
  const dispatch = useDispatch<any>();
  const [showSortOptions, setShowSortOptions] = useState(false); // State to manage visibility of sort options

  type Sort = {
    id: number;
    name: string;
  };

  if (!data?.browse) {
    return <></>;
  }

  const toggleSortOptions = () => {
    setShowSortOptions(!showSortOptions); // Toggles the visibility of sort options
  };

  return (
    <div className="relative float-right">
      {/* Button to toggle sort options */}
      <Button
        className="border-gray-300"
        style={{
          color: "black",
          backgroundColor: "white",
          textTransform: "none",
          fontWeight: 600,
          height: 40,
          width: 100,
        }}
        onClick={toggleSortOptions}
      >
        Sort{" "}
        <BiSortAlt2 style={{ fontSize: 18, marginLeft: 10, marginTop: 2 }} />
      </Button>

      {showSortOptions && (
        <div className="absolute bg-white shadow-md p-2 mt-1 z-20 right-0">
          {data.browse.sort.availableSorts.map((item: Sort) => (
            <div
              onClick={() => {
                if (loading) return;
                dispatch(getProductAPI(item.id));
                toggleSortOptions();

                // Hide options after selecting
              }}
              key={item.id}
              className={`text-gray-900 cursor-pointer text-sm w-52 ${
                data.browse.sort.appliedSort.id === item.id
                  ? "bg-teal-400"
                  : "text-black"
              }  p-2`}
            >
              {item.name}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
