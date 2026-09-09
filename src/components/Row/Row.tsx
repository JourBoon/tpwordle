import { Letter } from '../Letter/Letter';
import type { LetterStatus } from '../../types/game';

type RowProps = {
    word: string;
    statuses: LetterStatus[];
};

export function Row({ word, statuses }: RowProps) {
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
