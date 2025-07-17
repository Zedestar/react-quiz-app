function FinishScreen({ points, totalPoints, dispach }) {
  return (
    <>
      <p className="results">
        You have got
        <strong>{points}</strong> out of <strong>{totalPoints}</strong>
      </p>
      <button></button>
    </>
  );
}

export default FinishScreen;
