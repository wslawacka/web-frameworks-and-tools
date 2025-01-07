import { TeamType, PlayerType } from "../types";
import "../styles/team.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import AddPlayerForm from "./forms/AddPlayerForm";
import PlayerList from "./PlayerList";

function Team({
  team,
  players,
  setPlayers,
}: {
  team: TeamType;
  players: PlayerType[];
  setPlayers: Function;
}) {
  const [showForm, setShowForm] = useState(false);
  return (
    <>
      <div className="team-container">
        <h2>{team.teamName}</h2>
        <Link className="back-to-all-teams" to={`/`}>
          Go back to all teams
        </Link>
        <img src={team.logo} alt={team.teamName + " logo"} />
        <div className="team-info">
          <p>
            <span>Founded:</span> {team.founded}
          </p>
          <p>
            <span>Stadium:</span> {team.stadium}
          </p>
          <p>
            <span>Coach:</span> {team.coach}
          </p>
          <p>
            <span>President:</span> {team.president}
          </p>
          <p>
            <span>Website:</span> {team.website}
          </p>
          <p>
            <span>League:</span> {team.league}
          </p>
          <p>
            <span>Country:</span> {team.country}
          </p>
          <p>
            <span>City:</span> {team.city}
          </p>
          <p>
            <span>Statistics:</span> wins: {team.statistics.wins} - losses:{" "}
            {team.statistics.losses} - draws: {team.statistics.draws}
          </p>
        </div>
      </div>
      <button
        className="add-player-button"
        onClick={() => setShowForm(!showForm)}
      >
        Add Player
      </button>
      {showForm && (
        <AddPlayerForm
          players={players}
          setPlayers={setPlayers}
          setShowForm={setShowForm}
          id={team.id}
        />
      )}
      <PlayerList players={players} setPlayers={setPlayers} id={team.id} />
    </>
  );
}

export default Team;
