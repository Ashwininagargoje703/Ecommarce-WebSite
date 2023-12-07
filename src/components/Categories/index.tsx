import React, { FunctionComponent, useEffect } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";
import {
  getProductAPI,
  getProductCategoryAPI,
  updateProductOptions,
} from "../../store/product/product.actions";
import CategoriesCard from "../Categories/CategoriesCard";
import { useDispatch, useSelector } from "react-redux";
import { Typography } from "@material-tailwind/react";
import CategoriesCard2 from "../Categories/CategoriesCard2";
import { Link } from "react-router-dom";

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

const Categories: React.FC = () => {
  const settings: Settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
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
  }, [dispatch]);

  const { data } = useSelector((store: any) => store.categories);

  const changeCategory = (id: string) => {
    console.log("id:", id);
    dispatch(updateProductOptions({ categoryId: id }));
    dispatch(getProductAPI());
  };

  return (
    <div className=" bg-white rounded-lg shadow-md  m-4 p-4">
      <Typography style={{ fontWeight: 600, marginBottom: 4 }}>
        TOP SUPPLIER
      </Typography>
      <Slider {...settings}>
        {data.map((category: any) => (
          <Link key={category.id} to={`/product-list`}>
            <div
              key={category.id}
              className="p-2"
              onClick={() => changeCategory(category.categoryId)}
            >
              <CategoriesCard2 category={category} />
            </div>
          </Link>
        ))}
      </Slider>
    </div>
  );
};

export default Categories;
