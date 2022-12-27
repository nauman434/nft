import React from "react";
import styles from "../../style";
import Card from "../Card/Card";

const Trending_NFTS = () => {
  return (
    <section className={` `}>
      <div className="">
        <div className="mb-10">
          <h1 className="font-clash_display ss:text-[48px] text-[24px] font-semibold tracking-wider text-primary">Trending NFTS</h1>
          <p className="ss:text-[18px] text-[14px] ss:text-start text-justify text-primary leading-10 tracking-widest">Explore Trending NFTs</p>
        </div>
        <Card/>
      </div>
    </section>
  );
};

export default Trending_NFTS;
