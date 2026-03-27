import React, { useState } from "react";
import data from "./data";

const List = () => {
  const [people, setPeople] = useState(data);

  const clearAll = () => {
    setPeople([]);
  };
  return (
    <div className="container bg-white mx-auto w-[40%] px-4 py-6 ">
      <h2 className="mb-4 text-4xl"> {people.length} Birthdays Today</h2>
      {people.map((person) => {
        const { id, name, age, image } = person;
        return (
          <div className="ml-6">
            <div key={id} className="flex items-center gap-4 mb-5">
              <img
                src={image}
                alt={name}
                className="w-25 h-25 rounded-full  object-cover"
              />
              <div>
                <h2>{name}</h2>
                <p>{age} years</p>
              </div>
            </div>
          </div>
        );
      })}
      <button
        onClick={clearAll}
        className="bg-[#d946ef] text-white w-full rounded px-1 py-1 "
      >
        Clear All
      </button>
    </div>
  );
};

export default List;
