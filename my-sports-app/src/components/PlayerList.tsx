import { useEffect } from "react";
import { PlayerType } from "../types";
import Player from "./Player";
import axios from "axios";
import "../styles/playerList.css";

function PlayerList({
  players,
  setPlayers,
  id,
}: {
  players: PlayerType[];
  setPlayers: Function;
  id: string;
}) {
  const fetchPlayers = async () => {
    try {
      const response = await axios.get(
        `http://localhost:3001/players?teamId=${id}`
      );
      setPlayers(response.data);
    } catch (error) {
      console.error("Error fetching players:", error);
    }
  };

  useEffect(() => {
    fetchPlayers();
  }, [id]);

  const deletePlayer = async (id: string) => {
    await axios.delete(`http://localhost:3001/players/${id}`);
    fetchPlayers();
  };

  return (
    <div className="player-list-container">
      <h2>Players</h2>
      <ul>
        {players.map((player) => (
          <li key={player.id}>
            <Player
              id={player.id}
              teamId={player.teamId}
              name={player.name}
              position={player.position}
              number={player.number}
              country={player.country}
              age={player.age}
              height={player.height}
              weight={player.weight}
              games={player.games}
              goals={player.goals}
              deletePlayer={deletePlayer}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PlayerList;
