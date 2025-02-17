import './App.css';

function App() {

  function handleClick(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    e.preventDefault();
    console.log(e);    
  }

  /**
   * Devo usar arrow function ou passar a refencia da função
   */
  return (
    <div className="App">
      <header className="App-header">       
       <form action="/test">
        <button onClick={ handleClick }>
            Clique em mim
          </button>
       </form>
      </header>      
    </div>
  );
}

export default App;