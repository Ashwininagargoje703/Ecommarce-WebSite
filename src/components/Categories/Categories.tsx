import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Tooltip,
} from "@material-tailwind/react";

export function CategoriesCard() {
  return (
    <Card className="w-96">
      <CardHeader floated={false} className="h-80">
        <img
          src="https://docs.material-tailwind.com/img/team-3.jpg"
          alt="profile-picture"
        />
      </CardHeader>

      <CardFooter className="flex justify-center gap-7 pt-2">
        <Typography> Natalie Paisley</Typography>
      </CardFooter>
    </Card>
  );
}
