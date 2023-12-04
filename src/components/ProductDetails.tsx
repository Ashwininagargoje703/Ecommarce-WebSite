import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useParams } from "react-router-dom";
import { getProductDetailsAPI } from "../store/product/product.actions";
import { Button, Typography } from "@material-tailwind/react";
import { PiHeartBold } from "react-icons/pi";

const initialImages = [
  "https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/o/6/1/nord-ce3-5g-nord-ce3-5g-oneplus-original-imags44dzvsqjkw6.jpeg?q=70",
  "https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/t/u/a/nord-ce3-5g-nord-ce3-5g-oneplus-original-imags44dnrejzzkc.jpeg?q=70",
  "https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/1/v/a/nord-ce3-5g-nord-ce3-5g-oneplus-original-imags44dgsgwdgvu.jpeg?q=70",
];

const ProductDetails: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string>(initialImages[0]);
  const handleImageClick = (imageUrl: string) => {
    setSelectedImage(imageUrl);
  };
  const [quantity, setQuantity] = useState<number>(1);
  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const dispatch = useDispatch<any>();

  const { sku } = useParams<{ sku?: string }>();
  const location = useLocation();
  const { productName } = location.state || {};

  useEffect(() => {
    if (sku) {
      dispatch(getProductDetailsAPI(sku));
    }
  }, [dispatch, sku]);

  const handleAddToWishlist = () => {
    // Logic to add to wishlist
    console.log("Added to wishlist!");
  };

  const { data } = useSelector((store: any) => store.productDetail);

  console.log("data details", data);

  return (
    <div className="flex justify-center">
      <div className="max-w-8xl mt-8 flex gap-10">
        <div className="max-w-4xl mt-8 flex gap-20">
          {/* Small Image Column */}
          <div className="grid justify-start mr-10 gap-10">
            {initialImages.map((imageUrl, index) => (
              <div key={index} className="w-12">
                <img
                  src={imageUrl}
                  alt={`Product Image ${index}`}
                  className="cursor-pointer"
                  style={{ maxHeight: "100%", maxWidth: "100%" }}
                  onClick={() => handleImageClick(imageUrl)}
                />
              </div>
            ))}
          </div>

          {/* Large Image */}
          <div className="w-3/1">
            <img src={selectedImage} alt="Product Image" />
          </div>
        </div>

        {/* Right Side - Product Details */}

        <div className="w-2/1 px-20 ml-5 mt-4">
          <h1 className="text-3xl font-bold mb-4">{productName}</h1>
          <p>
            <strong>SKU number</strong>: {data?.product?.customer_reviews?.sku}
            {}
          </p>
          <p className="text-gray-600 mb-4">
            {data?.product?.manufacturer?.details}
          </p>
          <p className="text-gray-800 font-semibold mb-2">
            $ {data?.product?.pricing?.customerPrice?.unitPrice?.value}
          </p>
          <div className="mt-4 flex gap-4">
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
                  style={{
                    backgroundColor: "#00B3A5",
                    color: "white",
                    textTransform: "none",
                  }}
                >
                  Add
                </Button>
              </div>

              <div className="self-end">
                <Button
                  style={{ backgroundColor: "#00B3A5" }}
                  onClick={handleAddToWishlist}
                >
                  <PiHeartBold fontSize={16} />
                </Button>
              </div>
            </div>
          </div>
          <br />
          <hr />
          <br />

          <div>
            <Typography variant="h4">Additional Information</Typography>

            <p>
              <strong>Manufactures Name:</strong>
              {data?.product?.manufacturer?.name}
            </p>

            <p>
              <strong>Manufactures Details:</strong>
              {data?.product?.manufacturer?.details}
            </p>

            <p>
              <strong>Days to Deliver:</strong>4 Days
            </p>

            <p>
              <strong>Contry of Origin:</strong>4 Days
            </p>

            <p>
              <strong>Package Size:</strong>
              {data?.product?.display_info?.dimensions?.weight} kg
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
