import { Letter } from '../Letter/Letter';
import type { LetterStatus } from '../../types/game';
import styles from './Row.module.css';

type RowProps = {
    word: string;
    statuses: LetterStatus[];
};

export function Row({ word, statuses }: RowProps) {
<<<<<<< HEAD
  const letters = word.padEnd(5, " ").split("");

  return (
    <div className={styles.row}>
      {letters.map((letter, index) => (
        <Letter
          key={index}
          letter={letter === " " ? "" : letter}
          status={statuses[index]}
        />
      ))}
    </div>
  );
}
=======
    return (
        <div>
            {word.split("").map((letter, index) => (
                <Letter 
                key={index} 
                letter={letter} 
                status={statuses[index]} 
                />    
            ))}
        </div>
    );
}
>>>>>>> 309d9cf (regle)
