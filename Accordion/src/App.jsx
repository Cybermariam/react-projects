import React from "react";
import questions from "./data";
import Question from "./Question";

const App = () => {
  return (
    <div className="min-h-screen mx-5 flex flex-col items-center justify-center space-y-4">
      {questions.map((question) => {
        const { id, title, info } = question;
        return <Question id={id} title={title} info={info} />;
      })}
    </div>
  );
};

export default App;
