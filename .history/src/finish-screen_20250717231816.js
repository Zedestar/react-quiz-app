function FinishScreen({ points, totalPoints, dispach }) {
  return (
    <>
      <p className="results">
        You have got
        <strong>{points}</strong> out of <strong>{totalPoints}</strong>
      </p>
      <button className="btn btn-ui">Retake quiz</button>
    </>
  );
}

export default FinishScreen;
