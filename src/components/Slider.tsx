import { Carousel } from "flowbite-react";

const Slider: React.FC = () => {
  return (
    <div className="h-56 sm:h-64 xl:h-80 2xl:h-96 m-4">
      <Carousel>
        <img
          src="https://images.vexels.com/content/194700/preview/buy-online-slider-template-4261dd.png"
          alt="..."
        />
        <img
          src="https://4.imimg.com/data4/TX/JE/GLADMIN-30141012/wp-content-uploads-2016-05-indiabbazaar-e-commerce.jpg"
          alt="..."
        />
        <img
          src="https://cdn.sanity.io/images/cbjxg0yl/production_v2/207796ae5c4b77588415a94bdaf3c8c29ea92bd3-2480x761.jpg"
          alt="..."
        />
        <img
          src="https://i.pinimg.com/736x/b6/c9/17/b6c9173bd58f62f49eb550635a5e259f.jpg"
          alt="..."
        />
        <img
          src="https://cdn.youcan.shop/stores/7d219d104086fbd2654a1f045d0f635c/others/8sxLyLbaoB4s0uRNN8BsiqZLgfhOkNCfC34aMbpi.png"
          alt="..."
        />
      </Carousel>
    </div>
  );
};
export default Slider;
