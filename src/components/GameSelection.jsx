import lavaImg from "../assets/escapeTheLava.jpg";
import colorImg from "../assets/findTheColor.jpg";
import redLightImg from "../assets/redLightGreenLight.jpg";
import shooterImg from "../assets/sharpShooter.jpg";

import React from "react";
import "./GameSelection.css";

const games = [
  {
    name: "Escape The Lava",
    type: "Solo/Team",
    players: "1 to 6",
    image: lavaImg
  },
  {
    name: "Find The Color",
    type: "Competition",
    players: "1 to 6",
    image: colorImg
  },
  {
    name: "Red Light Green Light",
    type: "Competition",
    players: "1 to 4",
    image: redLightImg
  },
  {
    name: "Sharp Shooter",
    type: "Competition",
    players: "1 to 4",
    image: shooterImg
  },
];

const GameSelection = () => {
  return (
    <div className="game-selection-container">
      <h1 className="title">Select Your Game</h1>
      <div className="games-grid">
        {games.map((game, index) => (
          <div key={index} className="game-card">
            <img src={game.image} alt={game.name} className="game-image" />
            <div className="game-info">
              <h2>{game.name}</h2>
              <p>Type: {game.type}</p>
              <p>Players: {game.players}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GameSelection;
