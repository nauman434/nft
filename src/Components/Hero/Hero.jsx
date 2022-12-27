import React from "react";
import { hero, profile } from "../../Asset";
import { stats } from "../../Constants";
import styles from "../../style";

const Hero = () => {
  return (
    <section>
      <div className="flex md:flex-row flex-col justify-between items-center">
        <div className="flex flex-col items-start ">
          <div className="mb-[30px]">
            <h1 className="ss:text-[67px] text-[28px] text-start text-primary leading-32 font-clash_display font-semibold">
              Discover digital art & Collect{" "}
              <span className="text-gradient"> NFTs</span>
            </h1>
            <p className="ss:text-[22px] text-[16px] md:text-start text-start text-primary leading-10 tracking-wide">
              NFT marketplace UI created with Anima for Figma. Collect, buy and
              sell art from more than 20k NFT artists.
            </p>
          </div>
          <button className="btn bg-secondary text-primary">Get Started</button>
          <div
            className={`flex flex-row  mt-[30px] w-full md:justify-start justify-between md:mb-[0px] mb-[30px] items-center`}
          >
            {stats.map((item) => {
              return (
                <div className="md:mr-[30px] mr-[0px] ">
                  <h1 className="ss:text-[28px] text-[20px] text-start font-bold font-clash_display text-gradient leading-10">
                    {item.value}
                  </h1>
                  <p className="ss:text-[24px] text-[18px] ss:text-start text-justify text-primary leading-10">
                    {item.title}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
        <div>
          <img src={hero} alt="" className="w-[100%] h-[100%] z-[5]" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
