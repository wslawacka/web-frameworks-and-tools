import axios from "axios";

import { TeamType } from "../../types";

import { v4 as uuidv4 } from "uuid";

import "../../styles/forms.css";

interface AddTeamFormProps {
  teams: TeamType[];
  setTeams: React.Dispatch<React.SetStateAction<TeamType[]>>;
  setShowForm: React.Dispatch<React.SetStateAction<boolean>>;
}

function AddTeamForm(props: AddTeamFormProps) {
  // function to add a team to the mock database
  const handleAddTeam = async (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    // prevent the default behavior of the form so the page doesn't reload
    event.preventDefault();

    const form = document.getElementById("add-team-form") as HTMLFormElement;

    const newTeam: TeamType = {
      id: uuidv4(),
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

    try {
      // try to add the team to the mock database
      const response = await axios.post("http://localhost:3001/teams", newTeam);
      props.setTeams((prev) => [...prev, response.data]);
      form?.reset();
    } catch (error) {
      alert("There was an error adding the team!");
    }

    props.setShowForm(false);
  };

  return (
    // form to add a team to the mock database
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
        Submit
      </button>
    </form>
  );
}

export default AddTeamForm;
