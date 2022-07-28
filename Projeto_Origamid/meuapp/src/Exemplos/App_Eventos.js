function acao(event) {
  console.log(event.clientX);
}

const Info = () => {
  return (
    <section>
      <button onClick={acao}> toggle</button>
    </section>
  );
};

const App = () => {
  return <Info />;
};
export default App;
