import { useState, useEffect } from "react";
import Player from "./Player";
import Warning from "./Warning";
import Info from "./Info";
import { TeamType } from "../types";
import { PlayerType } from "../types";
import AddTeamForm from "./forms/AddTeamForm";

function Body({
  teams,
  setTeams,
  selectedTeam,
  isAddTeamClicked,
  setIsAddTeamClicked,
}: {
  teams: TeamType[];
  setTeams: Function;
  selectedTeam: string;
  isAddTeamClicked: boolean;
  setIsAddTeamClicked: Function;
}) {
  const [players, setPlayers] = useState<PlayerType[]>([]);

  const [playerCount, setPlayerCount] = useState(0);
  useEffect(() => {
    setPlayerCount(playerCount + 1);
    console.log(players);
    console.log(playerCount);
  }, [players]);

  return (
    <main>
      {isAddTeamClicked ? (
        <AddTeamForm teams={teams} setTeams={setTeams} />
      ) : (
        <div>
          <h2 className="team-info-headline">Team Info:</h2>
          <div className="team-info">
            {teams.map((team, index) => {
              if (team.teamName !== selectedTeam) {
                return null;
              } else {
                return (
                  <div className="team" key={index}>
                    <div className="team-name">
                      <img src={team.logo} alt="team logo" />
                      <h3>{team.teamName}</h3>
                    </div>
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
                        <span>Wins:</span> {team.statistics.wins}
                      </p>
                      <p>
                        <span>Losses:</span> {team.statistics.losses}
                      </p>
                      <p>
                        <span>Draws:</span> {team.statistics.draws}
                      </p>
                    </div>
                  </div>
                );
              }
            })}
          </div>
          {/* if there are less than 11 players, display the Warning component */
          /* if there are 11 or more players, display the Info component */}
          {players.length < 11 ? <Warning /> : <Info />}
          <div id="players-container">
            <h2>Players:</h2>
            <div className="players">
              {/* map through the players array and display a Player component for each player */}
              {players.map((player, index) => (
                <Player key={index} {...player} />
              ))}
            </div>
          </div>

          <span className="horizontal-line"></span>

          <div className="forms-container">
            {/*  add forms for creating new players and teams */}
          </div>
        </div>
      )}
    </main>
  );
}

export default Body;
