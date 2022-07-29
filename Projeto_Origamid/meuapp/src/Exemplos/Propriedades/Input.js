import React from "react";

const Input = ({ id, texto, tipo, ...props }) => {
  return (
    <>
      <p>
        <label htmlFor={id} {...props}>
          {texto}
        </label>
        <input id={id} {...props} />
      </p>
    </>
  );
};

export default Input;
