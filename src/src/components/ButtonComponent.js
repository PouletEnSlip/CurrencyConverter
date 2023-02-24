import React, { useState } from "react";

const ButtonComponent = () => {
  const [result, setResult] = useState();
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    var valueNumber = document.getElementById('inputNumber').value,
        valueFrom = document.getElementById('selectFrom').value,
        valueTo = document.getElementById('selectTo').value;
    if (valueNumber === '' || valueNumber <= 0 || valueNumber > 9999999) {
      valueNumber = 1;
    }
    setResult('Chargement...');
    try {
      const key = process.env.REACT_APP_API_KEY;
      const response = await fetch(`https://v6.exchangerate-api.com/v6/${key}/latest/${valueFrom}`);
      const data = await response.json();
      const result = data['conversion_rates'][valueTo] * valueNumber;
      setResult(`${valueNumber} ${valueFrom} = ${result.toFixed(2)} ${valueTo}`);
      document.getElementById('submit').disabled = true;
      setTimeout(() => {
        document.getElementById('submit').disabled = false;
      }, 6000);
      let time = 5;
      const interval = setInterval(() => {
      document.getElementById('submit').value = `Convertir (${time})`;
        time--;
      }, 1000);
      setTimeout(() => {
        clearInterval(interval);
        document.getElementById('submit').value = 'Convertir';
      }, 6000);
    } catch (error) {
      setResult('Une erreur est survenue...');
    }
  };

  return (
    <div id="buttonDiv">
      <div id="result">{result}</div>
      <input
        id="submit"
        type="submit"
        value="Convertir"
        aria-label="Convertir"
        onClick={handleSubmit}
      />
    </div>
  );
};

export default ButtonComponent;
