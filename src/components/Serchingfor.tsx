// SerchingForPage.tsx
import { Chip } from "@material-tailwind/react";
import { useMediaQuery } from "@react-hook/media-query";
import React from "react";

const SerchingForPage: React.FC = () => {
  const itemList = [
    "Construction Helmet",
    "Saws",
    "Cider",
    "Apple Juice",
    "Construction Costume blue",
    "Tapes",
    "Construction suit",
    "Pullers",
    "Pickaxes and Crowbars",
    "Carrots",
    "Construction hammer",
    "Screwdrivers",
    "Wrenches",
    "Construction Shovels",
    "Construction Costume blue",
    "Pullers",
    "Kinoa",
    "Banana",
  ];

  const isMobile = useMediaQuery("(max-width: 640px)");

  return (
    <div className="bg-white rounded-lg shadow-md p-4 m-4">
      <h1 className="text-2xl font-bold mb-4">People Searching For</h1>
      {isMobile ? (
        <div className="flex flex-wrap">
          {itemList.slice(0, 6).map((item, index) => (
            <Chip
              variant="outlined"
              key={index}
              value={item}
              style={{
                backgroundColor: "#f8fcff",
                marginLeft: 10,
                marginBottom: 5,
                border: "1px solid #e0e0e0 ",
              }}
            />
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-3 gap-4">
          {itemList.map((item, index) => (
            <Chip
              variant="outlined"
              key={index}
              value={item}
              style={{
                backgroundColor: "#f8fcff",
                marginLeft: 10,
                marginBottom: 5,
                border: "1px solid #e0e0e0 ",
              }}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default SerchingForPage;
