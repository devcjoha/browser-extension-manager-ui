// import { useState } from "react";

function Filter({ applyFilter, filterSelected }) {
  const styleButtons =
    "btn-active w-20 h-10 bg-[#fcfdff] dark:bg-[#2f364b] shadow-md dark:text-white text-black rounded-3xl cursor-pointer hover:bg-[#fafdff] hover:text-[#bfc1c9] dark:hover:bg-[#545969] focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-[#de473f] focus:ring-offset-[#de473f] dark:focus:ring-[#f25c54] dark:focus:ring-offset-[#09153e]";
  const styleActiveButton =
    "bg-[#c7221a] lg:bg-[#c7221a] lg:dark:bg-[#de473f] dark:bg-[#de473f] text-white lg:text-white dark:text-black  lg:dark:text-black transition-colors duration-300 ease-in-out";
  return (
    <>
      {/* FILTER-BUTTONS */}
      <div className="filters-container lg:right-5 flex flex-row gap-3 ">
        {/* ALL */}
        <button
          onClick={() => applyFilter("all")}
          className={`${styleButtons}   
        ${filterSelected.all ? styleActiveButton : ""}`}
        >
          All
        </button>
        {/* ACTIVE */}
        <button
          onClick={() => applyFilter("active")}
          className={`${styleButtons}
        ${filterSelected.active ? styleActiveButton : ""}`}
        >
          Active
        </button>
        {/* INACTIVE */}
        <button
          onClick={() => applyFilter("inactive")}
          className={`${styleButtons}
        ${filterSelected.inactive ? styleActiveButton : ""}`}
        >
          Inactive
        </button>
      </div>
    </>
  );
}
export default Filter;
