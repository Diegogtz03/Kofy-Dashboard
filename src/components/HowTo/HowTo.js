import styles from "./HowTo.module.css";
import Image from "next/image";
import localFont from "next/font/local";
const zenTokyo = localFont({
  src: "../../pages/fonts/ZenTokyoZoo-Regular.ttf",
});

function HowTo({ setIsOpen }) {
  return (
    <>
      <div className={styles.background} onClick={() => setIsOpen(false)} />
      <div className={styles.centered}>
        <div className={styles.modal}>
          <div className={styles.modalHeader}>
            <h5 className={`${styles.heading} ${zenTokyo.className}`}>
              CÓMO FUNCIONA KOFY
            </h5>
          </div>
          <div className={styles.modalContent}>
            <ol>
              <li>
                <p>Ingresa el ID de sesión que le proporcionó el paciente.</p>
              </li>
              <li>
                Una vez dentro de la sesión, verá el resumen de la sesión y
                podrá realizar las siguientes tres operaciones:
                <ul>
                  <li>Agregar información al resumen</li>
                  <li>Eliminar información del resumen</li>
                  <li>Modificar información del resumen</li>
                </ul>
              </li>
              <li>
                Al terminar la revisión del contenido, podrá validar la sesión y
                enviar el resumen al paciente.
                <br />
              </li>
            </ol>
          </div>
        </div>
        <div className={styles.modalActions}>
          <div className={styles.actionsContainer}>
            <button
              className={styles.closeBtn}
              onClick={() => setIsOpen(false)}
            >
              Entendido
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default HowTo;
