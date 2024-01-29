import styles from "./HowTo.module.css";

function HowTo({ setIsOpen }) {
  return (
    <>
      <div className={styles.background} onClick={() => setIsOpen(false)} />
      <div className={styles.centered}>
        <div className={styles.modal}>
          <div className={styles.modalHeader}>
            <h5 className={styles.heading}>¿Cómo funciona KOFY?</h5>
          </div>
        </div>
        <div className={styles.modalActions}>
          <div className={styles.actionsContainer}>
            <button
              className={styles.cancelBtn}
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
