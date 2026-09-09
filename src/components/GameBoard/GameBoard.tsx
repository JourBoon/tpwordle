import { Row } from '../Row/Row';
import type { LetterStatus } from "../../types/game";
import { checkGuess } from '../../utils/checkGuess';

type GameBoardProps = {
    guesses: string[];
    currentGuess: string;
    secretWord: string;
};

export function GameBoard({ guesses, currentGuess, secretWord }: GameBoardProps) {
  const rows = Array(6).fill("");

  return (
    <div>
      {rows.map((_, index) => {
        let word = guesses[index] ?? "";
        let statuses: LetterStatus[] = [
          "empty",
          "empty",
          "empty",
          "empty",
          "empty",
        ];

        if (index === guesses.length) {
          word = currentGuess;
        }

        if (index < guesses.length) {
          statuses = checkGuess(word, secretWord);
        }

        return (
          <Row
            key={index}
            word={word}
            statuses={statuses}
          />
        );
      })}
    </div>
  );
}