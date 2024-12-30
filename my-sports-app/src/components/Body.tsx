import { useState, useEffect } from "react";
import Player from "./Player";
import Warning from "./Warning";
import Info from "./Info";
import { PlayerType } from "./Player";

type TeamType = {
  teamName: string;
  logo: string;
  founded: number;
  stadium: string;
  coach: string;
  president: string;
  website: string;
  league: string;
  country: string;
  city: string;
  statistics: { wins: number; losses: number; draws: number };
};

function Body() {
  const [players, setPlayers] = useState<PlayerType[]>([]);
  const [teams, setTeams] = useState<TeamType[]>([]);
  const [selectedTeam, setSelectedTeam] = useState<string>("");

  const [playerCount, setPlayerCount] = useState(0);
  useEffect(() => {
    setPlayerCount(playerCount + 1);
    console.log(players);
    console.log(playerCount);
  }, [players]);

  const handleAddTeam = (event: Event) => {
    event.preventDefault();
    const form = document.getElementById("add-team-form") as HTMLFormElement;

    const newTeam: TeamType = {
      teamName: form?.teamName.value || "Team Name",
      logo: form?.logo.value || "Logo",
      founded: form?.founded.value || 0,
      stadium: form?.stadium.value || "Stadium",
      coach: form?.coach.value || "Coach",
      president: form?.president.value || "President",
      website: form?.website.value || "Website",
      league: form?.league.value || "League",
      country: form?.country.value || "Country",
      city: form?.city.value || "City",
      statistics: {
        wins: form?.wins.value || 0,
        losses: form?.losses.value || 0,
        draws: form?.draws.value || 0,
      },
    };

    setTeams([...teams, newTeam]);

    form?.reset();

    console.log(teams);
  };

  const handleAddPlayer = (event: Event) => {
    event.preventDefault();
    const form = document.getElementById("add-player-form") as HTMLFormElement;

    const newPlayer: PlayerType = {
      name: form?.playerName.value || "Name",
      position: form?.playerPosition.value || "Position",
      number: form?.playerNumber.value || 0,
      country: form?.playerCountry.value || "Country",
      age: form?.playerAge.value || 0,
      height: form?.playerHeight.value || 0,
      weight: form?.playerWeight.value || 0,
      games: form?.playerGames.value || 0,
      goals: form?.playerGoals.value || 0,
    };

    setPlayers([...players, newPlayer]);

    form?.reset();
  };

  return (
    <main>
      <div>
        <h2 className="team-info-headline">Team Info:</h2>
        <div className="team-info">
          {teams.map((team, index) => {
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
          })}
        </div>
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

      <div className="forms-container">
        {/*  add forms for creating new players and teams */}
        <form id="add-player-form">
          <h2>Add Player:</h2>
          <input name="playerName" type="text" placeholder="Name" />
          <input name="playerPosition" type="text" placeholder="Position" />
          <input
            name="playerNumber"
            type="number"
            placeholder="Number"
            min="0"
          />
          <input name="playerCountry" type="text" placeholder="Country" />
          <input
            name="playerAge"
            type="number"
            placeholder="Age"
            min="0"
            max="100"
          />
          <input
            name="playerHeight"
            type="number"
            placeholder="Height"
            min="0"
            max="250"
          />
          <input
            name="playerWeight"
            type="number"
            placeholder="Weight"
            min="0"
            max="200"
          />
          <input name="playerGames" type="number" placeholder="Games" min="0" />
          <input name="playerGoals" type="number" placeholder="Goals" min="0" />
          <button type="submit" onClick={(event) => handleAddPlayer(event)}>
            Add Player
          </button>
        </form>

        <form id="add-team-form">
          <h2>Add Team:</h2>
          <input name="teamName" type="text" placeholder="Name" />
          <input name="logo" type="text" placeholder="Logo" />
          <input
            name="founded"
            type="number"
            placeholder="Founded"
            min="1000"
            max="2024"
          />
          <input name="stadium" type="text" placeholder="Stadium" />
          <input name="coach" type="text" placeholder="Coach" />
          <input name="president" type="text" placeholder="President" />
          <input name="website" type="text" placeholder="Website" />
          <input name="league" type="text" placeholder="League" />
          <input name="country" type="text" placeholder="Country" />
          <input name="city" type="text" placeholder="City" />
          <input name="wins" type="number" placeholder="Wins" min="0" />
          <input name="losses" type="number" placeholder="Losses" min="0" />
          <input name="draws" type="number" placeholder="Draws" min="0" />
          <button type="submit" onClick={(event) => handleAddTeam(event)}>
            Add Team
          </button>
        </form>
      </div>
    </main>
  );
}

export default Body;
