import styles from './HeaderBar.module.css'
import Image from 'next/image';

export default function HeaderBar() {
  return (
    <div className={styles.wrapper}>
      <button className={styles.button}>
        <Image src='/icons/info.svg' width={20} height={20} alt='icono de información' />
        Nosotros
      </button>
    </div>
  )
}