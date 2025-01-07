import { useState } from "react";
import { TeamType } from "../types";

import Menu from "../components/Menu";
import TeamList from "../components/TeamList";
import Footer from "../components/Footer";
import AddTeamForm from "../components/forms/AddTeamForm";

function HomePage({
  teams,
  setTeams,
}: {
  teams: TeamType[];
  setTeams: Function;
}) {
  const [showForm, setShowForm] = useState(false);

  return (
    <>
      <Menu />
      <TeamList teams={teams} setTeams={setTeams} />
      <button
        className="add-team-button"
        onClick={() => setShowForm(!showForm)}
      >
        Add Team
      </button>
      {showForm && (
        <AddTeamForm
          teams={teams}
          setTeams={setTeams}
          setShowForm={setShowForm}
        />
      )}
      <Footer />
    </>
  );
}

export default HomePage;
