import React, { useState } from "react";

const Question = ({ id, title, info }) => {
  const [checkButton, setCheckButton] = useState(false);

  const confirmButton = () => {
    setCheckButton(!checkButton);
  };
  return (
    <div key={id} className="w-full">
      <div className="flex  pb-2 justify-between items-center shadow px-4 py-2 ">
        <h3>{title}</h3>
        <button
          className="text-white bg-green-600 px-4 py-2 rounded-full"
          onClick={confirmButton}
        >
          {checkButton ? "-" : "+"}
        </button>
      </div>
      <div>{checkButton ? <p>{info}</p> : ""}</div>
    </div>
  );
};

export default Question;
