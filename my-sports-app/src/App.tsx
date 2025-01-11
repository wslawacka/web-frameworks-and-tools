import { TeamType } from "./types";
import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import TeamList from "./pages/TeamList";
import TeamPage from "./pages/TeamPage";

function App() {
  const [teams, setTeams] = useState<TeamType[]>([]);

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
