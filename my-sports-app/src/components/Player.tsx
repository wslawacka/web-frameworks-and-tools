import axios from "axios";

import { PlayerType } from "../types";

import { useState } from "react";

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
  // state to track the editing field
  const [editingField, setEditingField] = useState<string | null>(null);
  // state to track the editing value
  const [editingValue, setEditingValue] = useState<string | number | null>(
    null
  );

  const [player, setPlayer] = useState<PlayerType>(props);

  // function to handle the edit field
  const handleEdit = (field: string, value: string | number) => {
    setEditingField(field);
    setEditingValue(value);
  };

  // function to handle the save field
  const handleSave = async () => {
    if (!editingField) return;

    try {
      await axios.patch(`http://localhost:3001/players/${props.id}`, {
        [editingField]: editingValue,
      });

      setPlayer((prevPlayer) => ({
        ...prevPlayer,
        [editingField]: editingValue,
      }));

      setEditingField(null);
      setEditingValue(null);
    } catch (error) {
      alert("Failed to update the player. Please try again.");
    }
  };

  return (
    <div className="player">
      <h2>{player.name}</h2>
      <div className="player-info">
        <span className="player-info-item">
          Position: <span>{player.position}</span>
          {editingField === "position" ? (
            <div>
              <input
                className="edit-input"
                placeholder="Position"
                type="text"
                value={editingValue ?? ""}
                onChange={(e) => setEditingValue(e.target.value)}
              />
              <button className="save-button" onClick={handleSave}>
                Save
              </button>
              <button
                className="cancel-button"
                onClick={() => setEditingField(null)}
              >
                Cancel
              </button>
            </div>
          ) : (
            <button
              className="edit-button"
              onClick={() => handleEdit("position", player.position)}
            >
              Edit
            </button>
          )}
        </span>
        <span className="player-info-item">
          Number: <span>{player.number}</span>
          {editingField === "number" ? (
            <div>
              <input
                className="edit-input"
                placeholder="Number"
                type="number"
                value={editingValue ?? ""}
                onChange={(e) => setEditingValue(e.target.value)}
              />
              <button className="save-button" onClick={handleSave}>
                Save
              </button>
              <button
                className="cancel-button"
                onClick={() => setEditingField(null)}
              >
                Cancel
              </button>
            </div>
          ) : (
            <button
              className="edit-button"
              onClick={() => handleEdit("number", player.number)}
            >
              Edit
            </button>
          )}
        </span>
        <span className="player-info-item">
          Country: <span>{player.country}</span>
          {editingField === "country" ? (
            <div>
              <input
                className="edit-input"
                placeholder="Country"
                type="text"
                value={editingValue ?? ""}
                onChange={(e) => setEditingValue(e.target.value)}
              />
              <button className="save-button" onClick={handleSave}>
                Save
              </button>
              <button
                className="cancel-button"
                onClick={() => setEditingField(null)}
              >
                Cancel
              </button>
            </div>
          ) : (
            <button
              className="edit-button"
              onClick={() => handleEdit("country", player.country)}
            >
              Edit
            </button>
          )}
        </span>
        <span className="player-info-item">
          Age: <span>{player.age}</span>
          {editingField === "age" ? (
            <div>
              <input
                className="edit-input"
                placeholder="Age"
                type="number"
                value={editingValue ?? ""}
                onChange={(e) => setEditingValue(e.target.value)}
              />
              <button className="save-button" onClick={handleSave}>
                Save
              </button>
              <button
                className="cancel-button"
                onClick={() => setEditingField(null)}
              >
                Cancel
              </button>
            </div>
          ) : (
            <button
              className="edit-button"
              onClick={() => handleEdit("age", player.age)}
            >
              Edit
            </button>
          )}
        </span>
        <span className="player-info-item">
          Height: <span>{player.height}</span>
          {editingField === "height" ? (
            <div>
              <input
                className="edit-input"
                placeholder="Height"
                type="number"
                value={editingValue ?? ""}
                onChange={(e) => setEditingValue(e.target.value)}
              />
              <button className="save-button" onClick={handleSave}>
                Save
              </button>
              <button
                className="cancel-button"
                onClick={() => setEditingField(null)}
              >
                Cancel
              </button>
            </div>
          ) : (
            <button
              className="edit-button"
              onClick={() => handleEdit("height", player.height)}
            >
              Edit
            </button>
          )}
        </span>
        <span className="player-info-item">
          Games: <span>{player.games}</span>
          {editingField === "games" ? (
            <div>
              <input
                className="edit-input"
                placeholder="Games"
                type="number"
                value={editingValue ?? ""}
                onChange={(e) => setEditingValue(e.target.value)}
              />
              <button className="save-button" onClick={handleSave}>
                Save
              </button>
              <button
                className="cancel-button"
                onClick={() => setEditingField(null)}
              >
                Cancel
              </button>
            </div>
          ) : (
            <button
              className="edit-button"
              onClick={() => handleEdit("games", player.games)}
            >
              Edit
            </button>
          )}
        </span>
        <span className="player-info-item">
          Goals: <span>{player.goals}</span>
          {editingField === "goals" ? (
            <div>
              <input
                className="edit-input"
                placeholder="Goals"
                type="number"
                value={editingValue ?? ""}
                onChange={(e) => setEditingValue(e.target.value)}
              />
              <button className="save-button" onClick={handleSave}>
                Save
              </button>
              <button
                className="cancel-button"
                onClick={() => setEditingField(null)}
              >
                Cancel
              </button>
            </div>
          ) : (
            <button
              className="edit-button"
              onClick={() => handleEdit("goals", player.goals)}
            >
              Edit
            </button>
          )}
        </span>
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
