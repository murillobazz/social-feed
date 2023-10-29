import { Rocket, Trash } from 'phosphor-react';
import styles from './Comment.module.css';
import { Avatar } from './Avatar';

export function Comment() {
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

            <button title="Delete comment">
              <Trash size={24} />
            </button>
          </header>
          <p>Muito bom, parabéns! 👏</p>
        </div>
        <footer>
          <button>
            <Rocket />
            U rock it!
            <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  )
}