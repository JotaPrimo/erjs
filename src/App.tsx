import './App.css';
import Clock from './Clock';
import Person from './Person';


// isto é um componente : uma função que retorna html
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Clock />
        <Person />
      </header>
    </div>
  );
}

export default App;
