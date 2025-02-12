import { useState } from 'react';
import './App.css';
import Post from './components/Post';
import Sidebar from './components/Sidebar';


function App() {

  const [post, setPost] = useState({
    title: 'Jogão de bola',
    content: 'It is a long established fact that a reader will be distracted'
  });

  // alterando valor do state
  setTimeout(() => {
    setPost({
      title: 'Title alterado',
      content: 'Contrary to popular belief, Lorem Ipsum is not simply random text'
    })
  }, 2000)

  return (
    <div className="App">
      <header className="App-header">      
         <Sidebar post={post} />
         <Post post={post} />
      </header>
    </div>
  );
}

export default App;
