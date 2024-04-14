import React, { useState } from "react";
import DifficultySelector from "../components/DifficultySelector";
import ReadingSession from "../components/ReadingSession";
import "../styles/Reading.css";

function Reading() {
  const [level, setLevel] = useState(null);

  const handleDifficultySelect = (selectedLevel) => {
    setLevel(selectedLevel);
  };

  return (
    <div className="reading-content">
      <h1>Reading Module</h1>
      {level === null ? (
        <DifficultySelector onDifficultySelect={handleDifficultySelect} />
      ) : (
        <ReadingSession level={level} setLevel={setLevel} />
      )}
    </div>
  );
}

export default Reading;
