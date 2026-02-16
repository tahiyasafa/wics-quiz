function Result({ score, total }) {
  return (
    <div className="result">
      <h1>WiCS Quiz Game</h1>

      <div>
        <h2>Your Score</h2>
        <p>{score} / {total}</p>
      </div>
    </div>
  );
}

export default Result;