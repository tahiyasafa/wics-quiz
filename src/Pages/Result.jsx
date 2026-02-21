
function Result({ score, total }) {
  return (
    <div className="result">

      <div>
        <h1 style={{ color: '#491661', fontSize: '2rem' }}>Your Score</h1>
        <h2>{score} / {total}</h2>
        {score >= 6 ? (
        <>
        <h4>You get a cookie!</h4>
        <img src="cookies.png" className="cookie" />
      </>
      ) : (
        <>
        <h4>Better luck next time.</h4>
        <img src="sad.png" className="cookie" />
        </>
      )}
      <button onClick={() => window.location.reload()}>Try Again ↻</button>
      </div>
    </div>
  );
}

export default Result;