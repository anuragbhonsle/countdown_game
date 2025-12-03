import { useState } from "react";

export default function Player({ onStartGame }) {
  const [enteredPlayerName, setEnteredPlayerName] = useState("");
  const [selectedDifficulty, setSelectedDifficulty] = useState("Medium");

  function handleNameChange(event) {
    setEnteredPlayerName(event.target.value);
  }

  function handleDifficultyChange(event) {
    setSelectedDifficulty(event.target.value);
  }

  function handlePlayClick() {
    const trimmedName = enteredPlayerName.trim();
    if (!trimmedName) {
      return;
    }
    if (onStartGame) {
      onStartGame(trimmedName, selectedDifficulty);
    }
  }

  return (
    <section id="player" aria-label="Player setup">
      <h2>Welcome {enteredPlayerName || "Player"}</h2>
      <p className="player-subtitle">
        Set your name and hit play to start the challenge.
      </p>
      <div className="player-controls">
        <div className="player-controls-row">
          <label className="visually-hidden" htmlFor="player-name">
            Player name
          </label>
          <input
            id="player-name"
            type="text"
            value={enteredPlayerName}
            onChange={handleNameChange}
            placeholder="Enter your name"
          />
          <button
            type="button"
            onClick={handlePlayClick}
            disabled={!enteredPlayerName.trim()}
          >
            Play
          </button>
        </div>
        <div className="player-difficulty">
          <label htmlFor="difficulty">Difficulty</label>
          <select
            id="difficulty"
            value={selectedDifficulty}
            onChange={handleDifficultyChange}
          >
            <option value="Easy">Easy</option>
            <option value="Medium">Medium</option>
            <option value="Hard">Hard</option>
            <option value="Pro">Pro</option>
            <option value="Hacker">Hacker</option>
            <option value="Impossible">Impossible</option>
          </select>
        </div>
      </div>
    </section>
  );
}
