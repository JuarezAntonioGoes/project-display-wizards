import React from "react";
import { Persons } from "./Persons";

import Normalize from "react-normalize";
import "./App.css";

import ImageCoruja from "./assets/img/coruja.png";
import "./assets/fonts/HARRYP__.TTF";

function App() {
  const containerInit = React.useRef(null);

  const handleNext = (e) => {
    containerInit.current.classList.add("active");
  };

  return (
    <div className="App">
      <Normalize />

      <main ref={containerInit} className="container--intro pag-initial">
        <h1 className="title--event">Torneio Tribruxo</h1>
        <p className="introduction--event">
          Clique no botão para <br /> encontrar os feiticeiros
        </p>

        <button className="play--button" onClick={handleNext}>
          Iniciar
        </button>

        <img src={ImageCoruja} alt="coruja" className="image--capa" />

        <p className="signature">J.A Junior</p>
      </main>

      <Persons />
    </div>
  );
}

export default App;
