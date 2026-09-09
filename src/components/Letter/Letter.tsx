import styles from './Letter.module.css';
import type { LetterStatus } from '../../types/game';

type LetterProps = {
    letter: string;
    status: LetterStatus;
};

export function Letter({ letter, status }: LetterProps) {
    return (
        <div className={styles[status]}>
            {letter}
        </div>
    );
}