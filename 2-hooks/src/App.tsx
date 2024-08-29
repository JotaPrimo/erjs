import { useRef } from 'react';
import './App.css';
import PeopleList from './hooks/PeopleList';
import useCounter from './hooks/useCounter';

function App() {

  const number = useCounter(0)
  const counter = useRef(2) // este valor é mutavel, pode receber um valor initial
  // counter.current = 5 essa alteração é valida, e não causa re-renderização
  // do componente

  return (
    <div className="App">
      <header className="App-header">
        { number }


      <div style={{ backgroundColor: 'blueviolet'}}>{counter.current}</div>

       <PeopleList />
       <PeopleList />
      </header>
    </div>
  );
}

export default App;
