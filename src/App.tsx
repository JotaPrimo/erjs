import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [names, setNames] = useState([
    "Daniel",
    "Thiago",
    "Alex",
    "Jão",
    "Alex",
  ]);

  useEffect(() => {
    console.log("useEffect, vai aparecer apenas uma unica vez", names);
    // tenho acesso ao dom
  }, [names]);

  /**
   * Devo usar arrow function ou passar a refencia da função
   */
  return (
    <div className="App">
      <header className="App-header">
        <ul>
          {names.map((name, index) => (
            <li key={index}>{name}</li>
          ))}
        </ul>

        <button
          onClick={() => {
            setNames([...names, "Jota"]);
          }}
        >
          Novo usuario
        </button>
      </header>
    </div>
  );
}

export default App;
