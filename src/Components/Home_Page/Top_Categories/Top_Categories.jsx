import React from "react";
import { topCategories } from "../../../Constants";
import './Top_Categories.css'

const Top_Categories = () => {
  return (
    <div className="">
      <div className="flex justify-between">
        <div className="mb-10">
          <h1 className="font-clash_display ss:text-[48px] text-[24px] font-semibold tracking-wider text-primary">
            Top Categories
          </h1>
          <p className="ss:text-[18px] text-[14px] ss:text-start text-justify text-primary leading-10 tracking-widest">
            Explore All Top NFTs
          </p>
        </div>
        <button className="ss:block hidden btn bg-secondary text-primary">
          View All
        </button>
      </div>
      <div className="flex flex-wrap gap-2 sm:justify-between justify-center mb-10">
        {topCategories.map((item) => {
          return (
            <div className="top-categories">
              <div className="flex w-full rounded-[10px] items-center justify-center white_blur"
                style={{
                  backgroundImage: `url(${item.bg})`,
                  backgroundPosition: "center",
                  backgroundSize: "full",
                  backgroundRepeat: "no-repeat",
                  opacity: '0.5'
                }}
              >
                <img src={item.icon} alt="" />
              </div>
              <div className="flex items-center justify-center mt-3">
                <h1 className="text-primary text-[18px] font-clash_display font-semibold tracking-wider">{item.title}</h1>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Top_Categories;
