// In this project, you will develop a React.js TypeScript application using Vite to serve as a user interface for managing and viewing sports teams. The UI will consist of several components, including a Menu for displaying the team’s name, a Body for displaying team data and players, a Player component for showing individual player details, and conditional components like Warning (which alerts the user if there are fewer than 11 players) and Info (which confirms when there are 11 or more players), as well as a Footer component.

// You will style the components using CSS, ensuring that the footer stays at the bottom of the page, the menu remains at the top, and players are styled appropriately. You will pass the team and player data through props between components, while maintaining the list of players in the component’s state. You will also implement routing with react-router to allow navigation between different teams. The app will include a TeamList component as the main page, containing links to view the details of each team. Additionally, you will add forms for creating new players and teams, and dynamically update the player count using the useEffect hook.

// In the final phase, you will integrate REST API functionality by replacing static data with dynamic data fetched using Axios. You will set up a mock REST API using json-server to simulate the backend. This API will support GET requests to fetch data for teams and players, as well as POST requests to add new players and teams.

// Ensure that the application correctly communicates with the REST API, and that all features such as viewing, adding, and updating data are functioning. The final deliverable will be a fully functional React application with REST API integration, ready for deployment.

import { TeamType } from "./types";
import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import TeamPage from "./pages/TeamPage";

function App() {
  const [teams, setTeams] = useState<TeamType[]>([]);
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={<HomePage teams={teams} setTeams={setTeams} />}
        />
        <Route path="/team/:id" element={<TeamPage teams={teams} />} />
      </Routes>
    </Router>
  );
}

export default App;
