import React from "react";

function QuizCard({ item, index, value, setValue }) {
  const handler = (e) => {
    console.log(e.target.value);
    if (e.target.value === item.answer) {
      console.log(true);
      value = value + 1;
      setValue(value);
      //   setValue(value + 1);
      console.log(value + 1);
    } else {
      console.log(false);
    }
    // if (e.target.value === item.answer) {
    //   console.log(true);
    //   setValue(value + 1);
    // }
    console.log(value);
  };

  return (
    <div>
      <p>{item.title}</p>
      <form onChange={handler}>
        <input type="radio" id="A" name={index} value="A" />
        <label for="A">A. {item.options[0]}</label>
        <input type="radio" id="B" name={index} value="B" />
        <label for="B">B. {item.options[1]}</label>
        <input type="radio" id="C" name={index} value="C" />
        <label for="C">C. {item.options[2]}</label>
        <input type="radio" id="D" name={index} value="D" />
        <label for="D">D. {item.options[3]}</label>
      </form>
    </div>
  );
}

export default QuizCard;
