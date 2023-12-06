import { Carousel } from "flowbite-react";

const Slider: React.FC = () => {
  return (
    <div className="h-56 sm:h-64 xl:h-80 2xl:h-96 m-4">
      <Carousel>
        <img
          src="https://cdn.vectorstock.com/i/preview-1x/14/46/isometric-online-shopping-vector-35151446.jpg"
          alt="..."
        />
        <img
          src="https://static.vecteezy.com/system/resources/previews/001/184/072/original/online-smartphone-shopping-banner-vector.jpg"
          alt="..."
        />
        <img
          src="https://img.freepik.com/free-vector/online-shopping-banner-template_23-2148787138.jpg"
          alt="..."
        />
        <img
          src="https://img.freepik.com/free-vector/online-shopping-banner-template_23-2148896886.jpg"
          alt="..."
        />
        <img
          src="https://t3.ftcdn.net/jpg/04/31/70/04/360_F_431700457_pLjYX4hAuDhb2bMxFL0805UA86IgEX9t.jpg"
          alt="..."
        />
      </Carousel>
    </div>
  );
};
export default Slider;
