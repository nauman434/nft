import React from "react";
import { useState } from "react";
import { cardData } from "../../../Constants";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Card = () => {
  const [isHovering, setIsHovering] = useState(false);
  const style = {
    display: "inline-block",
    transform: isHovering ? `ease-out` : `transition-none`,
    transition: `duration-150`,
  };
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };

  const handleMouseOver = () => {
    setIsHovering(true);
  };
  const handleMouseOut = () => {
    setIsHovering(false);
  };

  return (
    <Carousel
    swipeable={true}
      draggable={true}
      responsive={responsive}
      infinite={true}
      containerClass="carousel-container"
      removeArrowOnDeviceType={["tablet", "mobile"]}
      itemClass="carousel-item-padding-40-px"
      className=""
    >
      {cardData.map((item) => {
        return (
          <div className="feature-card">
            <div className="w-[350px] h-[358px]">
              <img src={item.image} alt="" className="w-full  rounded-[15px]" />
            </div>
            <div className="flex items-center justify-between mt-3 mb-3">
              <div className="flex items-center">
                <div className="w-[50px] h-[50px] mr-3">
                  <img src={item.profile} alt="" className="w-full" />
                </div>
                <div>
                  <h1 className="text-[16px] font-clash_display font-semibold text-primary tracking-wider">
                    {item.name}
                  </h1>
                  <p className="text-[10px] font-poppins font-normal text-white tracking-wider">
                    {item.user}
                  </p>
                </div>
              </div>
              <div className="w-[30px] h-[30px]">
                <img src={item.currency} alt="" className="w-full" />
              </div>
            </div>
            <div className="flex justify-between">
              <div>
                <h1 className="text-[14px] font-clash_display font-semibold text-primary tracking-wider">
                  6.73 ETH
                </h1>
                <p className="text-[10px] font-poppins font-normal text-white tracking-wider">
                  latest Bid
                </p>
              </div>
              <div>
                <h1 className="text-[14px] font-clash_display font-semibold text-primary tracking-wider">
                  1.55 ETH
                </h1>
                <p className="text-[10px] font-poppins font-normal text-white tracking-wider">
                  from
                </p>
              </div>
              <div>
                <h1 className="text-[14px] font-clash_display font-semibold text-primary tracking-wider">
                  $9,945.1
                </h1>
                <p className="text-[10px] text-right font-poppins font-normal text-green tracking-wider">
                  +3.57%
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </Carousel>
  );
};

export default Card;
