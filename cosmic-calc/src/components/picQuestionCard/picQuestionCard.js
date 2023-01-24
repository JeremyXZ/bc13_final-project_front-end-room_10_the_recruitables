import React from "react";
import "./picQuestionCard.css";

export default function PicQuestionCard(props) {
  return (
    <div className="questionDiv">
      <h2 className="h2QuestionGame">{props.noOfQuestions + ")  "}</h2>
      <div className="question-container">
        <h2 className="h2QuestionGame">{props.text}</h2>
        <img className="QuestionImg" src={props.src} alt={props.imgAlt} />
      </div>
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
