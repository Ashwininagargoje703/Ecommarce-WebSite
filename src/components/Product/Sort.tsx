import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProductAPI } from "../../store/product/product.actions";
import { Button } from "flowbite-react";

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
        style={{
          color: "black",
          backgroundColor: "white",
          border: "1px solid gray",
          textTransform: "none",
          fontWeight: 600,
          height: 40,
          width: 100,
        }}
        onClick={toggleSortOptions}
      >
        Sort
      </Button>

      {showSortOptions && (
        <div className="absolute bg-white shadow-md p-2 mt-1 z-20 right-0">
          {data.browse.sort.availableSorts.map((item: Sort) => (
            <div
              onClick={() => {
                if (loading) return;
                dispatch(getProductAPI(item.id));
                toggleSortOptions(); // Hide options after selecting
              }}
              key={item.id}
              className={`text-gray-900 cursor-pointer ${
                data.browse.sort.appliedSort.id === item.id
                  ? "bg-blue-500"
                  : "bg-deep-orange-300"
              } my-2 p-2`}
            >
              {item.name}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
