import './App.css';

function App() {
  const names = ['Daniel', 'Jota', 'João', 'Emanuel']
  return (
    <div className="App">
      <header className="App-header">     
        <ul>
          {
            names.map((name, index) => <li key={index}>{name}</li>)
          }
        </ul>
      </header>
    </div>
  );
}

export default App;