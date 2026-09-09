import { useState } from "react";

function Rules() {
    const [showRules, setShowRules] = useState(false);

    return (
        <>
            <button
                className="rules-button"
                onClick={() => setShowRules(true)}
            >
                Règles
            </button>

            {showRules && (
                <div className="rules-overlay">
                    <div className="rules-window">

                        <button
                            className="close-button"
                            onClick={() => setShowRules(false)}
                        >
                            ×
                        </button>

                        <h2>Règles du Wordle</h2>

                        <p>🎯 Trouve le mot caché en maximum 6 essais.</p>

                        <p>
                            🟩 <strong>Vert :</strong> bonne lettre,
                            bonne position.
                        </p>

                        <p>
                            🟨 <strong>Jaune :</strong> bonne lettre,
                            mauvaise position.
                        </p>

                        <p>
                            ⬜ <strong>Gris :</strong> la lettre n'est
                            pas dans le mot.
                        </p>

                    </div>
                </div>
            )}
        </>
    );
}

export default Rules;