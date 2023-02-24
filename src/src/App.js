import React from "react";
import SelectComponent from "./components/SelectComponent";
import ButtonComponent from "./components/ButtonComponent";
import InputComponent from "./components/InputComponent";
import "./assets/css/style.css";

function App() {
  return (
    <div className="wrapper">
      <header>Convertisseur</header>
      <section>
        <InputComponent />
        <SelectComponent />
      </section>
      <ButtonComponent />
    </div>
  );
}

export default App;
