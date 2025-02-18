import './App.css';
import useCounter from './hooks/useCounter';
import PeopleList from './PeopleList';

function App() {
  // componentes re-renderizam apenas por states ou props
  // efeito colateral é qualquer coisa fora do ciclo de renderização
  // Como estou chamando o useCounter na raiz do App, aqui será executado
  const number = useCounter()

  return (
    <div className="App">
      { number }
      <PeopleList />
      <br />
      <PeopleList />
    </div>
  );
}

export default App;
