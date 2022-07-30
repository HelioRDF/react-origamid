import React from "react";
import Menu from "./Menu";
import Titulo from "./Titulo";

const Home = () => {
  return (
    <>
      <Menu />
      <Titulo titulo="Home" />
      <div>Essa é a home do site</div>
    </>
  );
};

export default Home;
