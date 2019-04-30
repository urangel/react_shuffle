import React from 'react';
import Navbar from "./components/Navbar";
import CardContainer from "./components/CardContainer"
import './App.css';

function App() {

  const state = {
    someVal: null
  }

  return (
    <div className="App">
      <Navbar />
      <CardContainer />
    </div>
  );
}

export default App;


