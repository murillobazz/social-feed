import styles from './Header.module.css';
// Para utilização de css modules para estilização, devemos importar nominalmente os styles, e utilizar cada
// classe como um valor do objeto styles importado, como no caso abaixo, do header.

import socialLogo from '../assets/social-logo.svg';

export function Header() {
  return (
    <header className={styles.header}>
      <img src={socialLogo} alt="Logo do Social Feed" />
      <strong>Social Feed</strong>
    </header>
  );
}