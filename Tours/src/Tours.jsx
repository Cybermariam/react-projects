import React, { useState } from "react";
import data from "../data";
import Tour from "./Tour";

const Tours = () => {
  const [tourCard, setTourCard] = useState(data);

  const handleRemove = (id) => {
    setTourCard((prev) => prev.filter((card) => card.id !== id));
  };

  if (tourCard.length === 0) {
    return (
      <div className="text-center">
        <h2 className="text-2xl">No Tours Left</h2>
        <button
          className=" bg-[rgb(16,185,129)] text-white py-2 mt-2 px-4 rounded"
          onClick={() => setTourCard(data)}
        >
          Refresh
        </button>
      </div>
    );
  }
  return (
    <div className="flex items-center flex-col ">
      <h2 className="text-4xl mb-4 tracking-wider">Our Tours</h2>
      <p className="h-1 w-28 bg-[rgb(16,185,129)] mb-7"></p>
      <div className="grid md:grid-cols-3 w-[80%] gap-9 relative grid-cols-1">
        {tourCard.map((tour) => (
          <Tour tour={tour} handleRemove={handleRemove} />
        ))}
      </div>
    </div>
  );
};

export default Tours;
