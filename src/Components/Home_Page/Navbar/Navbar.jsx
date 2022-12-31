import React, { useState } from "react";
import { navLinks } from "../../../Constants";
import { logo, menu, cross } from "../../../Asset";

const Navbar = () => {
  const [active, setAcitve] = useState("");
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="flex items-center justify-between navbar py-6">
      <div>
        <img src={logo} alt="" className="w-full" />
      </div>
      <div className="flex justify-between">
        <ul className="list-none md:flex hidden justify-end items-center flex-1">
          {navLinks.map((nav) => {
            return (
              <li
                key={nav.id}
                className={`text-white mr-[40px] font-normal text-[14px] ${
                  active === nav.title ? "text-secondary" : "text-white"
                }`}
                onClick={() => setAcitve(nav.title)}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            );
          })}
          <button className="btn bg-secondary text-primary text-[14px]">
            Connect Wallet
          </button>
        </ul>
        <div className="md:hidden flex items-center">
          <img
            src={toggle ? cross : menu}
            alt=""
            className="w-[28px] h-[28px] object-contain"
            onClick={() => {setToggle(!toggle)}}
          />
          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 bg-blue absolute top-20 sm:right-32 right-0 sm:mx-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
          >
            <ul className="list-none md:hidden flex flex-col justify-end items-center flex-1">
              {navLinks.map((nav) => {
                return (
                  <li
                    key={nav.id}
                    className={`text-white mb-[40px] font-normal text-[14px] ${
                      active === nav.title ? "text-secondary" : "text-white"
                    }`}
                    onClick={() => setAcitve(nav.title)}
                  >
                    <a href={`#${nav.id}`}>{nav.title}</a>
                  </li>
                );
              })}
              <button className="btn bg-secondary text-primary text-[14px]">
                Connect Wallet
              </button>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
