import React from "react";

function ProgressBar({ total, correctCount, currentIndex }) {
  const progressPercentage = (currentIndex/ total) * 100;

  return (
    <div>
      <div style={{ width: "100%", backgroundColor: "#ddd" }}>
        <div
          style={{
            // width 100% if currentIndex=total
            width: `${progressPercentage}%`,
            backgroundColor: "green",
            height: "20px",
          }}
        ></div>
      </div>
      <p>{`${correctCount} out of ${total} correct`}</p>
    </div>
  );
}

export default ProgressBar;
