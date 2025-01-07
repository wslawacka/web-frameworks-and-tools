import { useEffect, useState } from "react";
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
      const response = await axios.get("http://localhost:5000/teams");
      setTeams(response.data);
    } catch (error) {
      console.error("Error fetching teams:", error);
    }
  };

  useEffect(() => {
    fetchTeams();
  }, []);

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
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TeamList;
