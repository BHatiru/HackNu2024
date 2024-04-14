import React, { useState, useEffect } from "react";
import axios from "axios";
import Question from "./Question";
import ProgressBar from "./ProgressBar";
import ScoreDisplay from "./ScoreDisplay";
import ScoreModal from './ScoreModal';

import "../styles/ReadingContent.css";

function ReadingSession({ level, setLevel }) {
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [responses, setResponses] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null); // Added to handle errors
  const [showScore, setShowScore] = useState(false);

  const [experience, setExperience] = useState(0);
  const [health, setHealth] = useState(100); // Default health points
  const [coins, setCoins] = useState(0); // Virtual currency

  useEffect(() => {
    fetchQuestions();
  }, [level]);
  const fetchQuestions = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await axios.get(
        "https://hacknu24.onrender.com/reading/" + level
      );

      //for debug purpose only, show the response data to text
      setQuestions(response.data);
    } catch (error) {
      console.error("Error fetching questions:", error);
      // Capture more detailed error information
      let errorInfo = "";
      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        errorInfo = `Server responded with status: ${error.response.status}`;
      } else if (error.request) {
        // The request was made but no response was received
        errorInfo = "No response received";
      } else {
        // Something happened in setting up the request that triggered an Error
        errorInfo = error.message;
      }
      setError(`Error: ${errorInfo}`);
    } finally {
      setIsLoading(false);
    }
  };
  const handleAnswer = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
      setExperience(experience + 10); // Gain 10 experience points for each correct answer
      setCoins(coins + 5); // Gain 5 coins for each correct answer
    } else {
        setHealth(health - 5); // Lose 5 health points for a wrong answer
    }
    setResponses([...responses, isCorrect]);
    const nextIndex = currentQuestionIndex + 1;
    if (nextIndex < questions.length) {
        setCurrentQuestionIndex(nextIndex);
    }
    else {
        setShowScore(true);
    }
  };

  if (isLoading) {
    return (
      <div className="loading-container">
        <div className="loading-spinner"></div>
      </div>
    );
  }

  const handleCloseModal = (retry) => {
    setShowScore(false);
    if (retry) {
        setScore(0);
        setCurrentQuestionIndex(0);
        setResponses([]);
    } else {
        setLevel(null); // Assuming setLevel is passed as a prop to reset the difficulty level
    }
};

  // setLevel is a function passed as a prop to reset the difficulty level
  const handleBuyHealth = () => {
    if (coins >= 10) {
        setHealth(health + 10);
        setCoins(coins - 10);
    } else {
        alert('Not enough coins!');
    }
  };

  return (
    <div>
    <div>
      <p>Experience: {experience}</p>
      <p>Health: {health}</p>
      <p>Coins: {coins}</p>
      {health < 50 && (
          <button onClick={() => handleBuyHealth()}>Buy Health (10 Coins)</button>
      )}
    </div>
      {questions.length > 0 ? (
        <>
          <ProgressBar
            total={questions.length}
            correctCount={score}
            currentIndex={currentQuestionIndex}
          />
          <Question
            data={questions[currentQuestionIndex]}
            onAnswer={handleAnswer}
          />
          {showScore && (
        <ScoreModal score={score} total={questions.length} onClose={handleCloseModal} />
          )}
        </>
      ) : (
        <div className="loading-container">
          <div className="loading-spinner"></div>
        </div>
      )}
    </div>
  );
}

export default ReadingSession;
