// src/pages/Quiz.jsx

import { useState, useEffect } from "react";

function Quiz({ questions, topic, onFinish }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(8);
  const [answered, setAnswered] = useState(false);
  const [finalScore, setFinalScore] = useState(null);

  const currentQuestion = questions[currentIndex];

  // Check if quiz is finished and call onFinish with final score
  useEffect(() => {
    if (finalScore !== null) {
      onFinish(finalScore);
    }
  }, [finalScore, onFinish]);

  // Timer effect
  useEffect(() => {
    if (answered) return; // Stop timer if already answered

    const timer = setTimeout(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearTimeout(timer);
  }, [timeLeft, answered]);

  // Auto-advance when timer reaches 0
  useEffect(() => {
    if (timeLeft === 0 && !answered) {
      setAnswered(true);
      setTimeout(() => {
        handleNextQuestion();
      }, 500);
    }
  }, [timeLeft, answered]);

  // Reset timer when question changes
  useEffect(() => {
    setTimeLeft(8);
    setAnswered(false);
  }, [currentIndex]);

  const handleAnswerClick = (selectedOption) => {
    setAnswered(true);
    if (selectedOption === currentQuestion.answer) {
      setScore((prev) => prev + 1);
    }

    // Delay before moving to next question for visual feedback
    setTimeout(() => {
      handleNextQuestion();
    }, 500);
  };

  const handleNextQuestion = () => {
    const nextIndex = currentIndex + 1;

    if (nextIndex < questions.length) {
      setCurrentIndex(nextIndex);
    } else {
      setFinalScore(score);
    }
  };

  return (
    <div className="quiz">
      <h2>{topic.toUpperCase()} Quiz</h2>

      <p>
        Question {currentIndex + 1} of {questions.length}
      </p>

      {/* Timer display */}
      <div className="timer-container">
        <div className={`timer ${timeLeft <= 2 ? 'timer-danger' : ''}`}>
          {timeLeft}s
        </div>
      </div>

      <h3>{currentQuestion.question}</h3>

      <div className="options">
        {currentQuestion.options.map((option, index) => (
          <button
            key={index}
            onClick={() => handleAnswerClick(option)}
            disabled={answered}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Quiz;
