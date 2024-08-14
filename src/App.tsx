import { useState } from 'react';
import './App.css';
import Post, { PostObject } from './components/Post';
import Card from './components/Card';


// trabalhando com props
// enviando props com expressoes js
function App() {

  // criar um state post
  // toda vez que uma prop tem seu state alterado, o componente re-redenderiza
  // por isso que quando se usar o set parta alterar o state post,  que é uma prop de post
  // ele re-renderiza
  const [post, setPost] = useState<PostObject | undefined>({
    title: 'Título maneiro',
    content: 'Lorem Ipsum dolor sit amet'
  })

  return (
    <div className="App">
      <header className="App-header">     

        {
          !!post &&          
          <Card align="left" title={"Card"}>
            <Post post={post} totalComments={12} />
          </Card>
        }

        <button onClick={() => setPost(undefined)}>
          Remover post
        </button>
      </header>
    </div>
  );
}

export default App;