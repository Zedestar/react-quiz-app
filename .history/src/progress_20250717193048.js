function Progress({ index, numberOfQuestion, totalPoints, points }) {
  return (
    <header className="progress">
      <p>
        {index + 1}/{numberOfQuestion}
      </p>
      <p>
        {points}/{totalPoints}
      </p>
    </header>
  );
}

export default Progress;
