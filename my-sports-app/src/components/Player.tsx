import { PlayerType } from "../types";
import "../styles/player.css";
function Player({
  id,
  teamId,
  name,
  position,
  number,
  country,
  age,
  height,
  weight,
  games,
  goals,
  deletePlayer,
}: {
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
}) {
  // create a player object from props
  const player: PlayerType = {
    id,
    teamId,
    name,
    position,
    number,
    country,
    age,
    height,
    weight,
    games,
    goals,
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
        onClick={() => deletePlayer(player.id)}
      >
        Delete
      </button>
    </div>
  );
}

export default Player;
