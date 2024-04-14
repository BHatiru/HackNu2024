import React from "react";

function DifficultySelector({ onDifficultySelect }) {
  return (
    <div>
      <h1>Select Your Difficulty Level</h1>
      <button onClick={() => onDifficultySelect(1)}>Level 1 - Beginner</button>
      <button onClick={() => onDifficultySelect(2)}>
        Level 2 - Intermediate
      </button>
      <button onClick={() => onDifficultySelect(3)}>Level 3 - Advanced</button>
    </div>
  );
}

export default DifficultySelector;
