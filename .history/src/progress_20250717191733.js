function Progress({ index, numberOfQuestion }) {
  return (
    <header>
      <strong>
        {index + 1}/{numberOfQuestion}
      </strong>
    </header>
  );
}

export default Progress;
