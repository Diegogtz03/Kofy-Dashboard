import styles from './SpeechSessionInput.module.css'
import Image from 'next/image'

export default function SpeechSessionInput({ index, value, handleChange, handleRemove }) {
  return (
    <div className={styles.wrapper}>
      <textarea
        className={styles.input}
        type="text"
        placeholder=""
        value={value}
        onChange={(e) => handleChange(e, index)}
      />
      <button className={styles.removeBtn} onClick={() => handleRemove(index)}>
        <Image src="/icons/trash.svg" width={58} height={30} alt="botón de eliminar" />
      </button>
    </div>
  )
}