const mario = {
  cliente: "Mario",
  idade: 31,
  ativa: false,
  compras: [
    { nome: "Notebook", preco: "R$ 2500" },
    { nome: "Geladeira", preco: "R$ 3000" },
    { nome: "Smartphone", preco: "R$ 1500" },
    { nome: "Guitarra", preco: "R$ 3500" },
  ],
};

const luana = {
  cliente: "Luana",
  idade: 27,
  ativa: true,
  compras: [
    { nome: "Notebook", preco: "R$ 2500" },
    { nome: "Geladeira", preco: "R$ 3000" },
    { nome: "Smartphone", preco: "R$ 1500" },
  ],
};

const Info = () => {
  const cliente = mario;
  const gastos = calcularGastoMap(cliente.compras);
  const valorMax = 10000;
  let gastouMuito = gastos > valorMax;
  console.log(gastouMuito);

  return (
    <>
      <label>Nome: {cliente.cliente}</label>
      <label>Idade: {cliente.idade} </label>
      <div>
        Status:{" "}
        <span style={{ color: cliente.ativa ? "blue" : "red" }}>
          {cliente.ativa ? "Ativa" : "Inativa"}{" "}
        </span>
      </div>
      <label>Total gasto: R$ {gastos} </label>
      <label>Obs: {gastouMuito ? "Gastou muito" : "Ok"} </label>
    </>
  );
};

function calcularGasto(compras) {
  let soma = 0;
  compras.forEach((compra) => {
    const valor = compra.preco.replace("R$ ", "");
    const valorNumber = Number.parseInt(valor);
    soma += valorNumber;
  });
  return Number.parseInt(soma);
}

function calcularGastoMap(compras) {
  const total = compras
    .map(({ preco }) => Number(preco.replace("R$ ", "")))
    .reduce((a, b) => a + b);
  console.log("total:", total);
  return total;
}

const App = () => {
  const titulo = "Meu App XPTO - " + Number.parseInt(Math.random() * 100);
  return <Info />;
};

export default App;
