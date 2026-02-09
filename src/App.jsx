import { useState } from "react";
import "./App.css";

const questions = [
  {
    question: "Which language is used for web styling?",
    options: ["HTML", "CSS", "JavaScript", "Python"],
    answer: "CSS",
  },
  {
    question: "What does CPU stand for?",
    options: [
      "Central Process Unit",
      "Central Processing Unit",
      "Computer Personal Unit",
      "Central Power Unit",
    ],
    answer: "Central Processing Unit",
  },
  {
    question: "Which company created React?",
    options: ["Google", "Microsoft", "Meta", "Amazon"],
    answer: "Meta",
  },
];

function App() {
  const [index, setIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);

  const handleClick = (option) => {
    if (option === questions[index].answer) {
      setScore((prev) => prev + 1);
    }

    if (index + 1 < questions.length) {
      setIndex(index + 1);
    } else {
      setFinished(true);
    }
  };

  const restart = () => {
    setIndex(0);
    setScore(0);
    setFinished(false);
  };

  return (
    <div className="app">
      <h1>WiCS Kickstart Quiz 💜</h1>

      {finished ? (
        <div>
          <h2>Your Score</h2>
          <p>{score} / {questions.length}</p>
          <button onClick={restart}>Play Again</button>
        </div>
      ) : (
        <>
          <h2>{questions[index].question}</h2>
          {questions[index].options.map((opt, i) => (
            <button key={i} onClick={() => handleClick(opt)}>
              {opt}
            </button>
          ))}
          <p>
            Question {index + 1} of {questions.length}
          </p>
        </>
      )}
    </div>
  );
}

export default App;
