import React from "react";
import Input from "./Input";

const Form = () => {
  return (
    <form>
      <Input
        id="nome"
        type="text"
        texto="Nome:"
        style={{ fontSize: "22px", color: "blue" }}
      />

      <Input id="senha" type="password" texto="Senha" />
    </form>
  );
};

export default Form;
