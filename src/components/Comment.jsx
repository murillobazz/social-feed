import { Rocket, Trash } from 'phosphor-react';
import styles from './Comment.module.css';
import { Avatar } from './Avatar';
import { useState } from 'react';

export function Comment({ content, onDeleteComment }) {
  const [likeCount, setLikeCount] = useState(0);

  function handleLikeComment() {
    setLikeCount((state) => {
      return state + 1
    });
  }

  function handleDeleteComment() {
    onDeleteComment(content);
  }

  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src="https://github.com/murillobazz.png" />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Murillo Bazilio</strong>
              <time dateTime="2023-10-27 08:13:30" title="27 de Novembro às 08:13">Cerca de 1h atrás</time>
            </div>

            <button onClick={handleDeleteComment} title="Delete comment">
              <Trash size={24} />
            </button>
          </header>

          <p>{ content }</p>
        </div>
        <footer>
          <button onClick={handleLikeComment}>
            <Rocket />
            U rock it!
            <span>{likeCount}</span>
          </button>
        </footer>
      </div>
    </div>
  )
}