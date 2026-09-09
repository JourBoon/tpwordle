import type { LetterStatus } from "../types/game";

export function checkGuess(
  guess: string,
  secret: string
): LetterStatus[] {
  const statuses: LetterStatus[] = Array(5).fill("absent");
  const remainingLetters = secret.split("");

  // Étape 1 : lettres bien placée
  for (let i = 0; i < 5; i++) {
    if (guess[i] === secret[i]) {
      statuses[i] = "correct";
      remainingLetters[i] = "";
    }
  }

  // Étape 2 : si les lettres présentes mais mal placée
  for (let i = 0; i < 5; i++) {
    if (statuses[i] === "correct") {
      continue;
    }

    const index = remainingLetters.indexOf(guess[i]);

    if (index !== -1) {
      statuses[i] = "present";
      remainingLetters[index] = "";
    }
  }

  return statuses;
}