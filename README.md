## Time Guess Game

An interactive React time-guessing game where players:

- Set their **name** and **starting difficulty** on a neon, sci‑fi styled welcome screen.
- Adjust the **timer length** and see the difficulty auto‑update.
- Try to **stop the timer as close as possible to zero** to get the highest score.

Built with **React** and **Vite**.

---

## Features

- **Player setup screen**
  - Enter player name (with validation).
  - Choose a starting difficulty (Easy → Impossible).
  - Mobile‑friendly, responsive layout.

- **Dynamic difficulty**
  - Difficulty is derived from the selected time.
  - Difficulty and seconds can be adjusted before each challenge.

- **Timer challenge**
  - High‑precision countdown using `setInterval`.
  - Result modal showing:
    - Win / lose.
    - Time remaining.
    - Calculated score based on timing accuracy.

- **Modern UI**
  - Neon, glassmorphism theme.
  - Thin, consistent borders (your design preference).
  - Smooth hover and focus states for buttons and inputs.

---

## Tech Stack

- **React** (with hooks)
- **Vite** (development/bundling)
- **CSS** (custom theme, no UI library)

---

## Getting Started

### Prerequisites

- **Node.js** (LTS recommended)
- **npm** (comes with Node)

### Install dependencies

```bash
npm install
```

### Run the development server

```bash
npm run dev
```

Then open the URL printed in your terminal (usually `http://localhost:5173/`).

---

## Project Structure

```text
.
├─ index.html             # App shell with header & mounting points
├─ src
│  ├─ main.jsx            # React entry
│  ├─ App.jsx             # Main app flow & game state
│  ├─ index.css           # Global styles & layout
│  └─ components
│     ├─ Player.jsx       # Welcome / player setup screen
│     ├─ TimerChallenge.jsx  # Core timer challenge logic & UI
│     └─ ResultModal.jsx  # Result modal via React portal
└─ package.json
```

---

## How the Game Works

1. **Welcome screen**
   - Enter your name and pick a difficulty.
   - Difficulty determines an initial target time.

2. **Game screen**
   - See your name, difficulty, and seconds summary above the challenge.
   - Adjust seconds if you want; difficulty label updates automatically.

3. **Challenge**
   - Start the timer and try to stop it as close to zero as possible.
   - A modal shows whether you won or lost and what your score is.

---

## Deployment

For a simple static deployment (e.g., GitHub Pages, Netlify, Vercel):

```bash
npm run build
```

This outputs a production build in the `dist/` folder that you can serve with any static host.

---

## License

This project is intended as a learning / portfolio project. You can reuse and modify the code freely, but please provide attribution if you publish a derivative version. 


