import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { TeamType } from "../types";
import axios from "axios";

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
  fetchTeams();
  return (
    <div>
      <h1>Team List</h1>
      {teams.map((team) => (
        <div key={team.id}>
          <h2>{team.teamName}</h2>
          <img src={team.logo} alt={team.teamName} />
          <p>Founded: {team.founded}</p>
          <p>Stadium: {team.stadium}</p>
          <p>Coach: {team.coach}</p>
          <p>President: {team.president}</p>
          <p>Website: {team.website}</p>
          <p>League: {team.league}</p>
          <p>Country: {team.country}</p>
          <p>City: {team.city}</p>
          <p>Wins: {team.statistics.wins}</p>
          <p>Losses: {team.statistics.losses}</p>
          <p>Draws: {team.statistics.draws}</p>
        </div>
      ))}
    </div>
  );
}

export default TeamList;
