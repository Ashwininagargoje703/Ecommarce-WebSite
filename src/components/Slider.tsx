import { Carousel } from "flowbite-react";

export default function Slider() {
  return (
    <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
      <Carousel pauseOnHover>
        <img
          src="https://indian-retailer.s3.ap-south-1.amazonaws.com/s3fs-public/2020-07/goc.jpg"
          alt="..."
        />
        <img
          src="https://previews.123rf.com/images/pyotrme/pyotrme1807/pyotrme180700002/104942206-banner-template-of-online-shopping-and-e-commerce-modern-flat-design-concept-of-web-page-design-for.jpg"
          alt="..."
        />
        <img
          src="data:image/webp;base64,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"
          alt="..."
        />
        <img
          src="https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs/168082855/original/f916460e640d6aef85cd25fa989ee502044331c7/design-banner-for-christmas-new-year-or-any-ecommerce-website-0c43.jpg"
          alt="..."
        />
        <img
          src="https://img.freepik.com/free-psd/black-friday-sale-banner-template-with-3d-gifts_47987-16985.jpg"
          alt="..."
        />
      </Carousel>
    </div>
  );
}