import styles from './Avatar.module.css';
// Desestruturamos as props aqui, para poder aplicar um valor padrão em hasBorder
export function Avatar({ hasBorder = true, src}) {
  return (
    <img
      className={hasBorder ? styles.avatarWithBorder : styles.avatar}
      src={src}
    />
  )
}