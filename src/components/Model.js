import React from "react";
import { FiChevronDown } from "react-icons/fi";
const Model = () => {
  return (
    <div>
      <div className="absolute inset-x-0 top-[15%] text-center">
        <h1 className="text-4-xl font-bold">Model 3 </h1>
        <p className="p-2 text-sm-bold"> Leasing starting at $349/mo </p>
      </div>
      <div className="flex flex-col items-center justify-center text-sm lg:flex-row absolute inset-x-0 bottom-[10%] ">
        <a href="https://www.tesla.com/model3/design#overview"> <button className="bg-[#171a20] rounded-md w-96 lg:w-64 lg:mx-4h-10 mt-2 text-white" > Custom Order</button> </a>
        <a href="https://www.tesla.com/drive"> <button className="bg-[#ffffff] rounded-md w-96 lg:w-64 lg:mx-4h-10 mt-2 text-[#393c41]"> Demo Drive </button> </a>
      </div>
      <div className="flex justify-center animate-bounce absolute inset-x-0 bottom-[3%]">
        <FiChevronDown size={24}/>
      </div>
    </div>
  );
};

export default Model;
