import { useState } from "react";
import { TeamType } from "../types";

import Header from "../components/Header";
import Teams from "../components/Teams";
import Footer from "../components/Footer";
import AddTeamForm from "../components/forms/AddTeamForm";

interface TeamListProps {
  teams: TeamType[];
  setTeams: React.Dispatch<React.SetStateAction<TeamType[]>>;
}

function TeamList(props: TeamListProps) {
  // state to show the add team form
  const [showForm, setShowForm] = useState(false);

  return (
    <>
      <Header />
      {/* if the showForm state is false, show the teams */}
      {!showForm && (
        <>
          <Teams teams={props.teams} setTeams={props.setTeams} />
          <button
            className="add-team-button"
            onClick={() => setShowForm((prev) => !prev)}
          >
            Add Team
          </button>
        </>
      )}
      {/* if the showForm state is true, show the add team form */}
      {showForm && (
        <AddTeamForm
          teams={props.teams}
          setTeams={props.setTeams}
          setShowForm={setShowForm}
        />
      )}
      <Footer />
    </>
  );
}

export default TeamList;
