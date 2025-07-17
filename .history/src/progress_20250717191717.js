function Progress({ index, numberOfQuestion }) {
  return (
    <header>
      <strong>
        {index}/{numberOfQuestion}
      </strong>
    </header>
  );
}

export default Progress;
