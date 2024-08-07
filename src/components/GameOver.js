import React, { useContext } from "react";
import { AppContext } from "../App";

function GameOver() {
  const { gameOver, currAttempt, correctWord, restart } =
    useContext(AppContext);
  return (
    <div className="game">
      <h3>{gameOver.guessedWord ? "You Correctly guessed" : "You failed"} </h3>
      <h1>Correct:{correctWord}</h1>
      {gameOver.guessedWord && (
        <h3>You guessed in {currAttempt.attempt} attempts</h3>
      )}
      <button
        onClick={() => restart()}
        id={gameOver.guessedWord ? "green" : "red"}
      >RESTART</button>
    </div>
  );
}

export default GameOver;
