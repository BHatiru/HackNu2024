import React, { createContext, useContext, useState } from "react";
import axios from "axios";

const ReadingContext = createContext();

export const useReading = () => useContext(ReadingContext);

export const ReadingProvider = ({ children }) => {
  const [level, setLevel] = useState("");
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [progress, setProgress] = useState({ correct: 0, incorrect: 0 });

  const chooseLevel = (level) => {
    setLevel(level);
    fetchQuestions(level);
  };

  const fetchQuestions = async (level) => {
    try {
      const response = await axios.get(
        `https://hacknu24.onrender.com/reading/${level}`
      );
      setQuestions(response.data);
      setCurrentQuestion(0);
    } catch (error) {
      console.error("Failed to fetch questions:", error);
    }
  };

  const answerQuestion = (isCorrect) => {
    if (isCorrect) {
      setProgress((prev) => ({ ...prev, correct: prev.correct + 1 }));
    } else {
      setProgress((prev) => ({ ...prev, incorrect: prev.incorrect + 1 }));
    }

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion((prev) => prev + 1);
    } else {
      // Handle completion here, e.g., show score, update user progress, etc.
      console.log("Completed. Score:", progress);
    }
  };

  return (
    <ReadingContext.Provider
      value={{
        level,
        questions,
        currentQuestion,
        progress,
        chooseLevel,
        answerQuestion,
      }}
    >
      {children}
    </ReadingContext.Provider>
  );
};
