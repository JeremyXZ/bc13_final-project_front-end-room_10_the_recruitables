import React from "react";
import { useState } from "react";
import LevelButtons from "../components/buttons/LevelButtons";
import "./progress.css";
import { useNavigate } from "react-router-dom";

// icon/image array to be used instead/aswell as buttons. Passed as a prop to levelButtons.
// const icons = ["😀", "😁", "😂", "🤣", "😃", "😆", "😎", "👽", "👾", "🤖"];

export const Progress = () => {
  // state for score count of player
  const [score, setScore] = useState(0);
  // count for array of levels. New level pushed into array ever X amount of points. Then mapped below to return a new button each time score level reached.
  const [levels, setLevels] = useState([1]);

  // handles bringing in new buttons when the score increases. Set to new button every 5 points. Added button to manually increase score in the mean time - will remove later.
  function handleScoreIncrease() {
    let newScore = score + 1;
    setScore(newScore);
    console.log(score);
    if (score === 0) {
      return;
    } else if (score % 5 === 0) {
      let newLevel = score + 1;
      setLevels((addNewLevel) => [...addNewLevel, newLevel]);
      console.log("this is levels array", levels);
    }
  }

  // set up the navigation variables and function
  const navigate = useNavigate();
  const navigateToGame = () => {
    navigate("/game");
  };

  // onClick event handler to pass to buttons. If need to go depending on levels can add conditions based on button index 1-10
  function handleGotoLevel(level) {
    navigateToGame();
  }

  // JSX below returns a grid container.
  // then maps over the levels array which returns a button for each new item in the array. Array increases depending on score. New item every 5 points = new button returned.
  return (
    <div className="progress-page">
      <button onClick={handleScoreIncrease}>MANUAL SCORE INCREASE</button>
      <div className="grid-container">
        {levels.map((levels, index) => (
          <LevelButtons
            clickToGame={handleGotoLevel}
            key={levels.level}
            ButtonNumber={index + 1}
            // icon={icons[index]}
          />
        ))}
        <div className="track">
          <img
            src={require("../images/track1.png")}
            alt="track-1"
            className="track-1"
            id="track-1"
          ></img>
          <img
            src={require("../images/track2.png")}
            alt="track-2"
            className="track-2"
            id="track-2"
          ></img>
        </div>
      </div>
    </div>
  );
};

export default Progress;
