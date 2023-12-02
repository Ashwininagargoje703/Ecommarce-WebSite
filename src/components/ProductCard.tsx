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

export function ProductCard() {
  const [quantity, setQuantity] = useState<number>(1);

  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleAddToWishlist = () => {
    // Logic to add to wishlist
    console.log("Added to wishlist!");
  };
  return (
    <Card className="w-96">
      <CardHeader shadow={false} floated={false}>
        <img
          src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
          alt="card-image"
        />
      </CardHeader>
      <CardBody>
        <Typography variant="h5" color="blue-gray" className="mb-2">
          UI/UX Review Check
        </Typography>
        <Typography>
          The place is close to Barceloneta Beach and bus stop just 2 min by
          walk and near to &quot;Naviglio&quot; where you can enjoy the main
          night life in Barcelona.
        </Typography>

        <div className="mt-4 flex space-x-4 items-center">
          <div className="flex items-center border border-gray-300 p-1 rounded-md">
            <button onClick={handleDecrement} className="border-r px-2">
              -
            </button>
            <Typography className="mx-2">{quantity}</Typography>
            <button onClick={handleIncrement} className="border-l px-2">
              +
            </button>
          </div>
          <div>
            <Button
              style={{ backgroundColor: "palegreen" }}
              onClick={handleAddToWishlist}
            >
              <PiHeartBold />
            </Button>
          </div>
        </div>
      </CardBody>
      <CardFooter className="pt-0">
        <Button
          ripple={false}
          fullWidth={true}
          className="bg-blue-gray-900/10 text-blue-gray-900 shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
        >
          Add to Cart
        </Button>
      </CardFooter>
    </Card>
  );
}
