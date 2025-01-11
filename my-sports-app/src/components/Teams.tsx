import axios from "axios";

import { TeamType } from "../types";

import { useEffect } from "react";
import { Link } from "react-router-dom";

import "../styles/teams.css";

interface TeamsProps {
  teams: TeamType[];
  setTeams: React.Dispatch<React.SetStateAction<TeamType[]>>;
}

function Teams(props: TeamsProps) {
  // function to fetch teams from the mock database
  const fetchTeams = async () => {
    try {
      const response = await axios.get("http://localhost:3001/teams");
      props.setTeams(response.data);
    } catch (error) {
      alert("Failed to fetch teams. Please try again.");
    }
  };

  // fetch teams from the mock database when the component is mounted
  useEffect(() => {
    fetchTeams();
  }, []);

  // function to delete a team from the mock database which also deletes all players associated with the team
  const deleteTeam = async (id: string) => {
    try {
      // fetch all players associated with the team
      const response = await axios.get(
        `http://localhost:3001/players?teamId=${id}`
      );
      const players = response.data;

      // delete each player individually
      for (const player of players) {
        await axios.delete(`http://localhost:3001/players/${player.id}`);
      }

      // delete the team
      await axios.delete(`http://localhost:3001/teams/${id}`);

      // refresh the list of teams
      fetchTeams();
    } catch (error) {
      alert("Failed to delete the team. Please try again.");
    }
  };

  return (
    <div className="team-list-container">
      <h1>Teams</h1>
      <h2>Click on a team name to see more information</h2>
      {/* list of teams' names linked to the team page */}
      <ul>
        {props.teams.map((team) => (
          <li key={team.id}>
            <Link className="link" to={`/team/${team.id}`}>
              {team.teamName}
            </Link>
            <button
              className="delete-team-button"
              onClick={() => deleteTeam(team.id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Teams;
