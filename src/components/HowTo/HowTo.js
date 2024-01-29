import styles from "./HowTo.module.css";
import Image from "next/image";

function HowTo({ setIsOpen }) {
  return (
    <>
      <div className={styles.background} onClick={() => setIsOpen(false)} />
      <div className={styles.centered}>
        <div className={styles.modal}>
          <div className={styles.modalHeader}>
            <h5 className={styles.heading}>¿Cómo funciona KOFY?</h5>
          </div>
          <div className={styles.modalContent}>
            <ol>
              <li>
                <p>Ingresa el ID de sesión que le proporcionó el paciente.</p>
                <Image
                  src="/media/gif1.gif"
                  className={styles.gif}
                  width={300}
                  height={100}
                  alt="icono de flecha"
                />
              </li>
              <li>
                Una vez dentro de la sesión, verá el resumen de la sesión y
                podrá realizar las siguientes tres operaciones:
                <ul>
                  <li>
                    Agregar información al resumen
                    <Image
                      src="/media/gif1.gif"
                      className={styles.gif}
                      width={300}
                      height={100}
                      alt="icono de flecha"
                    />
                  </li>
                  <li>
                    Eliminar información del resumen
                    <Image
                      src="/media/gif1.gif"
                      className={styles.gif}
                      width={300}
                      height={100}
                      alt="icono de flecha"
                    />
                  </li>
                  <li>
                    Modificar información del resumen
                    <Image
                      src="/media/gif1.gif"
                      className={styles.gif}
                      width={300}
                      height={100}
                      alt="icono de flecha"
                    />
                  </li>
                </ul>
              </li>
              <li>
                Al terminar la revisión del contenido, podrá validar la sesión y
                enviar el resumen al paciente.
                <Image
                  src="/media/gif1.gif"
                  className={styles.gif}
                  width={300}
                  height={100}
                  alt="icono de flecha"
                />
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
