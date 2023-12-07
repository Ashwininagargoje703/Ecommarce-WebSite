/* eslint-disable jsx-a11y/img-redundant-alt */
import { Card, Typography } from "@material-tailwind/react";

interface Category {
  id: number;
  name: string;
  [key: string]: any; // Allow any other properties
}
interface CategoriesCardProps {
  category: Category;
}
const CategoriesCard2: React.FC<CategoriesCardProps> = ({ category }) => {
  return (
    <Card className=" border border-gray-300 flex flex-col h-full text-center justify-center p-2">
      <img
        className="p-2 rounded-t-lg"
        src={
          "https://www.insaraf.com/cdn/shop/products/1304856603SC-1731.jpeg?v=1529680864"
        }
        alt="product image"
      />

      <Typography style={{ fontWeight: 600 }}>
        {category?.displayName}
      </Typography>
    </Card>
  );
};

export default CategoriesCard2;
