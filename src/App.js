import { useState } from "react";
import "./App.css";
import Stoplight from './components/StopLight/StopLight';

function App() {
  return (
    <div>
      <h1>Stoplight App</h1>
      <StopLight />
    </div>
  );
}

export default App;