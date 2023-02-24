import React from "react";

const InputComponent = () => {
  return (
    <div id="inputDiv">
      <input 
        type="number"
        min="0"
        max="9999999"
        placeholder="1"
        aria-label="Valeur à convertir"
        id="inputNumber"
        required
      />
    </div>
  );
};

export default InputComponent;
