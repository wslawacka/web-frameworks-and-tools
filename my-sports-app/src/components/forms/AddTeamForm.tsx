import { TeamType } from "../../types";
import axios from "axios";

function AddTeamForm({
  teams,
  setTeams,
}: {
  teams: TeamType[];
  setTeams: Function;
}) {
  const handleAddTeam = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event.preventDefault();
    const form = document.getElementById("add-team-form") as HTMLFormElement;

    const newTeam: TeamType = {
      id: teams.length + 1,
      teamName: form?.teamName.value || "Team Name",
      logo: form?.logo.value || "https://via.placeholder.com/100",
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

    axios
      .post("http://localhost:5000/teams", newTeam)
      .then((response) => {
        setTeams([...teams, response.data]);
        form?.reset();
      })
      .catch((error) =>
        console.error("There was an error adding the team!", error)
      );
  };

  return (
    <form id="add-team-form">
      <h2>Add Team:</h2>
      <input name="teamName" type="text" placeholder="Name" />
      <input name="logo" type="text" placeholder="Logo" />
      <input name="founded" type="number" placeholder="Founded" />
      <input name="stadium" type="text" placeholder="Stadium" />
      <input name="coach" type="text" placeholder="Coach" />
      <input name="president" type="text" placeholder="President" />
      <input name="website" type="text" placeholder="Website" />
      <input name="league" type="text" placeholder="League" />
      <input name="country" type="text" placeholder="Country" />
      <input name="city" type="text" placeholder="City" />
      <input name="wins" type="number" placeholder="Wins" />
      <input name="losses" type="number" placeholder="Losses" />
      <input name="draws" type="number" placeholder="Draws" />
      <button type="submit" onClick={(e) => handleAddTeam(e)}>
        Add Team
      </button>
    </form>
  );
}

export default AddTeamForm;
