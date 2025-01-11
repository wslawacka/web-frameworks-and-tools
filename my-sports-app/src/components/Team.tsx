import { TeamType, PlayerType } from "../types";

import { Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";

import AddPlayerForm from "./forms/AddPlayerForm";
import Players from "./Players";

import "../styles/team.css";

interface TeamProps {
  team: TeamType;
  players: PlayerType[];
  setPlayers: React.Dispatch<React.SetStateAction<PlayerType[]>>;
}

function Team(props: TeamProps) {
  // state to show the add player form
  const [showForm, setShowForm] = useState(false);

  // ref to track the bottom of the page
  const bottomRef = useRef<HTMLDivElement>(null);

  // scroll to the bottom when showForm is true
  useEffect(() => {
    if (showForm) {
      bottomRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [showForm]);

  return (
    <>
      <div className="team-container">
        {/* link to go back to all teams */}
        <Link className="back-to-all-teams" to={`/`}>
          Go back to all teams
        </Link>
        {/* team logo */}
        <img src={props.team.logo} alt={props.team.teamName + " logo"} />
        {/* team info */}
        <div className="team-info">
          <p>
            <span>Founded:</span> {props.team.founded}
          </p>
          <p>
            <span>Stadium:</span> {props.team.stadium}
          </p>
          <p>
            <span>Coach:</span> {props.team.coach}
          </p>
          <p>
            <span>President:</span> {props.team.president}
          </p>
          <p>
            <span>Website:</span> {props.team.website}
          </p>
          <p>
            <span>League:</span> {props.team.league}
          </p>
          <p>
            <span>Country:</span> {props.team.country}
          </p>
          <p>
            <span>City:</span> {props.team.city}
          </p>
          <p>
            <span>Statistics:</span> wins: {props.team.statistics.wins} -
            losses: {props.team.statistics.losses} - draws:{" "}
            {props.team.statistics.draws}
          </p>
        </div>
      </div>
      {/* button to show the add player form */}
      <button
        className="add-player-button"
        onClick={() => setShowForm((prev) => !prev)}
      >
        Add Player
      </button>
      {/* if the showForm state is true, show the add player form */}
      {showForm && (
        <AddPlayerForm
          players={props.players}
          setPlayers={props.setPlayers}
          setShowForm={setShowForm}
          id={props.team.id}
        />
      )}
      {/* if the showForm state is false, show the players */}
      {!showForm && (
        <Players
          players={props.players}
          setPlayers={props.setPlayers}
          id={props.team.id}
        />
      )}
      <div ref={bottomRef} />
    </>
  );
}

export default Team;
