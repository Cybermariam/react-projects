import React, { useState } from "react";
import people from "./data";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";

const Review = () => {
  const [index, setIndex] = useState(0);

  const prevBtn = () => {
    setIndex((prev) => {
      if (prev === 0) {
        return people.length - 1;
      }
      return prev - 1;
    });
  };

  const increaseBtn = () => {
    setIndex((prev) => {
      if (prev === people.length - 1) {
        return 0;
      }
      return prev + 1;
    });
  };

  const randomPerson = () => {
    let randomNumber = Math.floor(Math.random() * people.length);

    if (randomNumber === index) {
      randomNumber = (randomNumber + 1) % people.length;
    }
    setIndex(randomNumber);
  };

  const { id, name, job, text, image } = people[index];

  return (
    <div className="w-150 shadow px-6 py-6">
      <div key={id} className=" flex justify-center flex-col items-center ">
        <div className="relative">
          <FaQuoteRight className="absolute" />
          <img
            src={image}
            alt={name}
            className="w-40 h-40 object-cover rounded-full"
          />
        </div>
        <h2 className="capitalize text-2xl tracking-wide mt-4  mb-2">{name}</h2>
        <p className="uppercase text-[rgb(100,92,255)] text-sm ">{job}</p>
        <p className="my-2 text-gray-600">{text}</p>
        <div className="flex text-[rgb(192,190,255)] gap-6 my-4 ">
          <FaChevronLeft onClick={prevBtn} />
          <FaChevronRight onClick={increaseBtn} />
        </div>
        <button
          onClick={randomPerson}
          className=" text-[rgb(100,92,255)] px-3 rounded py-1 bg-[rgb(193,190,255)]"
        >
          Surprise Me
        </button>
      </div>
    </div>
  );
};

export default Review;
