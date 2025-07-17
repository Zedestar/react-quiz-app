function Progress({ index, numberOfQuestion, totalPoints, points }) {
  return (
    <header className="progress">
      <strong>
        {index + 1}/{numberOfQuestion}
      </strong>
      <strong>
        {points}/{totalPoints}
      </strong>
    </header>
  );
}

export default Progress;
