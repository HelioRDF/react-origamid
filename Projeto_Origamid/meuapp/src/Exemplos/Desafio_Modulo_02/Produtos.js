import React from "react";
import Menu from "./Menu";
import Produto from "./Produto";
import Titulo from "./Titulo";

const produtos = [
  { nome: "Notebook", propriedades: ["16gb ram", "512gb"] },
  { nome: "Smartphone", propriedades: ["2gb ram", "128gb"] },
];

const Produtos = () => {
  return (
    <>
      <Menu />
      <Titulo titulo="Produtos" />
      {produtos.map((prod) => (
        <Produto key={prod.nome} {...prod} />
      ))}
    </>
  );
};

export default Produtos;
