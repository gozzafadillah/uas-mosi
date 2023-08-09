import React, { useState } from "react";
import { Link } from "react-router-dom";

const DiceGame = () => {
  const [totalThrows, setTotalThrows] = useState("10");
  const [diceCount, setDiceCount] = useState("1");
  const [m, setM] = useState("13");
  const [a, setA] = useState("5");
  const [xo, setXo] = useState("7");
  const [dice1Occurrences, setDice1Occurrences] = useState(0);
  const [dice2Occurrences, setDice2Occurrences] = useState(0);

  const handleRollDice = () => {
    let x = parseInt(xo);
    const throws = parseInt(totalThrows);
    let countDice1 = 0;
    let countDice2 = 0;

    for (let i = 0; i < throws; i++) {
      x = (parseInt(a) * x) % parseInt(m);
      const diceValue = (x % parseInt(diceCount)) + 1;
      if (diceValue === 1) {
        countDice1++;
      } else if (diceValue === 2) {
        countDice2++;
      }
    }

    setDice1Occurrences(countDice1);
    setDice2Occurrences(countDice2);
  };

  return (
    <div className="container">
      <Link to="/">Home</Link>
      <h1>Dice Rolling Game</h1>
      <div>
        <label>Total Throws: </label>
        <input
          type="number"
          value={totalThrows}
          onChange={(e) => setTotalThrows(e.target.value)}
        />
      </div>
      <div>
        <label>Dice Count: </label>
        <select
          value={diceCount}
          onChange={(e) => setDiceCount(e.target.value)}
        >
          <option value="1">1</option>
          <option value="2">2</option>
        </select>
      </div>
      <div>
        <label>m: </label>
        <input type="number" value={m} onChange={(e) => setM(e.target.value)} />
      </div>
      <div>
        <label>a: </label>
        <input type="number" value={a} onChange={(e) => setA(e.target.value)} />
      </div>
      <div>
        <label>Xo: </label>
        <input
          type="number"
          value={xo}
          onChange={(e) => setXo(e.target.value)}
        />
      </div>
      <button onClick={handleRollDice}>Roll Dice</button>
      <div className="result">Occurrences of Dice 1: {dice1Occurrences}</div>
      <div className="result">Occurrences of Dice 2: {dice2Occurrences}</div>
    </div>
  );
};

export default DiceGame;
