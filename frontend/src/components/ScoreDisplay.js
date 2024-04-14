import React from "react";

function ScoreDisplay({ score, total }) {
  return (
    <div>
      <h2>Your Score</h2>
      <p>{`${score} out of ${total} correct`}</p>
    </div>
  );
}

export default ScoreDisplay;
