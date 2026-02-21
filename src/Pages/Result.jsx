
function Result({ score, total }) {
  return (
    <div className="result">
      <h1>WiCS Quiz Game</h1>

      <div>
        <h2>Your Score</h2>
        <p>{score} / {total}</p>
        {score >= 6 ? (
        <>
        <h4>You get a cookie!</h4>
        <img src="cookies.png" className="cookie" />
      </>
      ) : (
        <h4>Better luck next time.</h4>
      )}
      </div>
    </div>
  );
}

export default Result;