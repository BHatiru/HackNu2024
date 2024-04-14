import React, { useState, useEffect } from "react";

import "../styles/ReadingContent.css";
function Question({ data, onAnswer }) {
    const [selectedOption, setSelectedOption] = useState('');


    const passage = data.text;
    const question = data.question;
    const options = data.options;
    const answer = data.answer;

    const handleSubmit = (event) => {
        event.preventDefault();
        if (answer === selectedOption) {
            onAnswer(true);
        } else {
            onAnswer(false);
        }
    };


    return (
        <div className="reading-content">
            <h2 className="reading-header">Reading Practice</h2>
            <div className="reading-passage">
                <p>{passage}</p>
            </div>

            <form onSubmit={handleSubmit} className="question-form">
                <fieldset>
                    <legend className="question-text">{question}</legend>
                    {options.map((option, index) => (
                        <div className="option-container" key={index}>
                            <input
                                type="radio"
                                id={`choice${index}`}
                                name="answer"
                                value={option}
                                checked={selectedOption === option}
                                onChange={(e) => setSelectedOption(e.target.value)}
                                className="option-input"
                            />
                            <label htmlFor={`choice${index}`} className="option-label">
                                {String.fromCharCode(65 + index)} {option}
                            </label>
                        </div>
                    ))}
                </fieldset>
                <button type="submit" className="submit-button" disabled={!selectedOption}>Submit Answer</button>
            </form>
        </div>
    );
}

export default Question;
