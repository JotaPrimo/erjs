import { useState } from 'react';
import './App.css';
import Post from './components/Post';
import Card from './components/Card';


function App() {

  const [post] = useState({
    title: 'Jogão de bola',
    content: 'It is a long established fact that a reader will be distracted'
  });

  return (
    <div className="App">      
      <header className="App-header">       
        <Card align='left' title='Titulo do Card'>
          <Post post={post} />
        </Card>
        </header>
    </div>
  );
}

export default App;
