const Info = () => {
  const produtos = [
    {
      id: 1,
      nome: "Smartphone",
      preco: "R$ 2000",
      cores: ["#29d8d5", "#252a34", "#fc3766"],
    },
    {
      id: 2,
      nome: "Notebook",
      preco: "R$ 3000",
      cores: ["#ffd045", "#d4394b", "#f37c59"],
    },
    {
      id: 3,
      nome: "Tablet",
      preco: "R$ 1500",
      cores: ["#365069", "#47c1c8", "#f95786"],
    },
  ];

  const dados = produtos.filter(
    ({ preco }) => Number(preco.replace("R$ ", "")) > 1500
  );
  console.log(dados);
  return (
    <section>
      {dados.map(({ id, nome, preco, cores }) => (
        <ul style={{ listStyle: "none" }}>
          <li key={id} style={{ fontSize: 26 }}>
            <span>{id} - </span>
            <span>{nome}</span>
          </li>
          <li key={id + "p"}>Valor: {preco}</li>
          {cores.map((cor) => (
            <li style={{ backgroundColor: cor, color: "white" }} key={cor}>
              {" "}
              {cor}
            </li>
          ))}
          <span>
            -----------------------------------------------------------------------------------------------------------------
          </span>
          <br />
        </ul>
      ))}
    </section>
  );
};

const App = () => {
  return <Info />;
};

export default App;
