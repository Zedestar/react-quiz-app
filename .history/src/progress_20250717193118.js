function Progress({ index, numberOfQuestion, totalPoints, points }) {
  return (
    <header className="progress">
      <p>
        Question
        {index + 1}/{numberOfQuestion}
      </p>
      <p>
        Points
        {points}/{totalPoints}
      </p>
    </header>
  );
}

export default Progress;
