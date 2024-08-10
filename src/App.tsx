import { useEffect, useState } from 'react';
import './App.css';
import Post from './components/Post';
import Sidebar from './components/Sidebar';


// trabalhando com props
// enviando props com expressoes js
function App() {

  // criar um state post
  // toda vez que uma prop tem seu state alterado, o componente re-redenderiza
  // por isso que quando se usar o set parta alterar o state post,  que é uma prop de post
  // ele re-renderiza
  const [post, setPost] = useState({
    title: 'Título muito maneiro',
    content: 'Lorem ipsum dolor sit amet'
  })

  return (
    <div className="App">
      <header className="App-header">
        <Sidebar post={post} />
        <Post post={post} totalComments={12}/>
      </header>
    </div>
  );
}

export default App;
