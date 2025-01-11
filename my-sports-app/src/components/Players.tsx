import axios from "axios";

import { PlayerType } from "../types";

import { useEffect } from "react";

import Player from "./Player";

import "../styles/players.css";

interface PlayersProps {
  players: PlayerType[];
  setPlayers: React.Dispatch<React.SetStateAction<PlayerType[]>>;
  id: string;
}

function Players(props: PlayersProps) {
  // function to fetch players from the mock database
  const fetchPlayers = async () => {
    try {
      const response = await axios.get(
        `http://localhost:3001/players?teamId=${props.id}`
      );
      props.setPlayers(response.data);
    } catch (error) {
      alert("Error fetching players");
    }
  };

  // fetch players from the mock database when the component is mounted
  useEffect(() => {
    fetchPlayers();
  }, [props.id]);

  // function to delete a player from the mock database
  const deletePlayer = async (id: string) => {
    try {
      await axios.delete(`http://localhost:3001/players/${id}`);
      fetchPlayers();
    } catch (error) {
      alert("Error deleting player");
    }
  };

  return (
    <div className="player-list-container">
      <h2>Players:</h2>
      {/* list of players with their information */}
      <ul>
        {props.players.map((player) => (
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

export default Players;
