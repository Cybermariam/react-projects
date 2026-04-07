import React, { useState } from "react";
import menus from "./data";
import Menu from "./Menu";
import Categories from "./Categories";

const App = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = ["all", ...new Set(menus.map((menu) => menu.category))];

  const filteredProducts =
    selectedCategory === "all"
      ? menus
      : menus.filter((menu) => menu.category === selectedCategory);

  return (
    <div className="min-h-screen flex flex-col justify-center items-center w-[80%] mx-auto">
      <h2 className="text-4xl mt-20 tracking-wider">Our Menu</h2>
      <p className="h-1 w-30  bg-[#f59e0b] mt-4 mb-8"></p>
      <Categories
        categories={categories}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />
      <Menu menus={filteredProducts} />
    </div>
  );
};

export default App;
