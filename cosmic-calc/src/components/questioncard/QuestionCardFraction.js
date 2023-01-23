import react from "react";
import "./questionCardFraction.css";

export default function QuestionCardFraction(props) {
  return (
    <div className="questionDiv">
    <h1> {props.h1}</h1>
      <h2 className="h2QuestionGame">{props.noOfQuestions + ")  "}</h2>
      <h2 className="h2QuestionGame">
        {props.value1}
      </h2>
      <h2 className="h2QuestionGame">
      {props.value2} 
      </h2>
      <h2 className="h2QuestionGame">
      {props.value3}
      </h2>
      <h2 className="h2QuestionGame">
      =
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
