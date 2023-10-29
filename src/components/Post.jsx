import { Avatar } from './Avatar';
import { Comment } from './Comment';
import styles from './Post.module.css';

export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src="https://github.com/murillobazz.png" alt="Foto do autor do post." />
          <div className={styles.authorInfo}>
            <strong>Murillo Bazilio</strong>
            <span>Web Developer</span>
          </div>
        </div>

        <time dateTime="2023-10-27 08:13:30" title="27 de Novembro às 08:13">Publicado há 1h</time>
      </header>

      <div className={styles.content}>
        <p>Fala galera! 👋🏼</p>
        <p>Se liga no Schopenhauer:</p>
        <p>
          A nossa felicidade depende mais do que temos nas nossas cabeças, do que nos nossos bolsos. O destino baralha as cartas, e nós jogamos.
        </p>
        <p>
          <a href="#">#schopenhauer</a>{' '}
          <a href="">#seilaporque</a>{' '}
          <a href="">#mastaai</a>
        </p>
      </div>

      <form className={styles.commentForm}>
        <strong>Deixe seu comentário!</strong>
        <textarea placeholder="Deixe um comentário"/>
        <footer>
          <button type="submit">Comentar</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        <Comment />
        <Comment />
        <Comment />
      </div>
    </article>
  )
}