import { TeamType } from "../types";

import Menu from "../components/Menu";
import TeamList from "../components/TeamList";
import Footer from "../components/Footer";

function HomePage({
  teams,
  setTeams,
}: {
  teams: TeamType[];
  setTeams: Function;
}) {
  return (
    <>
      <Menu />
      <TeamList teams={teams} setTeams={setTeams} />
      <Footer />
    </>
  );
}

export default HomePage;
