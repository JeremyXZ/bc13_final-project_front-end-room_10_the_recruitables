import React from "react";
import "./questionCard.css";

export default function QuestionCardColumn (props) {
  return (
    <div className="questionDiv">
      <h2 className="h2QuestionGame">{props.noOfQuestions + ")  "}</h2>
      <h2 className="h2QuestionGame">
        {props.value1} 
      </h2>
      <h2 className="h2QuestionGame">
        {props.operation} 
      </h2>
      <h2 className="h2QuestionGame">
        {props.value2} 
      </h2>
      <input
        className="inputGame"
        type="number"
        value={props.answerInput}
        onChange={(e) => props.setAnswerInput(e.target.value)}
        onKeyDown={(e) => {
          // console.log(e);
          if (e.key === "Enter") {
            props.checkAnswer();
            props.setAnswerInput("");
          }
        }}
      />
    </div>
  );
}

