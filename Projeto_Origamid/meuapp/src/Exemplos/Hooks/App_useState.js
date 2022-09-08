import React from "react";

const App = () => {
  const [estado, setEstado] = React.useState(false);
  const [contador, setContador] = React.useState(1);
  //const [pessoa, setPessoa] = React.useState({ nome: "Helio", idade: 33 });
  function change() {
    setEstado(!estado);
    setContador(contador + 1);
  }

  return (
    <>
      <button onClick={change}>{estado ? "Ligado" : "Desligado"}</button>
      <br />
      <br />
      <span>{contador} </span>
    </>
  );
};
export default App;
