function FinishScreen({ points, totalPoints }) {
  return (
    <p className="results">
      You have got
      <strong>{points}</strong> out of <strong>{totalPoints}</strong>
    </p>
  );
}

export default FinishScreen;
