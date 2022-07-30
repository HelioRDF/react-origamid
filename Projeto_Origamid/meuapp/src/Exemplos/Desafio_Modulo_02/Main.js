import React from "react";
import Home from "./Home";
import Produtos from "./Produtos";

const Main = () => {
  const pathAtual = window.location.pathname;
  return <>{pathAtual === "/" ? <Home /> : <Produtos />}</>;
};

export default Main;
