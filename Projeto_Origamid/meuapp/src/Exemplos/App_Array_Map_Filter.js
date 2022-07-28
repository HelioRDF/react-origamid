const Info = () => {
  const produtos = ["Nootebook ", "Tablet ", "Smartphone"];
  const livros = [
    { nome: "Livro A", ano: 2000 },
    { nome: "Livro B", ano: 2010 },
    { nome: "Livro C", ano: 2020 },
    { nome: "Livro E", ano: 2030 },
    { nome: "Livro F", ano: 2040 },
  ];
  const titulo = "Meu App - " + Number.parseInt(Math.random() * 100);
  return (
    <>
      <label>Nome: {titulo}</label>
      <ul>
        {produtos.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>

      <ul>
        {livros
          .filter(({ ano }) => ano >= 2020)
          .map(({ nome }) => (
            <li key={nome}>{nome}</li>
            // console.log(livro.nome);
          ))}
      </ul>
    </>
  );
};

const App = () => {
  return <Info />;
};

export default App;
