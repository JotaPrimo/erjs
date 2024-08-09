import './App.css';
import Clock from './Clock';


// isto é um componente : uma função que retorna html
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Clock />
        </header>
    </div>
  );
}

export default App;
