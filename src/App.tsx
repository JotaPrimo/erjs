import './App.css';
import Clock from './components/Clock';
import Person from './components/Person';

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
