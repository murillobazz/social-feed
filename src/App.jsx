import { Header } from "./components/Header";
import { Post } from "./components/Post";
import { Sidebar } from "./components/Sidebar";

// Nessa aplicação utilizaremos css modules para estilização. Comentário no componente header.
import './global.css';
import styles from './App.module.css';

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/murillobazz.png',
      name: 'Murillo Bazilio',
      role: 'Web Developer'
    },
    content: [
      { type: 'paragraph', content: "Fala galera! 👋🏼" },
      { type: 'paragraph', content: "Se liga no Schopenhauer:" },
      { type: 'paragraph', content: "A nossa felicidade depende mais do que temos nas nossas cabeças, do que nos nossos bolsos. O destino baralha as cartas, e nós jogamos." },
      { type: 'link', content: 'https://github.com/murillobazz' }
    ],
    publishedAt: new Date('2023-10-21 20:00:00')
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/benawad.png',
      name: 'Ben Awad',
      role: 'Software Consultant | YouTuber'
    },
    content: [
      { type: 'paragraph', content: "Hey Guys! 👋🏼" },
      { type: 'paragraph', content: "Check out my newest project:" },
      { type: 'link', content: 'https://voidpet.com/' }
    ],
    publishedAt: new Date('2023-08-31 20:00:00')
  },
]

function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          { posts.map(post => {
            return (
              <Post
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            )
          }) }
        </main>
      </div>
    </div>
  )
}


export default App;
