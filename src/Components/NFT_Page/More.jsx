import React from "react";
import "./NFT_PAGE.css";
import { topNFTs } from "../../Constants";

const More = () => {
  return (
    <div>
      <div className="flex justify-between">
        <div className="mb-10">
          <h1 className="font-clash_display ss:text-[48px] text-[24px] font-semibold tracking-wider text-primary">
            Top NFTS
          </h1>
          <p className="ss:text-[18px] text-[14px] ss:text-start text-justify text-primary leading-10 tracking-widest">
            Explore All Top NFTs
          </p>
        </div>
        <button className="ss:block hidden btn bg-secondary text-primary">View All</button>
      </div>
      <div className="flex flex-wrap gap-2 sm:justify-between justify-center mb-10">
        {topNFTs.map((item) => {
          return (
            <div className="top-nfts">
              <div className="w-[265px] h-[273px]">
                <img
                  src={item.image}
                  alt=""
                  className="w-full rounded-[10px]"
                />
              </div>
              <div className="flex flex-col items-start justify-between mt-3 mb-3">
                <h1 className="text-[16px] font-clash_display font-medium text-primary tracking-wider">
                  {item.name}
                </h1>
                <p className="text-[10px] font-poppins font-normal text-white tracking-wider">
                  {item.user}
                </p>
              </div>
              <div className="flex justify-between">
                <div>
                  <h1 className="text-[12px] font-clash_display font-semibold text-primary tracking-wider">
                    6.73 ETH
                  </h1>
                  <p className="text-[10px] font-poppins font-normal text-white tracking-wider">
                    Floor Price{" "}
                  </p>
                </div>
                <div>
                  <h1 className="text-[12px] font-clash_display font-semibold text-primary tracking-wider">
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
      </div>
      <button className="ss:hidden block btn bg-secondary text-primary">View All</button>
    </div>
  )
}

export default More