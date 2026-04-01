import React, { useState } from "react";

const Tour = ({ tour, handleRemove }) => {
  const [readMore, setReadMore] = useState(false);

  const limit = 200;
  const { id, name, image, info, price } = tour;

  const showReadMore = () => {
    setReadMore(!readMore);
  };

  return (
    <div>
      <div key={id} className="shadow-xl rounded-sm relative ">
        <img
          src={image}
          alt={name}
          className=" rounded-t-sm overflow-hidden h-85 w-full object-cover"
        />
        <p className="absolute rounded-tr-sm tracking-wider px-2 py-1 top-0 z-10 bg-[rgb(16,185,129)] text-white right-0">
          ${price}
        </p>
        <div className="px-6 ">
          <h3 className="text-center text-xl tracking-wide font-medium my-5 max-w-70 mx-auto">
            {name}
          </h3>
          <p className="text-[#64748b]">
            {readMore || info.length <= limit
              ? info
              : `${info.substring(0, limit)}...`}

            <button
              onClick={showReadMore}
              className="text-xs text-[rgb(16,185,129)]"
            >
              {readMore ? "Read Less" : "Read More"}
            </button>
          </p>
          <button
            className="text-[rgb(16,185,129)] border border-[rgb(16,185,129)] w-full text-xs tracking-wider py-2 hover:cursor-pointer hover:bg-[rgb(16,185,129)] hover:text-white my-6"
            onClick={() => handleRemove(id)}
          >
            Not Interested
          </button>
        </div>
      </div>
    </div>
  );
};

export default Tour;
