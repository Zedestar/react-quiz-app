function Main({ children }) {
  return (
    <main>
      <p>this is the sample above the children</p>
      {children}
      <p>This is the sample below the children</p>
    </main>
  );
}

export default Main;
