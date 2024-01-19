import styles from '../styles/login.module.css'
import localFont from 'next/font/local'
import Head from 'next/head';
import Image from 'next/image';
import HeaderBar from '@/components/HeaderBar/HeaderBar';
import toastStyles from '@/components/Toast/Toast.module.css';
import Toast from '@/components/Toast/Toast';
import { useRouter } from 'next/router';
import { useState, useRef } from 'react';
import { getSpeechSession } from '@/api/speech-sessions';

const zenTokyo = localFont({
  src: '/fonts/ZenTokyoZoo-Regular.ttf'
})

export default function Login() {
  const router = useRouter();
  const [sessionId, setSessionId] = useState('')
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState("");
  const [toastStyle, setToastStyle] = useState(toastStyles.hidden);
  const [toastType, setToastType] = useState(0);

  const videoRef = useRef(null)

  const showToast = (message, type) => {
    if (toastStyle != null) {
      setToastStyle(toastStyles.toast);
      setMessage(message);
      setToastStyle(null);
      setToastType(type);
      setTimeout(() => {
        setToastStyle(toastStyles.hidden);
      }, 3000);
    } else {
      setToastStyle(toastStyles.hidden);
      setMessage(message);
      setToastType(type);

      setTimeout(() => {
        setToastStyle(null);
      }, 300);

      setTimeout(() => {
        setToastStyle(toastStyles.hidden);
      }, 3000);
    }
  };

  const checkForm = () => {
    if (sessionId === '') {
      showToast('Ingrese un id de sesión', 2)
      return false
    } else if (sessionId.length < 5) {
      showToast('ID inválido', 2)
      return false
    }

    return true
  }

  const handleLogin = async () => {
    if (!checkForm()) return

    videoRef.current.play()
    setLoading(true)

    let data = await getSpeechSession(sessionId);

    if (data.success) {
      showToast(data.message, 1)
      setTimeout(() => {
        router.push({
          pathname: '/sesion',
          query: { id: sessionId }
        });
      }, 800);
    } else {
      showToast(data.message, 2)
    }

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
          <Toast message={message} type={toastType} secondaryClassName={toastStyle} />

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
              <Image src='/icons/rightArrow.svg' width={30} height={30} alt='icono de flecha' />
            </button>
          </div>
        </div>
      </main>
    </>
  )
}