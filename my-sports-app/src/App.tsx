import { TeamType } from "./types";
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import TeamList from "./pages/TeamList";
import TeamPage from "./pages/TeamPage";

function App() {
  const [teams, setTeams] = useState<TeamType[]>(() => {
    const teams = localStorage.getItem("teams");
    return teams ? JSON.parse(teams) : [];
  });

  useEffect(() => {
    localStorage.setItem("teams", JSON.stringify(teams));
  }, [teams]);

  return (
    <Router>
      <Routes>
        <Route index element={<TeamList teams={teams} setTeams={setTeams} />} />
        <Route path="team/:id" element={<TeamPage teams={teams} />} />
      </Routes>
    </Router>
  );
}

export default App;
