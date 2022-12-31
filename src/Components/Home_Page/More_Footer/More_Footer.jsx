import React, { useState } from "react";
import { navLinks } from "../../../Constants";

const More_Footer = () => {
  const [active, setAcitve] = useState("");
  const [toggle, setToggle] = useState(false);

  return (
    <footer>
      <div className="flex w-full justify-between flex-wrap">
        <div className="sm:w-[245px] w-full mr-10 sm:mb-0 mb-[25px] ">
          <h1 className="text-[24px] font-clash_display font-semibold text-primary tracking-wider mb-5">
            Digi-Corn
          </h1>
          <p className="text-[16px] text-links tracking-wider">
            A maketplace where you can sell your NFTs
          </p>
        </div>
        <div className="sm:w-[245px] w-full mr-10 sm:mb-0 mb-[25px]">
          <h1 className="text-[24px] font-clash_display font-semibold text-primary tracking-wider mb-[25px]">
            Explore
          </h1>
          {/* links */}
          <div className="flex justify-between">
            <ul className="list-none flex flex-col justify-end items-start flex-1">
              {navLinks.map((nav) => {
                return (
                  <li
                    key={nav.id}
                    className={`text-white mb-[25px] font-normal text-[16px] ${
                      active === nav.title ? "text-secondary" : "text-links"
                    }`}
                    onClick={() => setAcitve(nav.title)}
                  >
                    <a href={`#${nav.id}`}>{nav.title}</a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        <div className="sm:w-[350px] w-full ">
          <div className="flex items-start bg-grey justify-between">
            <div className="">
              <div className="mb-[25px] ">
                <h1 className="text-[24px] font-clash_display font-semibold text-primary tracking-wider mb-[25px]">
                  Join our weekly digest
                </h1>
                <p className="text-[16px]  font-normal text-links tracking-wider">
                  Get exclusive promotions & updates straight to your inbox.
                </p>
              </div>
              <div className="w-full h-[60px] bg-primary  flex  items-center rounded-[20px]  justify-between">
                <input
                  type="text"
                  placeholder="Enter your email here"
                  className="input_field w-full h-[60px] pl-4 rounded-[20px]"
                />
                <button
                  type="submit"
                  className="w-[211px] h-[60px] rounded-[20px] bg-secondary text-primary font-medium btn_hover "
                >
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default More_Footer;
