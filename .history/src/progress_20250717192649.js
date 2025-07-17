function Progress({ index, numberOfQuestion, totalPoints }) {
  return (
    <header>
      <strong>
        {index + 1}/{numberOfQuestion}
      </strong>
    </header>
  );
}

export default Progress;
