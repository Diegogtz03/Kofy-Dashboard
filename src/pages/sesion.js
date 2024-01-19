import styles from '../styles/sesion.module.css'
import Toast from '@/components/Toast/Toast';
import Head from "next/head";
import toastStyles from '../components/Toast/Toast.module.css'
import SessionHeader from '@/components/SessionHeader/SessionHeader';
import SpeechSessionInput from '@/components/SpeechSessionInput/SpeechSessionInput';
import Image from 'next/image';
import { verifySpeechSession } from '@/api/speech-sessions';
import { useState, useEffect } from "react"
import { getSpeechSession } from "@/api/speech-sessions"
import { useRouter } from 'next/router';
import { useSearchParams } from 'next/navigation'

export default function Sesion() {
  const router = useRouter();
  const searchParams = useSearchParams()
  const [sessionId, setSessionId] = useState('')
  const [sessionData, setSessionData] = useState([])
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState("");
  const [toastStyle, setToastStyle] = useState(toastStyles.hidden);
  const [toastType, setToastType] = useState(0);

  const handleLogOut = () => {
    router.push('/');
  }

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

  useEffect(() => {
    const getSession = async () => {
      const sessionId = searchParams.get('id')

      if (!sessionId) router.push('/')

      setSessionId(sessionId)

      const session = await getSpeechSession(sessionId)

      if (session.success) {
        setSessionData(session.data)
      } else {
        showToast(session.message, 2)

        setTimeout(() => {
          router.push('/');
        }, 800);
      }
    }
    getSession()
  }, [])

  const handleChange = (e, index) => {
    const newData = [...sessionData]
    newData[index] = e.target.value
    setSessionData(newData)
  }

  const addNewData = () => {
    const newData = [...sessionData]
    newData.push('')
    setSessionData(newData)
  }

  const handleRemove = (index) => {
    const newData = [...sessionData]
    newData.splice(index, 1)
    setSessionData(newData)
  }

  const checkForm = () => {
    sessionData.forEach((data) => {
      if (data === '') {
        showToast('Campos vacíos', 3);
        return false;
      }
    });

    return true;
  }

  const handleSave = async () => {
    if (!checkForm()) return;

    try {
      setLoading(true)
      const data = await verifySpeechSession(sessionId, sessionData)

      if (data.success) {
        showToast(data.message, 1)
        setTimeout(() => {
          router.push('/');
        }, 800);
      } else {
        showToast(data.message, 2)
      }
    } catch (error) {
      showToast('Error, intente nuevamente', 2)
    }
  }

  return (
    <>
      <Head>
        <title>Sesión de escucha</title>
      </Head>

      <main>
        <div className={styles.wrapper}>
          <SessionHeader onclickhandler={handleLogOut} />
          <Toast message={message} type={toastType} secondaryClassName={toastStyle} />

          <div className={styles.sessionDataWrapper}>
            <div className={styles.sessionBullets}>
              { sessionData.length !== 0 &&
                sessionData.map((_, index) => (
                  <SpeechSessionInput key={index} index={index} value={sessionData[index]} handleChange={handleChange} handleRemove={handleRemove} />
                ))
              }
            </div>
            
            <button className={styles.addBtn} onClick={addNewData}>
              <Image src={'/icons/plus.svg'} width={30} height={30} alt='icono de agregar' />
            </button>

            <button className={styles.saveBtn} onClick={handleSave}>
              Guardar
            </button>
          </div>
        </div>
      </main>
    </>
  )
}