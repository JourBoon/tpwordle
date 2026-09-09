import styles from "./EndGameModal.module.css";

type EndGameModalProps = {
  status: "win" | "lose";
  secretWord: string;
  attempts: number;
  onRestart: () => void;
};

//Copilot a aidé à générer les paramètres de la fonction.
export function EndGameModal({status, secretWord, attempts, onRestart,}: EndGameModalProps) {
  const win = status === "win";

  return (
    <div className={styles.overlay}>
    <div className={styles.modal}>
      <h2>{win ? "Bravo !" : "Perdu !"}</h2>

      <p>
        {win
          ? `Tu as trouvé le mot en ${attempts} essai(s).`
          : `Le mot était : ${secretWord}`}
      </p>

      <button className={styles.restartButton}
            onClick={onRestart}>
        Rejouer
      </button>

    </div>
  </div>
  );
}