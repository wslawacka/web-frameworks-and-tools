import { TeamType } from "../types";

function Menu({
  teams,
  setTeams,
  selectedTeam,
  setSelectedTeam,
  isAddTeamClicked,
  setIsAddTeamClicked,
}: {
  teams: TeamType[];
  setTeams: Function;
  selectedTeam: string;
  setSelectedTeam: Function;
  isAddTeamClicked: boolean;
  setIsAddTeamClicked: Function;
}) {
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const teamName = event.target.value;
    setSelectedTeam(teamName);
  };

  const handleClick = () => {
    setIsAddTeamClicked(true);
  };

  return (
    <header>
      <div>
        <h1>Sports Team Manager</h1>
        <h2>
          Team's name:
          <select value={selectedTeam} onChange={handleChange}>
            {teams.map((team) => (
              <option key={team.teamName} value={team.teamName}>
                {team.teamName}
              </option>
            ))}
          </select>
        </h2>
      </div>
      <button id="plus-button" onClick={handleClick}>
        +
      </button>
    </header>
  );
}

export default Menu;

// add sth so you cannot name two teams the same

// add sth so you cannot fill in the form with empty strings
