import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Title from "./components/Title";
import LikeCounter from "./components/LikeCounter";
import AwesomeAnimals from "./components/AwesomeAnimals";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <main>
          <Title />
          <LikeCounter />
          <AwesomeAnimals />
        </main>
      </header>
    </div>
  );
}

export default App;
