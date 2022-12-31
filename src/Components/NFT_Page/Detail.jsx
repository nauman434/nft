import React from "react";
import { layout } from "../../style";

const Detail = () => {
  return (
    <div className="flex ss:flex-row flex-col-reverse ss:justify-between justify-center">
      <div className="sm:w-[625px] w-[370px] ss:mr-5 mr-0">
        <div className="mb-10">
          <h1 className="text-[18px] text-para font-clash_display font-medium">Created By</h1>
          <p className="text-[20px] text-primary tracking-wider font-medium">Orbitian</p>
        </div>
        <div className="mb-10">
          <h1 className="text-[18px] text-para font-clash_display font-medium">Description</h1>
          <p className="text-[16px] text-primary tracking-wider ">
            The Orbitians <br />
            is a collection of 10,000 unique NFTs on the Ethereum blockchain,{" "}
            <br />
            <br /> There are all sorts of beings in the NFT Universe. The most
            advanced and friendly of the bunch are Orbitians. <br />
            <br /> They live in a metal space machines, high up in the sky and
            only have one foot on Earth. <br />
            These Orbitians are a peaceful race, but they have been at war with
            a group of invaders for many generations. The invaders are called
            Upside-Downs, because of their inverted bodies that live on the
            ground, yet do not know any other way to be. Upside-Downs believe
            that they will be able to win this war if they could only get an eye
            into Orbitian territory, so they've taken to make human beings their
            target.
          </p>
        </div>
        <div className="mb-10">
          <h1 className="text-[18px] text-para font-clash_display font-medium">Details</h1>
          <p className="text-[16px] text-primary tracking-wider ">View on Etherscan</p>
          <p className="text-[16px] text-primary tracking-wider ">View Original</p>
        </div>
      </div>
      <div className="ss:w-[295px] w-full h-[234px] bg-grey p-5 rounded-[20px] mb-5">
        <h1 className="text-[12px] text-para font-clash_display">Auction ends in:</h1>
        <div className="flex justify-between items-center mb-5">
          <div className="flex flex-col items-start ">
            <h1 className="text-[38px] text-primary font-clash_display font-semibold">59</h1>
            <p className="text-[14px] text-para  font-clash_display">Hours</p>
          </div>
          <div className="flex flex-col items-start">
            <h1 className="text-[38px] text-primary font-clash_display font-semibold">59</h1>
            <p className="text-[14px] text-para  font-clash_display">Minutes</p>
          </div>
          <div className="flex flex-col items-start">
            <h1 className="text-[38px] text-primary font-clash_display font-semibold">59</h1>
            <p className="text-[14px] text-para  font-clash_display">Seconds</p>
          </div>
        </div>
        <button type="submit"
              className="w-full h-[60px] rounded-[20px] bg-secondary text-primary font-clash_display font-medium btn_hover ">Place Bid</button>
      </div>
    </div>
  );
};

export default Detail;
