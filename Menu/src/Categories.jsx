import React from "react";

const Categories = ({ categories, setSelectedCategory, selectedCategory }) => {
  return (
    <div>
      {categories.map((category) => {
        return (
          <button
            onClick={() => setSelectedCategory(category)}
            key={category}
            className={` cursor-pointer  bg-[#f59e0b] text-sm text-white px-3 py-1  border mx-3  rounded  capitalize  
              ${selectedCategory === category ? "bg-[rgb(146,64,14)]" : " bg-[#f59e0b]"}`}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
};

export default Categories;
