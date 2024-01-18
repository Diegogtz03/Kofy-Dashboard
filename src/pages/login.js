import styles from '../styles/login.module.css'
import localFont from 'next/font/local'
import Head from 'next/head';
import { useState } from 'react';

const zenTokyo = localFont({
  src: '/fonts/ZenTokyoZoo-Regular.ttf'
})

export default function Login() {
  const [sessionId, setSessionId] = useState('')
  const [loading, setLoading] = useState(false)

  return (
    <>
      <Head>
        <title>Bienvenid@</title>
      </Head>
      
      <main>
        <div className={styles.wrapper}>
          <div className={styles.loginWrapper}>
            <h1 className={`${styles.title} ${zenTokyo.className}`}>KOFY</h1>
          </div>
        </div>
      </main>
    </>
  )
}