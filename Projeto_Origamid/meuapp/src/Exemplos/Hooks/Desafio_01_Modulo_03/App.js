import Produto from "./Produto";
import React from "react";
//https://ranekapi.origamid.dev/json/api/produto/tablet

const App = () => {
  const [dados, setDados] = React.useState(null);
  const [carregando, setCarregando] = React.useState(null);

  const url = "https://ranekapi.origamid.dev/json/api/produto/";

  async function handleClick(event) {
    setCarregando(true);
    let item = event.target.innerText;
    const response = await fetch(url + item);
    const json = await response.json();
    setDados(json);
    setCarregando(false);
  }
  return (
    <>
      <button style={{ margin: ".5rem" }} onClick={handleClick}>
        NoteBook
      </button>
      <button style={{ margin: ".5rem" }} onClick={handleClick}>
        Smartphone
      </button>
      <button style={{ margin: ".5rem" }} onClick={handleClick}>
        Tablet
      </button>
      {carregando && <p>Carregando...</p>}
      {!carregando && dados && <Produto dados={dados} />}
    </>
  );
};
export default App;
