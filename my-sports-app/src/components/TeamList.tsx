import { useEffect } from "react";
import { Link } from "react-router-dom";
import { TeamType } from "../types";
import axios from "axios";
import "../styles/teamList.css";

function TeamList({
  teams,
  setTeams,
}: {
  teams: TeamType[];
  setTeams: Function;
}) {
  const fetchTeams = async () => {
    try {
      const response = await axios.get("http://localhost:3001/teams");
      setTeams(response.data);
    } catch (error) {
      console.error("Error fetching teams:", error);
    }
  };

  useEffect(() => {
    fetchTeams();
  }, []);

  const deleteTeam = async (id: string) => {
    try {
      console.log(`Attempting to delete team with id: ${id}`);
      await axios.delete(`http://localhost:3001/teams/${id}`);
      fetchTeams();
    } catch (error) {
      console.error("Error deleting team:", error);
      alert("Failed to delete the team. Please try again.");
    }
  };

  return (
    <div className="team-list-container">
      <h1>Teams</h1>
      <h2>Click on a team name to see more information</h2>
      <ul>
        {teams.map((team) => (
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

export default TeamList;
