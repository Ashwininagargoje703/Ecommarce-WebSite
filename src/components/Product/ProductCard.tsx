import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import React, { useState } from "react";
import { PiHeartBold } from "react-icons/pi";
import { useNavigate } from "react-router-dom";
import { getProductDetailsAPI } from "../../store/product/product.actions";
import { useDispatch, useSelector } from "react-redux";
import { useMediaQuery } from "@react-hook/media-query";

export function ProductCard({ product }: { product: any }) {
  const navigate = useNavigate();
  const dispatch = useDispatch<any>();
  const [quantity, setQuantity] = useState<number>(1);
  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };
  const getProductDetailsAndNavigate = (sku: string, productName: string) => {
    dispatch(getProductDetailsAPI(sku)).then(() => {
      navigate(`/product-details/${sku}`, { state: { productName } });
    });
  };

  const handleAddToWishlist = () => {
    // Logic to add to wishlist
    console.log("Added to wishlist!");
  };

  const isMobile = useMediaQuery("(max-width: 640px)");

  const truncateText = (text: string, limit: number) => {
    const words = text.split(" ");
    if (words.length > limit) {
      return words.slice(0, limit).join(" ") + "...";
    }
    return text;
  };

  const truncatedName = truncateText(product?.name || "", 5);

  return (
    <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <a href="#">
        <img
          className="p-8 rounded-t-lg"
          src={
            product?.image_url ||
            "https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
          }
          alt="product image"
        />
      </a>
      <div className="px-5 pb-5">
        <Typography
          color="blue-gray"
          style={{
            fontSize: isMobile ? "14px" : "16px",
            lineHeight: 1.3,
          }}
          className={` font-semibold ${isMobile ? "h-20 mb-4 " : "h-10 mb-2"}`}
        >
          {truncatedName}
        </Typography>
        <p className="text-xs text-gray-400 font-bold">{product?.sku}</p>
        <p className="mt-2" style={{ fontSize: "12px" }}>
          <strong
            style={{ fontWeight: 600, fontSize: isMobile ? "17px" : "20px" }}
          >
            {" "}
            $ {product?.pricing?.customerPrice?.unitPrice?.value}
          </strong>{" "}
          / each
        </p>

        {!isMobile && (
          <div>
            <Typography style={{ color: "#00B3A5", fontWeight: 600 }}>
              Saving % 4.60
            </Typography>
            <Typography>Supplier : Supplier</Typography>
            <Typography>Delivery By : 4 -Dec- 2023</Typography>
          </div>
        )}
        {!isMobile && (
          <div className="mt-4 flex space-x-4 items-center justify-between">
            <div className="flex items-center border border-gray-300 p-1 rounded-md pl-4 pr-4">
              <button onClick={handleDecrement} className="border-r px-2">
                -
              </button>
              <Typography className="mx-2">{quantity}</Typography>
              <button onClick={handleIncrement} className="border-l px-2">
                +
              </button>
            </div>
            <div className="self-end">
              <Button
                style={{ backgroundColor: "#00B3A5" }}
                onClick={handleAddToWishlist}
              >
                <PiHeartBold />
              </Button>
            </div>
          </div>
        )}

        <div className="flex items-center justify-between mt-4">
          {isMobile && (
            <div className="flex gap-4 bottom-0 pb-0 mb-0">
              <Button
                style={{
                  backgroundColor: "#00B3A5",
                  color: "white",
                  textTransform: "none",
                  padding: "2px 18px",
                  height: 40,
                }}
                onClick={handleAddToWishlist}
              >
                <PiHeartBold />
              </Button>

              <Button
                style={{
                  backgroundColor: "#00B3A5",
                  color: "white",
                  textTransform: "none",
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "2px 14px",
                }}
              >
                Add
              </Button>
            </div>
          )}
          {!isMobile && (
            <Button
              ripple={false}
              fullWidth={true}
              style={{ backgroundColor: "#00B3A5", color: "white" }}
              className="text-blue-gray-900 shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
            >
              Add to Cart
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}
