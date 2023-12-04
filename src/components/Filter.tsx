import { Button } from "@material-tailwind/react";
import React, { useState } from "react";

const Filter: React.FC = () => {
  const [showList, setShowList] = useState(false);
  const [showTopSelling, setShowTopSelling] = useState(false);
  const [rangeValue, setRangeValue] = useState(0);
  const [customRangeValue, setCustomRangeValue] = useState("");

  const toggleList = () => {
    setShowList(!showList);
  };

  const toggleTopSelling = () => {
    setShowTopSelling(!showTopSelling);
  };

  const handleRangeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRangeValue(parseInt(e.target.value, 10));
    setCustomRangeValue(""); // Clear custom range when using the slider
  };

  const handleCustomRangeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCustomRangeValue(e.target.value);
    // You might want to add validation for customRangeValue to ensure it's within the desired range
    // For now, I'll assume it's a valid number input
    setRangeValue(parseInt(e.target.value, 10));
  };

  return (
    <div className="mt-4" style={{ width: showList ? "300px" : "auto" }}>
      <button
        className="border border-gray-300 text-black py-2 px-4 rounded"
        onClick={toggleList}
      >
        Filter
      </button>
      {showList && (
        <div
          className="mt-4  border border-gray-300 p-4"
          style={{ width: "250px" }}
        >
          <div className="flex items-center mb-5">
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                value=""
                className="sr-only peer"
                onChange={toggleTopSelling}
              />
              <div
                className={`w-9 h-5  bg-gray-200 peer-focus:outline-none  dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[1px] after:start-[1px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600 ${
                  showTopSelling ? "peer-checked" : ""
                }`}
              ></div>
              <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">
                Top Selling
              </span>
            </label>
          </div>
          <div className="mt-4">
            <div className="flex justify-between">
              <p>Price: {rangeValue}</p>
              <input
                type="number"
                value={customRangeValue}
                onChange={handleCustomRangeChange}
                placeholder="Price"
                className="border border-gray-300 p-2 rounded-md w-28 text-center"
              />
            </div>
            <br />
            <input
              type="range"
              min={0}
              max={100}
              value={rangeValue}
              onChange={handleRangeChange}
              className="w-full"
            />
          </div>

          <Button style={{ backgroundColor: "#009688 " }}>Submit</Button>
        </div>
      )}
    </div>
  );
};

export default Filter;
