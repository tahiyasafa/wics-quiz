// src/App.jsx

import { useState } from "react";
import Home from "./Pages/Home";
import Quiz from "./Pages/Quiz";
import Result from "./Pages/Result";

import linuxQuestions from "./data/linux";
import cppQuestions from "./data/cpp";

const questionSets = {
  linux: linuxQuestions,
  cpp: cppQuestions,
};

function App() {
  const [currentPage, setCurrentPage] = useState("home");
  const [selectedTopic, setSelectedTopic] = useState(null);
  const [score, setScore] = useState(0);

  const startQuiz = (topicKey) => {
    setSelectedTopic(topicKey);
    setScore(0);
    setCurrentPage("quiz");
  };

  const finishQuiz = (finalScore) => {
    setScore(finalScore);
    setCurrentPage("result");
  };

  const goHome = () => {
    setCurrentPage("home");
    setSelectedTopic(null);
    setScore(0);
  };

  return (
    <div className="app">
      {currentPage === "home" && (
        <Home onSelectTopic={startQuiz} />
      )}

      {currentPage === "quiz" && (
        <Quiz
          questions={questionSets[selectedTopic]}
          topic={selectedTopic}
          onFinish={finishQuiz}
        />
      )}

      {currentPage === "result" && (
        <Result
          score={score}
          total={questionSets[selectedTopic].length}
          onRestart={goHome}
        />
      )}
    </div>
  );
}

export default App;
