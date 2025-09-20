import React from "react";
import "./GameSelection.css";

const games = [
  {
    name: "Escape The Lava",
    type: "Solo/Team",
    players: "1 to 6",
    image: "https://cdn.escaperoom.com/uploads/styles/directoryCards/The-Floor-Is-Lava-escape-room-Lost-Games-QW2pZgcQn-sm.jpg",
  },
  {
    name: "Find The Color",
    type: "Competition",
    players: "1 to 6",
    image: "https://img.poki-cdn.com/cdn-cgi/image/q=78,scq=50,width=204,height=204,fit=cover,f=auto/e27d06d55fdadccb39baa400802a7695/color.png",
  },
  {
    name: "Red Light Green Light",
    type: "Competition",
    players: "1 to 4",
    image: "https://media.istockphoto.com/id/183255824/photo/red-yellow-and-green-light-traffic-stoplight-at-night.jpg?s=612x612&w=0&k=20&c=P3x9rojWBFeXK8FS7Nlk1e0KuGRSsQbVsxzyrDTmg3U=",
  },
  {
    name: "Sharp Shooter",
    type: "Competition",
    players: "1 to 4",
    image: "https://media.gettyimages.com/id/1083472970/vector/man-in-crosshairs.jpg?s=612x612&w=0&k=20&c=OEpVP1tLdZ6Y8wwEj4mqwYtppHNQz3peNAyvxIf50sU=",
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
