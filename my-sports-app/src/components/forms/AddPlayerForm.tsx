import axios from "axios";
import { PlayerType } from "../../types";
import { v4 as uuidv4 } from "uuid";
import "../../styles/forms.css";

function AddPlayerForm({
  players,
  setPlayers,
  setShowForm,
  id,
}: {
  players: PlayerType[];
  setPlayers: Function;
  setShowForm: Function;
  id: string;
}) {
  const handleAddPlayer = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event.preventDefault();
    const form = document.getElementById("add-player-form") as HTMLFormElement;

    const newPlayer: PlayerType = {
      id: uuidv4(),
      teamId: id,
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

    axios
      .post(`http://localhost:3001/players?teamId=${id}`, newPlayer)
      .then((response) => {
        setPlayers([...players, response.data]);
        form?.reset();
      })
      .catch((error) =>
        console.error("There was an error adding the player!", error)
      );

    setShowForm(false);
  };

  return (
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
