import React from "react";

const Titulo = (props) => {
  return <h1 style={{ color: props.cor }}>{props.info}</h1>;
};
const Subtitulo = ({ texto, cor, children }) => {
  return (
    <h2 style={{ color: cor }}>
      {texto} {children}
    </h2>
  );
};

const App = () => {
  return (
    <React.Fragment>
      <Titulo cor="red" info="Hello World!" />
      <Subtitulo cor="green" texto="My Friends">
        , children aqui!
      </Subtitulo>
    </React.Fragment>
  );
};
export default App;
