import { TeamType } from "../types";

function Menu({
  teams,
  selectedTeam,
  setSelectedTeam,
}: {
  teams: TeamType[];
  selectedTeam: string;
  setSelectedTeam: Function;
}) {
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const teamName = event.target.value;
    setSelectedTeam(teamName);
  };

  return (
    <header>
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
    </header>
  );
}

export default Menu;
