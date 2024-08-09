import React from 'react';
import logo from './logo.svg';
import './App.css';
import HelloWorld from './HelloWorld';


// isto é um componente : uma função que retorna html
function App() {
  return (
    <div className="App">
      <header className="App-header">
        
        <HelloWorld />
        
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Olá mundo
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
