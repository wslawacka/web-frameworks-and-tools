import axios from "axios";

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

  // state to track the editing field
  const [editingField, setEditingField] = useState<string | null>(null);
  // state to track the editing value
  const [editingValue, setEditingValue] = useState<string | number | null>(
    null
  );

  // scroll to the bottom when showForm is true
  useEffect(() => {
    if (showForm) {
      bottomRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [showForm]);

  // function to handle the edit field
  const handleEdit = (field: string, value: string | number) => {
    setEditingField(field);
    setEditingValue(value);
  };

  // function to handle the save field
  const handleSave = async () => {
    if (!editingField) return;

    try {
      const updateData = editingField.startsWith("statistics.")
        ? {
            statistics: {
              ...props.team.statistics,
              [editingField.split(".")[1]]: editingValue,
            },
          }
        : { [editingField]: editingValue };

      await axios.patch(
        `http://localhost:3001/teams/${props.team.id}`,
        updateData
      );

      if (editingField.startsWith("statistics.")) {
        const field = editingField.split(".")[1];
        props.team.statistics[field as keyof typeof props.team.statistics] =
          editingValue as never;
      } else {
        props.team[editingField as keyof TeamType] = editingValue as never;
      }

      setEditingField(null);
      setEditingValue(null);
    } catch (error) {
      alert("Failed to update the team. Please try again.");
    }
  };

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
          <span className="team-info-item">
            <span>Founded:</span> {props.team.founded}
            {editingField === "founded" ? (
              <div>
                <input
                  placeholder="Founded"
                  type="number"
                  value={editingValue ?? ""}
                  onChange={(e) => setEditingValue(e.target.value)}
                />
                <button onClick={handleSave}>Save</button>
                <button onClick={() => setEditingField(null)}>Cancel</button>
              </div>
            ) : (
              <button onClick={() => handleEdit("founded", props.team.founded)}>
                Edit
              </button>
            )}
          </span>
          <span className="team-info-item">
            <span>Stadium:</span> {props.team.stadium}
            {editingField === "stadium" ? (
              <div>
                <input
                  type="text"
                  value={editingValue ?? ""}
                  onChange={(e) => setEditingValue(e.target.value)}
                />
                <button onClick={handleSave}>Save</button>
                <button onClick={() => setEditingField(null)}>Cancel</button>
              </div>
            ) : (
              <button onClick={() => handleEdit("stadium", props.team.stadium)}>
                Edit
              </button>
            )}
          </span>
          <span className="team-info-item">
            <span>Coach:</span> {props.team.coach}
            {editingField === "coach" ? (
              <div>
                <input
                  type="text"
                  value={editingValue ?? ""}
                  onChange={(e) => setEditingValue(e.target.value)}
                />
                <button onClick={handleSave}>Save</button>
                <button onClick={() => setEditingField(null)}>Cancel</button>
              </div>
            ) : (
              <button onClick={() => handleEdit("coach", props.team.coach)}>
                Edit
              </button>
            )}
          </span>
          <span className="team-info-item">
            <span>President:</span> {props.team.president}
            {editingField === "president" ? (
              <div>
                <input
                  type="text"
                  value={editingValue ?? ""}
                  onChange={(e) => setEditingValue(e.target.value)}
                />
                <button onClick={handleSave}>Save</button>
                <button onClick={() => setEditingField(null)}>Cancel</button>
              </div>
            ) : (
              <button
                onClick={() => handleEdit("president", props.team.president)}
              >
                Edit
              </button>
            )}
          </span>
          <span className="team-info-item">
            <span>Website:</span> {props.team.website}
            {editingField === "website" ? (
              <div>
                <input
                  type="text"
                  value={editingValue ?? ""}
                  onChange={(e) => setEditingValue(e.target.value)}
                />
                <button onClick={handleSave}>Save</button>
                <button onClick={() => setEditingField(null)}>Cancel</button>
              </div>
            ) : (
              <button onClick={() => handleEdit("website", props.team.website)}>
                Edit
              </button>
            )}
          </span>
          <span className="team-info-item">
            <span>League:</span> {props.team.league}
            {editingField === "league" ? (
              <div>
                <input
                  type="text"
                  value={editingValue ?? ""}
                  onChange={(e) => setEditingValue(e.target.value)}
                />
                <button onClick={handleSave}>Save</button>
                <button onClick={() => setEditingField(null)}>Cancel</button>
              </div>
            ) : (
              <button onClick={() => handleEdit("league", props.team.league)}>
                Edit
              </button>
            )}
          </span>
          <span className="team-info-item">
            <span>City:</span> {props.team.city}
            {editingField === "city" ? (
              <div>
                <input
                  type="text"
                  value={editingValue ?? ""}
                  onChange={(e) => setEditingValue(e.target.value)}
                />
                <button onClick={handleSave}>Save</button>
                <button onClick={() => setEditingField(null)}>Cancel</button>
              </div>
            ) : (
              <button onClick={() => handleEdit("city", props.team.city)}>
                Edit
              </button>
            )}
          </span>
          <span className="team-info-item">
            <span>Statistics:</span>
            <br></br>
            wins: {props.team.statistics.wins}
            {editingField === "statistics.wins" ? (
              <div>
                <input
                  type="number"
                  value={editingValue ?? ""}
                  onChange={(e) => setEditingValue(e.target.value)}
                />
                <button onClick={handleSave}>Save</button>
                <button onClick={() => setEditingField(null)}>Cancel</button>
              </div>
            ) : (
              <button
                onClick={() =>
                  handleEdit("statistics.wins", props.team.statistics.wins)
                }
              >
                Edit
              </button>
            )}
            <br></br>
            losses: {props.team.statistics.losses}
            {editingField === "statistics.losses" ? (
              <div>
                <input
                  type="number"
                  value={editingValue ?? ""}
                  onChange={(e) => setEditingValue(e.target.value)}
                />
                <button onClick={handleSave}>Save</button>
                <button onClick={() => setEditingField(null)}>Cancel</button>
              </div>
            ) : (
              <button
                onClick={() =>
                  handleEdit("statistics.losses", props.team.statistics.losses)
                }
              >
                Edit
              </button>
            )}
            <br></br>
            draws: {props.team.statistics.draws}
            {editingField === "statistics.draws" ? (
              <div>
                <input
                  type="number"
                  value={editingValue ?? ""}
                  onChange={(e) => setEditingValue(e.target.value)}
                />
                <button onClick={handleSave}>Save</button>
                <button onClick={() => setEditingField(null)}>Cancel</button>
              </div>
            ) : (
              <button
                onClick={() =>
                  handleEdit("statistics.draws", props.team.statistics.draws)
                }
              >
                Edit
              </button>
            )}
          </span>
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
