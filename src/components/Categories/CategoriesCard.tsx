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
const CategoriesCard: React.FC<CategoriesCardProps> = ({ category }) => {
  return (
    <Card className=" border border-gray-300 flex flex-col h-full text-center justify-center p-2">
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzTeMlYu6tFMyvAeUeiplAXAPGK4Xyl3Ik3A&usqp=CAU"
        alt="profile-picture"
      />

      <Typography style={{ fontWeight: 600 }}>
        {category?.displayName}
      </Typography>
    </Card>
  );
};

export default CategoriesCard;
