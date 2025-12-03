import { useState } from "react";
import Player from "./components/Player.jsx";
import TimeChallenge from "./components/TimerChallenge.jsx";

function getDifficultyLabel(seconds) {
  if (seconds <= 3) return "Easy";
  if (seconds <= 7) return "Medium";
  if (seconds <= 15) return "Hard";
  if (seconds <= 30) return "Pro";
  if (seconds <= 60) return "Hacker";
  return "Impossible";
}

function getSecondsForDifficulty(label) {
  switch (label) {
    case "Easy":
      return 3;
    case "Medium":
      return 7;
    case "Hard":
      return 15;
    case "Pro":
      return 30;
    case "Hacker":
      return 60;
    case "Impossible":
      return 999;
    default:
      return 7;
  }
}

function App() {
  const [playerName, setPlayerName] = useState("");
  const [gameStarted, setGameStarted] = useState(false);
  const [selectedSeconds, setSelectedSeconds] = useState(5);

  const difficultyLabel = getDifficultyLabel(selectedSeconds);

  function handleStartGame(name, difficulty) {
    setPlayerName(name);
    const seconds = getSecondsForDifficulty(difficulty);
    setSelectedSeconds(seconds);
    setGameStarted(true);
  }

  function handleSecondsChange(event) {
    setSelectedSeconds(Number(event.target.value));
  }

  return (
    <main className="layout">
      {!gameStarted && (
        <section className="layout-column">
          <Player onStartGame={handleStartGame} />
        </section>
      )}

      {gameStarted && (
        <section className="layout-column">
          <div className="player-summary">
            <p>
              <span className="player-summary-name">Hello, {playerName}</span>
              <span className="player-summary-diff">
                Difficulty: <strong>{difficultyLabel}</strong>
              </span>
            </p>
            <label className="player-summary-time">
              Seconds
              <input
                type="number"
                min="1"
                max="999"
                value={selectedSeconds}
                onChange={handleSecondsChange}
              />
            </label>
          </div>

          <div id="challenges">
            <TimeChallenge
              title={difficultyLabel}
              targetTime={selectedSeconds}
            />
          </div>
        </section>
      )}
    </main>
  );
}

export default App;
