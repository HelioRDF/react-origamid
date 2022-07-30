import React from "react";

const Produto = ({ nome, propriedades }) => {
  return (
    <>
      <div style={{ border: "1px solid", margin: "1rem 0", padding: "1rem" }}>
        <p>{nome}</p>
        {propriedades.map((obj) => (
          <li key={obj}>{obj}</li>
        ))}
      </div>
    </>
  );
};

export default Produto;
