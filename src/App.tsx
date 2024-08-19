import { useEffect, useState } from 'react';
import './App.css';

function App() {
  
  const [names, setNames] = useState(
    [
      'Daniel', 'Jota', 'João', 'Emanuel',
      'Jessica', 'Caleb', 'Jughead'
    ]
  )


  // gerenciar efeitos colaterais... buscando dados na api
  useEffect( () => {
    // será exeutado no momento do didmount event
    console.log(names);    
  }, [names])
  // ao inserir como depencia o names, toda vez que  for altearado seu estado
  // esse effect será executado novamente
  
  return (
    <div className="App">
      <header className="App-header">     
        <ul>
          {
            names.map((name, index) => <li key={index}>{name}</li>)
          }
        </ul>

        <button onClick={() => {
          setNames([...names, 'Jeremias'])
        }}>
          Atualizar lista
        </button>
      </header>
    </div>
  );
}

export default App;