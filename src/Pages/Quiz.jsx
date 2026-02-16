// src/pages/Quiz.jsx

import { useState } from "react";

function Quiz({ questions, topic, onFinish }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);

  const currentQuestion = questions[currentIndex];

  const handleAnswerClick = (selectedOption) => {
    if (selectedOption === currentQuestion.answer) {
      setScore((prev) => prev + 1);
    }

    const nextIndex = currentIndex + 1;

    if (nextIndex < questions.length) {
      setCurrentIndex(nextIndex);
    } else {
      onFinish(score + (selectedOption === currentQuestion.answer ? 1 : 0));
    }
  };

  return (
    <div className="quiz">
      <h2>{topic.toUpperCase()} Quiz</h2>

      <p>
        Question {currentIndex + 1} of {questions.length}
      </p>

      <h3>{currentQuestion.question}</h3>

      <div className="options">
        {currentQuestion.options.map((option, index) => (
          <button
            key={index}
            onClick={() => handleAnswerClick(option)}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Quiz;
