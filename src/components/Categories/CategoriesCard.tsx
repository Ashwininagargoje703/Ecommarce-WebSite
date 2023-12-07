import { Card, Typography } from "@material-tailwind/react";

interface Category {
  id: number;
  name: string;
  [key: string]: any; // Allow any other properties
}
interface CategoriesCardProps {
  category: Category;
  image: string;
}
const CategoriesCard: React.FC<CategoriesCardProps> = ({ category, image }) => {
  return (
    <Card className=" border border-gray-300 flex flex-col h-full text-center justify-center p-2">
      <img src={image} alt={`Category ${category.categoryId}`} />

      <Typography style={{ fontWeight: 600 }}>
        {category?.displayName}
      </Typography>
    </Card>
  );
};

export default CategoriesCard;
