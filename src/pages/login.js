import styles from '../styles/login.module.css'
import localFont from 'next/font/local'
import Head from 'next/head';
import Image from 'next/image';
import HeaderBar from '@/components/HeaderBar/HeaderBar';
import { useState, useRef } from 'react';

const zenTokyo = localFont({
  src: '/fonts/ZenTokyoZoo-Regular.ttf'
})

export default function Login() {
  const [sessionId, setSessionId] = useState('')
  const [loading, setLoading] = useState(false)
  const videoRef = useRef(null)

  const handleLogin = async () => {
    videoRef.current.play()
    setLoading(true)

    setLoading(false)
    videoRef.current.pause()
    videoRef.current.currentTime = 0
  }

  return (
    <>
      <Head>
        <title>Bienvenid@</title>
      </Head>
      
      <main>
        <div className={styles.wrapper}>
          <HeaderBar />
          <div className={styles.loginWrapper}>
            <video ref={videoRef} src='/media/KofyLogoAnim.mp4' className={styles.video} muted loop />
            <h1 className={`${styles.title} ${zenTokyo.className}`}>KOFY</h1>
            {/* Acerca de nosotros */}
            
            <div className={styles.inputWrapper}>
              <input
                className={styles.loginInput}
                type='text'
                placeholder='Id de sesión'
                value={sessionId}
                onChange={(e) => setSessionId(e.target.value)}
                disabled={loading}
              />
            </div>

            <button className={styles.loginBtn} onClick={handleLogin} disabled={loading}>
              <Image src='/icons/rightArrow.svg' width={20} height={20} />
            </button>
          </div>
        </div>
      </main>
    </>
  )
}