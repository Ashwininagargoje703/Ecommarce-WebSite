import React, { FunctionComponent, useEffect } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { getProductAPI } from "../store/product/product.actions";
import { ProductCard } from "./Product/ProductCard";
import { Typography } from "@material-tailwind/react";

interface ArrowProps {
  onClick: () => void;
}

interface Product {
  name: string;
  // Other properties of the product
}
interface ResponsiveObject {
  breakpoint: number;
  settings: {
    slidesToShow: number;
    slidesToScroll: number;
    infinite: boolean;
    dots?: boolean;
  };
}
interface Settings {
  dots?: boolean;
  infinite?: boolean;
  speed?: number;
  slidesToShow?: number;
  slidesToScroll?: number;
  arrows?: boolean;
  prevArrow?: JSX.Element;
  nextArrow?: JSX.Element;
  className?: string;
  responsive?: ResponsiveObject[];
}

const PrevArrow: FunctionComponent<ArrowProps> = ({ onClick }) => (
  <div
    className="absolute left-0 z-10"
    style={{ top: "50%", transform: "translateY(-50%)" }}
    onClick={onClick}
  >
    <FaArrowAltCircleLeft style={{ color: "#00B3A5", fontSize: 25 }} />
  </div>
);

const NextArrow: FunctionComponent<ArrowProps> = ({ onClick }) => (
  <div
    className="absolute right-0 z-10"
    style={{ top: "50%", transform: "translateY(-50%)" }}
    onClick={onClick}
  >
    <FaArrowAltCircleRight style={{ color: "#00B3A5", fontSize: 25 }} />
  </div>
);

const NewArrivals: React.FC = () => {
  const settings: Settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 3,
    arrows: true,
    prevArrow: <PrevArrow onClick={() => {}} />,
    nextArrow: <NextArrow onClick={() => {}} />,
    className: "myCustomCarousel",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true, // Include the 'infinite' property here
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true, // Include the 'infinite' property here
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true, // Include the 'infinite' property here
        },
      },
    ],
  };

  const dispatch = useDispatch<any>();

  useEffect(() => {
    dispatch(getProductAPI(1));
  }, [dispatch]);

  const { data } = useSelector((store: any) => store.products);
  const allProducts: Product[] = data?.browse?.products || [];

  return (
    <div className=" bg-white rounded-lg shadow-md p-4 m-4">
      <Typography style={{ fontWeight: 600 }}>NewArrivals</Typography>
      <Slider {...settings}>
        {allProducts.length > 0 ? (
          allProducts.map((product: Product, index: number) => (
            <div key={index} className="p-2">
              <ProductCard product={product} />
            </div>
          ))
        ) : (
          <p>No products available</p>
        )}
      </Slider>
    </div>
  );
};

export default NewArrivals;
