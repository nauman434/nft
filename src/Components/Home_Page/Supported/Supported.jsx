import React from "react";
import { img2 } from "../../../Asset";
import "./Supported.css";

const Supported = () => {
  return (
    <section>
      <div className="ss:flex hidden items-center bg-grey p-10 rounded-[50px] justify-between">
        <div className="flex w-[425px]  h-[310px]  mr-5 ">
          <img src={img2} alt="" className="rounded-[20px] w-full " />
        </div>
        <div className="sm:w-[425px] w-[300px]">
          <div className="mb-6 ">
            <h1 className="lg:text-[48px] text-[28px] font-clash_display font-semibold text-primary tracking-wider">
              Join our weekly digest
            </h1>
            <p className="lg:text-[22px] text-[16px]  font-normal text-primary tracking-wider">
              Get exclusive promotions & updates straight to your inbox.
            </p>
          </div>
          <div className="w-full sm:h-[60px] h-full sm:bg-primary bg-none flex sm:flex-row flex-col items-center rounded-[20px]  justify-between">
            <input
              type="text"
              placeholder="Enter your email here"
              className="input_field w-full sm:h-[60px] h-[40px] pl-4 rounded-[20px]"
            />
            <button
              type="submit"
              className="sm:w-[211px] w-full sm:h-[60px] h-[40px] sm:mt-0 mt-5 rounded-[20px] bg-secondary text-primary font-medium btn_hover "
            >
              Subscribe
            </button>
          </div>
        </div>
      </div>
      <div className="ss:hidden flex flex-col items-center rounded-[50px] justify-between">
        <div className="flex w-full  mb-10">
          <img src={img2} alt="" className="rounded-[20px] w-full " />
        </div>
        <div className="">
          <div className="mb-6 ">
            <h1 className="lg:text-[48px] text-[28px] font-clash_display font-semibold text-primary tracking-wider">
              Join our weekly digest
            </h1>
            <p className="lg:text-[22px] text-[16px]  font-normal text-primary tracking-wider">
              Get exclusive promotions & updates straight to your inbox.
            </p>
          </div>
          <div className="w-full sm:h-[60px] h-full sm:bg-primary bg-none flex sm:flex-row flex-col items-center rounded-[20px]  justify-between">
            <input
              type="text"
              placeholder="Enter your email here"
              className="input_field w-full sm:h-[60px] h-[40px] pl-4 rounded-[20px]"
            />
            <button
              type="submit"
              className="sm:w-[211px] w-full sm:h-[60px] h-[40px] sm:mt-0 mt-5 rounded-[20px] bg-secondary text-primary font-medium btn_hover "
            >
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Supported;
