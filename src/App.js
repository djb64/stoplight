import { useState } from "react";
import "./App.css";
import Stoplight from './components/StopLight/StopLight';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Stoplight App</h1>
      <StopLight />
    </div>
  );
}

export default App;