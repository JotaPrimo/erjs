import './App.css';
import PeopleList from './hooks/PeopleList';
import useCounter from './hooks/useCounter';

function App() {

  const number = useCounter(0)

  return (
    <div className="App">
      <header className="App-header">
        { number }
       <PeopleList />
       <PeopleList />
      </header>
    </div>
  );
}

export default App;
