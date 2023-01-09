// import React, { useState } from "react";
// import QuestionCard from "../components/questioncard/QuestionCard";
// import AnswerCard from "../components/answercard/AnswerCard";
// import AnswerInput from "../components/input/AnswerInput";

// import {
//   timesTableCalculator,
//   multiply,
//   checkAnswer,
// } from "../components/functions/Functions";

// export default function Game() {
//   const [questionValueArray, setQuestionValueArray] = useState([]);
//   const [answerInput, setAnswerInput] = useState();
//   const [answerVisible, setAnswerVisible] = useState(false);

//   const newQuestionValues = timesTableCalculator(12);

//   console.log(`newQuestionValues=${newQuestionValues}`);
//   // function handleClick() {
//   //   setQuestionValueArray(newQuestionValues);
//   // }

//   const answerValue = multiply(newQuestionValues);
//   console.log(`answerValue=${answerValue}`);

//   function onChangeInput(e) {
//     const answerInputNumber = Number(e.target.value);
//     console.log(answerInputNumber);
//     return answerInputNumber;
//   }

//   function handleSubmitAnswer(answerInputNumber) {
//     timesTableCalculator(12);
//     setAnswerInput(answerInputNumber);
//     //setAnswerVisible(true);
//   }

//   return (
//     <div>
//       <div>
//         <QuestionCard questionValues={newQuestionValues} />
//         <AnswerInput onChange={onChangeInput} />
//         <button onClick={handleSubmitAnswer}>Submit Answer</button>
//       </div>
//       {/* {checkAnswer(newQuestionValues, answerInput) && ( */}
//       <div>
//         <AnswerCard answerValue={answerValue} answerVisible={answerVisible} />
//       </div>
//       {/* )} */}
//     </div>
//   );
// }

import React, { useState } from "react";

import { timesTableCalculator } from "../components/functions/Functions";

export default function Game() {
  const [num1, setNum1] = useState(Math.floor(Math.random() * 12) + 1);
  const [num2, setNum2] = useState(Math.floor(Math.random() * 12) + 1);
  const [answer, setAnswer] = useState("");
  const [result, setResult] = useState("");
  const [score, setScore] = useState(0);
  const [showResults, setShowResults] = React.useState(false);

  const checkAnswer = () => {
    setShowResults(true);
    if (parseInt(answer) === num1 * num2) {
      setResult("Correct!");
      setScore(score + 1);
    } else {
      setResult("Incorrect! The answer is " + num1 * num2 + " cadet!");
    }
  };

  const newQuestion = () => {
    setNum1(timesTableCalculator(12));
    setNum2(timesTableCalculator(12));
    setAnswer("");
    setResult("");
    setShowResults(false);
  };

  return (
    <div>
      <h1>Times Tables Game</h1>
      <h2>Score: {score}</h2>
      <h2>
        What is {num1} x {num2}?
      </h2>
      <input
        type="text"
        value={answer}
        onChange={(e) => setAnswer(e.target.value)}
      />
      {showResults ? (
        <button onClick={newQuestion}>New Question</button>
      ) : (
        <button onClick={checkAnswer}>Check Answer</button>
      )}
      <h3>{result}</h3>
    </div>
  );
}
