import styles from './SessionHeader.module.css'
import Image from 'next/image'
import localFont from 'next/font/local'

const zenTokyo = localFont({
  src: '../../pages/fonts/ZenTokyoZoo-Regular.ttf'
})

export default function SessionHeader({ onclickhandler }) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.logoContainer}>
        <Image src="/media/KofyLogo.png" width={100} height={100} alt='logo de Kofy' />
      </div>

      <h1 className={`${styles.headerTitle} ${zenTokyo.className}`}>SESIÓN DE ESCUCHA</h1>

      <button className={styles.logoutBtn}>
        <Image src="/icons/home.svg" width={35} height={35} alt='botón de salir' onClick={onclickhandler} />
      </button>
    </div>
  )
}