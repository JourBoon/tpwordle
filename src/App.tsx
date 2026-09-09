import { useState, useEffect } from "react";
import { SECRET_WORD } from "./data/words";
import { GameBoard } from "./components/GameBoard/GameBoard";
import { EndGameModal } from "./components/EndGameModal/EndGameModal";
import Rules from "./components/Rules/Rules";

type GameStatus = "playing" | "win" | "lose";

function App() {
  const [guesses, setGuesses] = useState<string[]>([]);
  const [currentGuess, setCurrentGuess] = useState("");
  const [gameStatus, setGameStatus] = useState<GameStatus>("playing");

  const restartGame = () => {
    setGuesses([]);
    setCurrentGuess("");
    setGameStatus("playing");
  };

  useEffect(() => {
    function pressKey(event: KeyboardEvent) {
      if(gameStatus !== "playing") {
        return;
      }

      const key = event.key.toUpperCase();

      // Ajouter une lettre
      if (/^[A-Z]$/.test(key) && currentGuess.length < 5) {
        setCurrentGuess(currentGuess + key);
      }

      // Supprimer une lettre
      if (key === "BACKSPACE") {
        setCurrentGuess(currentGuess.slice(0, -1));
      }

      // Valider le mot
      if (
        key === "ENTER" && 
        currentGuess.length === 5 &&
        guesses.length < 6
      ) {
        const newGuesses = [...guesses, currentGuess];

        setGuesses(newGuesses);
        setCurrentGuess("");

        if (currentGuess === SECRET_WORD) {
          setGameStatus("win");
        } else if (newGuesses.length === 6) {
          setGameStatus("lose");
        }
      }
    }

    window.addEventListener("keydown", pressKey);

    return () => {
      window.removeEventListener("keydown", pressKey);
    };
  }, [currentGuess, guesses]);

  return (
    <>
      <Rules />
      <header>
        <h1>TP WORDLE</h1>
      </header>
      <p>Mot actuel : {currentGuess}</p>

      <GameBoard 
        guesses={guesses} 
        currentGuess={currentGuess}
        secretWord={SECRET_WORD}
      />

      {gameStatus !== "playing" && (
      <EndGameModal
        status={gameStatus}
        secretWord={SECRET_WORD}
        attempts={guesses.length}
        onRestart={restartGame}
      />
    )}
    </>
  );
}

export default App;