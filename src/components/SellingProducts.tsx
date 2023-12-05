import React, { FunctionComponent, useEffect } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";
import { getProductCategoryAPI } from "../store/product/product.actions";
import CategoriesCard from "./Categories/CategoriesCard";
import { useDispatch, useSelector } from "react-redux";
import CategoriesCard2 from "./Categories/CategoriesCard2";

interface ArrowProps {
  onClick: () => void;
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

  // Other properties specific to your settings
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

const SliderPage: React.FC = () => {
  const settings: Settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 3,
    arrows: true,
    prevArrow: <PrevArrow onClick={() => {}} />, // Pass onClick prop
    nextArrow: <NextArrow onClick={() => {}} />, // Pass onClick prop
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
    dispatch(getProductCategoryAPI());
  }, []);

  const { data } = useSelector((store: any) => store.categories);

  console.log("getProductCategoryAPI", data);
  const firstFiveCategories = data ? data.slice(0, 5) : [];

  return (
    <div>
      <Slider {...settings}>
        {firstFiveCategories.map((category: any) => (
          <div key={category.id}>
            <CategoriesCard2 category={category} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default SliderPage;
