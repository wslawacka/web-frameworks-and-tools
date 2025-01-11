import { PlayerType } from "../types";

import "../styles/player.css";

interface PlayerProps {
  id: string;
  teamId: string;
  name: string;
  position: string;
  number: number;
  country: string;
  age: number;
  height: number;
  weight: number;
  games: number;
  goals: number;
  deletePlayer: Function;
}

function Player(props: PlayerProps) {
  // create a player object from props
  const player: PlayerType = {
    id: props.id,
    teamId: props.teamId,
    name: props.name,
    position: props.position,
    number: props.number,
    country: props.country,
    age: props.age,
    height: props.height,
    weight: props.weight,
    games: props.games,
    goals: props.goals,
  };

  return (
    <div className="player">
      <h2>{player.name}</h2>
      <div className="player-info">
        <p className="player-info-name">
          Position: <span>{player.position}</span>
        </p>
        <p className="player-info-name">
          Number: <span>{player.number}</span>
        </p>
        <p className="player-info-name">
          Country: <span>{player.country}</span>
        </p>
        <p className="player-info-name">
          Age: <span>{player.age}</span>
        </p>
        <p className="player-info-name">
          Height: <span>{player.height}</span>
        </p>
        <p className="player-info-name">
          Weight: <span>{player.weight}</span>
        </p>
        <p className="player-info-name">
          Games: <span>{player.games}</span>
        </p>
        <p className="player-info-name">
          Goals: <span>{player.goals}</span>
        </p>
      </div>
      <button
        className="delete-player-button"
        onClick={() => props.deletePlayer(player.id)}
      >
        Delete
      </button>
    </div>
  );
}

export default Player;
