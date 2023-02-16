import React, { useState } from "react";
import "./Upload_Page.css";

const Form = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggling = () => setIsOpen(!isOpen);

  return (
    <div>
      <h1 className="text-[52px] font-clash_display font-bold text-primary mb-6 md:ml-[25%] ml-0">
        Create New Item
      </h1>
      <form action="" className="w-full flex flex-col justify-center items-center">
        <div className="md:w-[50%] w-full flex h-[60px] mb-5 bg-primary  items-center rounded-[20px]  justify-end">
          <input type="file" name="file" id="file" className="inputfile" />
          <label htmlFor="file" className="">
            Choose a file
          </label>
        </div>
        <div className="md:w-[50%] w-full flex h-[60px] mb-5 bg-primary  items-center rounded-[20px]  justify-between">
          <input
            type="text"
            placeholder="Enter your email here"
            className="input_field w-full h-[60px] pl-4 rounded-[20px]"
          />
        </div>
        <div className="md:w-[50%] w-full flex h-[60px] mb-5 bg-primary  items-center rounded-[20px]  justify-between">
          <textarea
            type="text"
            placeholder="Provide a detailed description of your item"
            className="input_field w-full h-[60px] pt-4 pl-4 rounded-[20px]"
          />
        </div>
        <div className="md:w-[50%] w-full h-[60px] mb-5 bg-primary rounded-[20px]">
          <div
            className="input_field cursor-pointer flex items-center w-full h-[60px] pl-4 rounded-[20px]"
            onClick={toggling}
          >
            Collection
          </div>
          {/* {isOpen && (
            <div className="h-[100px] bg-secondary">
              <ul className="DropDownList">
                <li className="ListItem">Apples</li>
                <li className="ListItem">Oranges</li>
                <li className="ListItem">Mangoes</li>
              </ul>
            </div>
          )} */}
        </div>
        <div className="md:w-[50%] w-full h-[60px] mb-5 bg-primary rounded-[20px]">
          <div
            className="input_field cursor-pointer flex items-center w-full h-[60px] pl-4 rounded-[20px]"
            onClick={toggling}
          >
            Blockchain
          </div>
          {/* {isOpen && (
            <div className="h-[100px] bg-secondary">
              <ul className="DropDownList">
                <li className="ListItem">Apples</li>
                <li className="ListItem">Oranges</li>
                <li className="ListItem">Mangoes</li>
              </ul>
            </div>
          )} */}
        </div>
        <input type="submit" className="btn_form bg-secondary md:w-[50%] text-white w-full"/>
      </form>
    </div>
  );
};

export default Form;
