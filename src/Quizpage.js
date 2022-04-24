import React, { useState } from "react";
import Questions from "./Questions.json";
import QuizCard from "./QuizCard";

function Quizpage() {
  const [value, setValue] = useState(0);
  const submit = () => {
    alert("You got " + value + " marks");
  };
  return (
    <div>
      {Questions.map((item, index) => (
        <div key={index}>
          <QuizCard
            item={item}
            index={index}
            value={value}
            setValue={setValue}
          />
        </div>
      ))}
      <button onClick={submit}>Submit</button>
    </div>
  );
}

export default Quizpage;
