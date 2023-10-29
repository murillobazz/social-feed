import { PencilLine } from 'phosphor-react';

import styles from './Sidebar.module.css';
import { Avatar } from './Avatar';

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img className={styles.cover} src="https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?auto=format&fit=crop&q=30&w=600" />
      <div className={styles.profile}>
        <Avatar src="https://github.com/murillobazz.png" />
        <strong>Murillo Bazilio</strong>
        <span>Web Developer</span>
      </div>

      <footer>
        <a href="#">
          <PencilLine size={20} />
          Editar seu perfil
        </a>
      </footer>
    </aside>
  )
}