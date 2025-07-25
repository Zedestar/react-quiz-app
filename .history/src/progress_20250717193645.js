function Progress({ index, numberOfQuestion, totalPoints, points }) {
  return (
    <header className="progress">
      <progress max={numberOfQuestion} value={index}></progress>
      <p>
        Question
        <strong>{index + 1}</strong>/{numberOfQuestion}
      </p>
      <p>
        Points
        <strong>{points}</strong>/{totalPoints}
      </p>
    </header>
  );
}

export default Progress;
