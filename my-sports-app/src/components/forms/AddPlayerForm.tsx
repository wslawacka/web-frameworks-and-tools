import axios from "axios";

import { PlayerType } from "../../types";

import { v4 as uuidv4 } from "uuid";

import "../../styles/forms.css";

interface AddPlayerFormProps {
  players: PlayerType[];
  setPlayers: React.Dispatch<React.SetStateAction<PlayerType[]>>;
  setShowForm: React.Dispatch<React.SetStateAction<boolean>>;
  id: string;
}

function AddPlayerForm(props: AddPlayerFormProps) {
  // function to add a player to the mock database
  const handleAddPlayer = async (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    // prevent the default behavior of the form so the page doesn't reload
    event.preventDefault();

    const form = document.getElementById("add-player-form") as HTMLFormElement;

    const newPlayer: PlayerType = {
      id: uuidv4(),
      teamId: props.id,
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

    // try to add the player to the mock database
    try {
      const response = await axios.post(
        `http://localhost:3001/players?teamId=${props.id}`,
        newPlayer
      );
      props.setPlayers((prev) => [...prev, response.data]);
      form?.reset();
    } catch (error) {
      alert("There was an error adding the player!");
    }

    props.setShowForm(false);
  };

  return (
    // form to add a player to the mock database
    <form id="add-player-form">
      <h2>Add Player:</h2>
      <input name="playerName" type="text" placeholder="Name" />
      <input name="playerPosition" type="text" placeholder="Position" />
      <input name="playerNumber" type="number" placeholder="Number" min="0" />
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
        Submit
      </button>
    </form>
  );
}
export default AddPlayerForm;
